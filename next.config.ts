
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Explicitly set workspace root to silence the "multiple lockfiles" warning
  outputFileTracingRoot: path.join(__dirname),
  output: 'export',
  trailingSlash: true,

  // Enable gzip compression for production
  compress: true,

  // Strict mode for better dev-time warnings
  reactStrictMode: true,

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
