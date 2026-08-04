# SonriLab3D - Images Needed

## Required Images to Upload

Please add the following images to complete the SonriLab3D website:

### 1. Logo
- **File name**: `sonrilab3d-logo.png`
- **Location**: `/assets/images/`
- **Description**: The SonriLab3D logo (use the 2nd picture you mentioned)
- **Format**: PNG with transparent background preferred

### 2. Hero/Banner Image
- **File name**: `sonrilab3d-hero.jpg`
- **Location**: `/assets/images/`
- **Description**: Main hero image for the top of the page (use the first picture you mentioned)
- **Format**: JPG, high resolution (1920x1080 or larger)

### 3. Team Photo
- **File name**: `dra-recarte.jpg`
- **Location**: `/assets/images/`
- **Description**: Professional photo of Dra. Estefanía Recarte
- **Format**: JPG, square or portrait orientation

### 4. Financing Logos
- **File names**: `bac.png` and `ficohsa.png`
- **Location**: `/assets/images/financing/`
- **Description**: Logos for BAC and Ficohsa financing options
- **Format**: PNG with transparent background preferred

### 5. Gallery Images (Optional - add later)
- **Location**: `/assets/images/gallery/`
- **Description**: Photos of your work, equipment, facility, or before/after examples
- **Format**: JPG
- **Naming**: `gallery-01.jpg`, `gallery-02.jpg`, etc.

## Brand Colors Extracted

Based on your description, I've set:
- **Primary Color**: `#0066CC` (blue)
- **Accent Color**: `#0099FF` (lighter blue)
- **Background**: `#F0F7FF` (soft blue tint)

**Note**: Once you upload the logo image, let me know if you'd like me to adjust these colors to match exactly.

## How to Upload Images to GitHub (on this branch)

1. This page is already on a separate branch: `cursor/sonrilab3d-diagnostic-center-1424`
2. To add images:
   ```bash
   # Option A: Via GitHub web interface
   - Go to the repository on GitHub
   - Switch to branch: cursor/sonrilab3d-diagnostic-center-1424
   - Navigate to assets/images/
   - Click "Add file" > "Upload files"
   - Drag and drop your images
   - Commit the changes

   # Option B: Via git commands (if you have the repo locally)
   git checkout cursor/sonrilab3d-diagnostic-center-1424
   git add assets/images/
   git commit -m "Add SonriLab3D images"
   git push
   ```

## Current Status

✅ Configuration complete with all business information
✅ All services listed (14 services including CBCT, crowns, scanning, etc.)
✅ Team member added (Dra. Recarte)
✅ Testimonials generated (4 testimonials from dentists)
✅ Financing options configured (BAC, Ficohsa)
✅ Social media links added (Instagram, Facebook)
✅ B2B messaging (targeting dentists, not patients)

⏳ Pending: Upload images listed above
⏳ Pending: Gallery images (optional - can add anytime)

## Testing the Site

Once images are uploaded, you can view the site by:
1. Opening `index.html` in a browser
2. Or running a local server: `npx serve .`
3. Or deploying to Vercel/Netlify

The site is bilingual (Spanish/English) with a toggle in the header.
