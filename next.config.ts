import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export', // Enable static HTML export
  images: {
    unoptimized: true, // GitHub Pages doesn’t support Image Optimization
  },
  basePath: isProd ? "/GAWebsite" : "",
  assetPrefix: isProd ? "/GAWebsite/" : "",
};

export default nextConfig;