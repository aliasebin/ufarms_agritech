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

console.log(`${colors.cyan}Starting static export process...${colors.reset}`)

// Step 1: Build the Next.js application
console.log(`${colors.yellow}Building Next.js application...${colors.reset}`)
try {
  execSync("npm run build", { stdio: "inherit" })
  console.log(`${colors.green}Build completed successfully!${colors.reset}`)
} catch (error) {
  console.error("Build failed:", error)
  process.exit(1)
}

// Step 2: Check if the out directory exists
const outDir = path.join(process.cwd(), "out")
if (fs.existsSync(outDir)) {
  console.log(`${colors.green}Static export generated successfully in the 'out' directory!${colors.reset}`)

  // Count the number of files
  let fileCount = 0
  const countFiles = (dir) => {
    const files = fs.readdirSync(dir)
    for (const file of files) {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        countFiles(filePath)
      } else {
        fileCount++
      }
    }
  }

  countFiles(outDir)
  console.log(`${colors.blue}Total files generated: ${fileCount}${colors.reset}`)

  console.log(`${colors.magenta}
To test the static site locally, you can use a simple HTTP server:
  npx serve out

To deploy to a static hosting service:
1. Upload all files from the 'out' directory to your hosting provider
2. Make sure your hosting provider is configured to handle client-side routing

Your static site is ready for deployment!
${colors.reset}`)
} else {
  console.error('Static export failed: "out" directory not found')
  process.exit(1)
}
