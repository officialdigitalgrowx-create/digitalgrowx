<?php
// PHP Proxy to serve _next static files (bypass 403 restrictions)
// This serves files from _next directory with proper MIME types

// Get the requested file path
$requestUri = $_SERVER['REQUEST_URI'];
$path = parse_url($requestUri, PHP_URL_PATH);

// Remove /serve-asset.php from path if present
$path = str_replace('/serve-asset.php', '', $path);

// Security: Only allow _next directory
if (strpos($path, '_next') === false) {
    http_response_code(403);
    exit('Access denied');
}

// Build file path
$filePath = __DIR__ . $path;

// Check if file exists
if (!file_exists($filePath) || !is_file($filePath)) {
    http_response_code(404);
    exit('File not found');
}

// Get file extension
$ext = strtolower(pathinfo($filePath, PATHINFO_EXTENSION));

// Set proper MIME type
$mimeTypes = [
    'js' => 'application/javascript',
    'mjs' => 'application/javascript',
    'css' => 'text/css',
    'woff' => 'font/woff',
    'woff2' => 'font/woff2',
    'ttf' => 'font/ttf',
    'otf' => 'font/otf',
    'eot' => 'application/vnd.ms-fontobject',
    'json' => 'application/json',
    'map' => 'application/json',
];

$mimeType = $mimeTypes[$ext] ?? 'application/octet-stream';

// Set headers
header('Content-Type: ' . $mimeType);
header('Access-Control-Allow-Origin: *');
header('Cache-Control: public, max-age=31536000');
header('X-Content-Type-Options: nosniff');

// Output file
readfile($filePath);
exit;
