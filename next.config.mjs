/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/UframsAgritech' : '',
  assetPrefix: isProd ? '/UframsAgritech/' : '',
  trailingSlash: true,
};

export default nextConfig;
