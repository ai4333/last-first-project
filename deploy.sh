#!/bin/bash

# Build the project
npm run build

# Fix asset paths for GitHub Pages
sed -i '' 's|/last-first-project/assets/|/assets/|g' dist/index.html

# Deploy to gh-pages branch
git subtree push --prefix dist origin gh-pages

echo "Deployment complete! Your site is available at: https://ai4333.github.io/last-first-project/"
