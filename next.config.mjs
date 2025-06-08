/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export as a fully static site
  output: 'export',

  // Skip ESLint checks during build (optional)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Skip TypeScript errors during build (optional)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable Next.js built-in image optimization (required for static export)
  images: {
    unoptimized: true,
  },

  // No base path since deployed at root domain
  basePath: '',

  // No asset prefix since deployed at root domain
  assetPrefix: '',

  // Append trailing slash to routes for static export compatibility
  trailingSlash: true,
};

export default nextConfig;
