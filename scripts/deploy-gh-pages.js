const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

// Colors for console output
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
}

console.log(`${colors.cyan}Starting GitHub Pages deployment process...${colors.reset}`)

// Step 1: Build the Next.js application
console.log(`${colors.yellow}Building Next.js application...${colors.reset}`)
try {
  execSync("npm run build", { stdio: "inherit" })
  console.log(`${colors.green}Build completed successfully!${colors.reset}`)
} catch (error) {
  console.error("Build failed:", error)
  process.exit(1)
}

// Step 2: Create .nojekyll file to prevent Jekyll processing
const outDir = path.join(process.cwd(), "out")
fs.writeFileSync(path.join(outDir, ".nojekyll"), "")
console.log(`${colors.green}Created .nojekyll file${colors.reset}`)

// Step 3: Deploy to GitHub Pages using gh-pages
console.log(`${colors.yellow}Deploying to GitHub Pages...${colors.reset}`)
try {
  execSync("npx gh-pages -d out -t true", { stdio: "inherit" })
  console.log(`${colors.green}Deployment completed successfully!${colors.reset}`)

  console.log(`${colors.magenta}
Your site should now be available at:
https://YOUR-USERNAME.github.io/ufarms-website/

Note: It might take a few minutes for the changes to propagate.
${colors.reset}`)
} catch (error) {
  console.error("Deployment failed:", error)
  process.exit(1)
}
