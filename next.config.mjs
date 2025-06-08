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
  basePath: isProd ? '/ufarms_agritech' : '',
  assetPrefix: isProd ? '/ufarms_agritech/' : '',
  trailingSlash: true,
};

export default nextConfig;
