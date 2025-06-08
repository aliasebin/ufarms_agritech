# Ufarms Website - Static Export Guide

This guide explains how to generate a static export of the Ufarms website and deploy it to any static hosting service.

## Generating a Static Export

To generate a static export of the website, follow these steps:

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

2. Run the export script:
   \`\`\`
   npm run export
   \`\`\`

3. The static files will be generated in the `out` directory.

## Testing the Static Export Locally

To test the static export locally, you can use a simple HTTP server:

\`\`\`
npx serve out
\`\`\`

This will start a local server, typically at http://localhost:3000, where you can view the static site.

## Deploying to a Static Hosting Service

To deploy the static site to a hosting service:

1. Upload all files from the `out` directory to your hosting provider
2. Make sure your hosting provider is configured to handle client-side routing

### Deployment Options

Here are some popular static hosting options:

- **Vercel**: Automatically handles Next.js static exports
- **Netlify**: Drag and drop the `out` folder or connect to your GitHub repository
- **GitHub Pages**: Upload the contents of the `out` directory
- **Amazon S3**: Upload the contents and configure for static website hosting
- **Firebase Hosting**: Use the Firebase CLI to deploy the `out` directory

## Important Notes

- Images are set to `unoptimized: true` in the Next.js config to work with static exports
- The site uses client-side navigation, so your hosting provider should be configured to redirect all requests to `index.html`
- Some dynamic features may need to be adjusted for a fully static site

## Troubleshooting

If you encounter issues with the static export:

1. Make sure all data fetching is compatible with static generation
2. Check that all dynamic routes have `getStaticPaths` defined
3. Ensure all images have proper dimensions and are properly optimized
4. Test the site thoroughly after deployment to catch any client-side routing issues
