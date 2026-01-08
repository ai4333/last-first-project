#!/bin/bash

# Build the project
npm run build

# Deploy to gh-pages branch
git subtree push --prefix dist origin gh-pages

echo "Deployment complete! Your site is available at: https://ai4333.github.io/last-first-project/"
