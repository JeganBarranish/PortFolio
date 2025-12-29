# GitHub Pages Troubleshooting Guide

## ✅ Fixes Applied

1. **Added `404.html`** - Required for React SPAs on GitHub Pages
2. **Added `basename="/PortFolio"`** to BrowserRouter - Critical for routing with base path
3. **Verified base path** in `vite.config.js` - Set to `/PortFolio/`

## 🔍 Common Issues & Solutions

### Issue: Blank/White Page

**Possible Causes:**
1. GitHub Pages not configured correctly
2. Missing 404.html file
3. BrowserRouter missing basename
4. Assets not loading (wrong base path)

**Solutions:**
1. ✅ Check GitHub Pages settings:
   - Go to: https://github.com/JeganBarranish/PortFolio/settings/pages
   - Source: `gh-pages` branch
   - Folder: `/` (root)
   
2. ✅ Verify 404.html exists in gh-pages branch
3. ✅ Ensure BrowserRouter has `basename="/PortFolio"`
4. ✅ Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)

### Issue: 404 Error

**Solution:**
- The `404.html` file should redirect to `index.html`
- Make sure it's in the `dist/` folder after build
- It will be automatically copied from `public/404.html`

### Issue: Assets Not Loading (CSS/JS files)

**Solution:**
- Verify `vite.config.js` has `base: "/PortFolio/"`
- Rebuild and redeploy: `npm run deploy`
- Check browser console for 404 errors on assets

### Issue: Routing Not Working

**Solution:**
- Ensure `BrowserRouter` has `basename="/PortFolio"`
- The 404.html handles client-side routing redirects

## 🚀 Deployment Checklist

Before deploying, verify:

- [ ] `vite.config.js` has `base: "/PortFolio/"`
- [ ] `src/App.jsx` has `BrowserRouter basename="/PortFolio"`
- [ ] `public/404.html` exists
- [ ] Run `npm run build` to verify dist folder
- [ ] Check `dist/index.html` has correct asset paths (should include `/PortFolio/`)

## 📝 Step-by-Step Redeployment

1. **Build locally to test:**
   ```bash
   npm run build
   npm run preview
   ```
   Visit `http://localhost:4173/PortFolio/` to verify it works

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

3. **Verify GitHub Pages Settings:**
   - Go to: https://github.com/JeganBarranish/PortFolio/settings/pages
   - Branch: `gh-pages`
   - Folder: `/` (root)
   - Click Save

4. **Wait 1-5 minutes** for GitHub to process

5. **Test the site:**
   - Visit: https://jeganbarranish.github.io/PortFolio/
   - Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

## 🔧 Verify Deployment

Check what's in the gh-pages branch:

```bash
git fetch origin gh-pages
git checkout gh-pages
ls -la
# Should see: index.html, 404.html, assets/, favicon.ico, etc.
git checkout main
```

## 📞 Still Not Working?

1. **Check GitHub Actions/Pages logs:**
   - Go to: https://github.com/JeganBarranish/PortFolio/actions
   - Look for any deployment errors

2. **Verify repository is public:**
   - GitHub Pages free tier requires public repos
   - Or upgrade to GitHub Pro for private repo support

3. **Check browser console:**
   - Open DevTools (F12)
   - Look for errors in Console tab
   - Check Network tab for failed requests

4. **Verify the URL:**
   - Must be: `https://jeganbarranish.github.io/PortFolio/`
   - Note the capital P and F in PortFolio
   - Must match your repository name exactly

