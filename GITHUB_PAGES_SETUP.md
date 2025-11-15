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
- **`404.html` file**: Automatically created to handle SPA routing (fixes refresh issues)
- **Build Output**: Files are automatically moved from `docs/browser/` to `docs/` after build

## 🔍 Verify Deployment

After deployment, your app will be available at:
```
https://kyrilosnasr.github.io/Senior-Study/
```

## 🐛 Troubleshooting

### 404 Errors on Refresh
If you see "Page not found" when refreshing a route:
1. Ensure `404.html` exists in the `docs` folder (created automatically during build)
2. The `404.html` file redirects to `index.html` so Angular's router can handle the route
3. After deploying, wait a few minutes for GitHub Pages to update

### Other 404 Errors
1. Verify the `baseHref` in `angular.json` matches your repository name
2. Check that GitHub Pages is enabled and pointing to the `docs` folder
3. Ensure the `.nojekyll` file exists in the `docs` folder
4. Wait a few minutes for GitHub Pages to update after pushing

## 📦 Build Scripts

- `npm run build:github-pages` - Build and prepare for GitHub Pages (includes 404.html creation)
- `npm run deploy:github-pages` - Move files from browser/ to docs/ and create 404.html (runs automatically)
- `npm run create-404` - Create 404.html from index.html (for SPA routing support)

