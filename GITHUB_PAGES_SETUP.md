# GitHub Pages Deployment Guide

## ✅ Configuration Complete

Your Angular application is now configured for GitHub Pages deployment with the correct `baseHref`.

## 🚀 Deployment Methods

### Option 1: Automatic Deployment (Recommended)

A GitHub Actions workflow has been created (`.github/workflows/deploy-github-pages.yml`) that will automatically deploy your app whenever you push to `master` or `main` branch.

**Steps:**
1. Enable GitHub Pages in your repository settings:
   - Go to: `Settings` → `Pages`
   - Source: Select `GitHub Actions`

2. Push your changes:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push
   ```

3. The workflow will automatically build and deploy your app.

### Option 2: Manual Deployment

If you prefer to deploy manually:

1. **Build for GitHub Pages:**
   ```bash
   npm run build:github-pages
   ```

2. **Commit and push the `docs` folder:**
   ```bash
   git add docs/
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

3. **Configure GitHub Pages:**
   - Go to: `Settings` → `Pages`
   - Source: Select `Deploy from a branch`
   - Branch: `master` or `main`
   - Folder: `/docs`
   - Click `Save`

## 📝 Important Notes

- **Base Href**: The app is configured with `baseHref: "/Senior-Study/"` which matches your repository name
- **`.nojekyll` file**: Created in `docs/` to prevent Jekyll processing
- **Build Output**: Files are automatically moved from `docs/browser/` to `docs/` after build

## 🔍 Verify Deployment

After deployment, your app will be available at:
```
https://kyrilosnasr.github.io/Senior-Study/
```

## 🐛 Troubleshooting

If you see 404 errors:
1. Verify the `baseHref` in `angular.json` matches your repository name
2. Check that GitHub Pages is enabled and pointing to the `docs` folder
3. Ensure the `.nojekyll` file exists in the `docs` folder
4. Wait a few minutes for GitHub Pages to update after pushing

## 📦 Build Scripts

- `npm run build:github-pages` - Build and prepare for GitHub Pages
- `npm run deploy:github-pages` - Move files from browser/ to docs/ (runs automatically)

