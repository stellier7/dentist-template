# SonriLab3D Deployment Guide

## Current Status

✅ **Branch Created**: `cursor/sonrilab3d-diagnostic-center-1424`
✅ **Pull Request**: [PR #3](https://github.com/stellier7/dentist-template/pull/3)
✅ **Configuration**: Complete with all business information
✅ **Services**: 14 services configured
✅ **Team**: Dra. Estefanía Recarte added
✅ **Social Media**: Instagram and Facebook linked

⏳ **Pending**: Upload images (see SONRILAB3D-IMAGES-NEEDED.md)

## Viewing the Site

### Option 1: Local Testing
```bash
# Make sure you're on the correct branch
git checkout cursor/sonrilab3d-diagnostic-center-1424

# Start a local server
npx serve .

# Open in browser: http://localhost:3000
```

### Option 2: Direct File
Simply open `index.html` in your web browser.

## Uploading Images to GitHub

### Via GitHub Web Interface (Easiest)

1. Go to: https://github.com/stellier7/dentist-template
2. Switch to branch: `cursor/sonrilab3d-diagnostic-center-1424`
3. Navigate to `assets/images/`
4. Click "Add file" → "Upload files"
5. Drag and drop your images:
   - `sonrilab3d-logo.png`
   - `sonrilab3d-hero.jpg`
   - `dra-recarte.jpg`
6. Go to `assets/images/financing/` and upload:
   - `bac.png`
   - `ficohsa.png`
7. Commit changes with message: "Add SonriLab3D images"

### Via Git Command Line

```bash
# Switch to the branch
git checkout cursor/sonrilab3d-diagnostic-center-1424

# Copy your images to the correct folders
# (adjust paths to where your images are located)
cp /path/to/logo.png assets/images/sonrilab3d-logo.png
cp /path/to/hero.jpg assets/images/sonrilab3d-hero.jpg
cp /path/to/recarte.jpg assets/images/dra-recarte.jpg
cp /path/to/bac.png assets/images/financing/bac.png
cp /path/to/ficohsa.png assets/images/financing/ficohsa.png

# Add and commit
git add assets/images/
git commit -m "Add SonriLab3D images"

# Push to GitHub
git push origin cursor/sonrilab3d-diagnostic-center-1424
```

## Deploying to Vercel

Once images are uploaded and you're satisfied with the site:

### Quick Deploy
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Select branch: `cursor/sonrilab3d-diagnostic-center-1424`
5. Framework Preset: **Other** (static site)
6. Click "Deploy"

### Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

## Making Updates

All content is controlled by `js/config.js`. To update:

1. Edit `js/config.js`
2. Commit and push changes
3. Changes will reflect immediately (no rebuild needed)

## Important Notes

- **This branch is separate** from main and Clinica Bonilla branch
- **Images are NOT on main** - they stay on this feature branch
- **Merge to main** only when you're ready to go live
- **Test thoroughly** before merging

## Branch Structure

```
main
├── cursor/clinica-dental-bonilla-b8d3 (Clinica Bonilla site)
└── cursor/sonrilab3d-diagnostic-center-1424 (SonriLab3D site) ← YOU ARE HERE
```

Each prospect has their own branch and can be deployed independently!

## Questions?

See the main README.md or SONRILAB3D-IMAGES-NEEDED.md for more details.
