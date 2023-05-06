/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: 'dist',
  eslint: { ignoreDuringBuilds: true },
  experimental: { appDir: true },
};

module.exports = nextConfig;
