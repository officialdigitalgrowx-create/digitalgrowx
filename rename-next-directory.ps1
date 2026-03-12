# PowerShell script to rename _next to next-static and update all references
# This bypasses security restrictions on underscore-prefixed directories

$sourceDir = "zip-check"
$oldName = "_next"
$newName = "next-static"

Write-Host "Starting directory rename process..." -ForegroundColor Green

# Step 1: Rename the directory
Write-Host "`nStep 1: Renaming directory from '$oldName' to '$newName'..." -ForegroundColor Yellow
if (Test-Path "$sourceDir\$oldName") {
    Rename-Item -Path "$sourceDir\$oldName" -NewName $newName -Force
    Write-Host "✓ Directory renamed successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Directory '$oldName' not found!" -ForegroundColor Red
    exit 1
}

# Step 2: Update all HTML files
Write-Host "`nStep 2: Updating references in HTML files..." -ForegroundColor Yellow
$htmlFiles = Get-ChildItem -Path $sourceDir -Filter "*.html" -Recurse
$totalFiles = $htmlFiles.Count
$updatedCount = 0

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    # Replace all occurrences of /_next/ with /next-static/
    $content = $content -replace '/_next/', '/next-static/'
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $updatedCount++
        Write-Host "  ✓ Updated: $($file.Name)" -ForegroundColor Gray
    }
}

Write-Host "✓ Updated $updatedCount out of $totalFiles HTML files" -ForegroundColor Green

# Step 3: Update TXT files (if any contain references)
Write-Host "`nStep 3: Updating references in TXT files..." -ForegroundColor Yellow
$txtFiles = Get-ChildItem -Path $sourceDir -Filter "*.txt" -Recurse
$txtUpdatedCount = 0

foreach ($file in $txtFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    $content = $content -replace '/_next/', '/next-static/'
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $txtUpdatedCount++
    }
}

Write-Host "✓ Updated $txtUpdatedCount TXT files" -ForegroundColor Green

# Step 4: Create new deployment zip
Write-Host "`nStep 4: Creating new deployment package..." -ForegroundColor Yellow
$zipName = "digital-growx-cpanel-deploy-v3-renamed.zip"

if (Test-Path $zipName) {
    Remove-Item $zipName -Force
}

Compress-Archive -Path "$sourceDir\*" -DestinationPath $zipName -Force
Write-Host "✓ Created: $zipName" -ForegroundColor Green

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "✓ PROCESS COMPLETED SUCCESSFULLY!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "`nNew deployment package: $zipName" -ForegroundColor Yellow
Write-Host "This package has 'next-static' instead of '_next'" -ForegroundColor Yellow
Write-Host "`nUpload this to cPanel and extract it." -ForegroundColor White
Write-Host "The 403 Forbidden errors should be resolved!" -ForegroundColor Green
