import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/accref',  // Important for GitHub Pages subfolder
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
