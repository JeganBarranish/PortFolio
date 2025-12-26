#!/bin/bash

# GitHub Pages Deployment Script
echo "🚀 Starting GitHub Pages deployment..."

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed or not in PATH"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Install gh-pages if not already installed
if ! npm list gh-pages &>/dev/null; then
    echo "📦 Installing gh-pages..."
    npm install --save-dev gh-pages
fi

# Build and deploy to GitHub Pages
echo "🔨 Building project and deploying to GitHub Pages..."
npm run deploy

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site will be live at: https://jeganbarranish.github.io/PortFolio/"
echo ""
echo "📝 Next steps:"
echo "1. Go to: https://github.com/JeganBarranish/PortFolio/settings/pages"
echo "2. Set Source: Deploy from a branch"
echo "3. Set Branch: gh-pages"
echo "4. Set Folder: / (root)"
echo "5. Click Save"
echo ""
echo "⏱️  Note: It may take 1-5 minutes for GitHub Pages to update."

