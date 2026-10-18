# Muhammed Faheem AP — Portfolio

Personal cybersecurity portfolio featuring practical projects, technical skills and contact details.

**Live portfolio:** https://faheemapofficial.github.io/portfolio/

## Hosting on GitHub Pages

This is a static website. No account keys, database, build tools or paid hosting are required.

1. Open this repository’s **Settings → Pages**.
2. Set **Source** to **Deploy from a branch**.
3. Select **main** and **/ (root)**, then Save.
4. In **Actions**, wait for **pages build and deployment** to complete.
5. Visit the live portfolio above. Enable **Enforce HTTPS** if the option is available.

Changes pushed to main deploy automatically with this configuration. Keep index.html in the repository root. The published URL includes /portfolio/, so asset links are relative.

## Local preview

```sh
git clone https://github.com/faheemapofficial/portfolio.git
cd portfolio
python3 -m http.server 8000
```

Open http://localhost:8000. No npm install is needed.

## Files and editing

- `index.html`: content, project links, contact details and search/social metadata.
- `assets/styles.css`: responsive design, colors and reduced-motion support.
- `assets/main.js`: accessible mobile navigation.
- `assets/portrait.webp`: optimized original portrait; no AI changes to the face.
- `assets/favicon.svg`: browser icon.
- `404.html`: custom missing-page screen.
- `sitemap.xml`: canonical portfolio URL for search engines.
- `.nojekyll`: serves the site as plain static files.

To replace the photo, export a WebP and update its dimensions and alt text in index.html. To change the site URL, update the canonical URL, Open Graph URL/image, sitemap and 404 home link together.

## Custom domain (optional)

Buy a domain from a registrar, then follow the current GitHub Pages custom-domain instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

Add it in Settings → Pages and configure the registrar’s DNS as instructed. Wait for verification and TLS before enabling HTTPS. Update the URLs listed above after the domain works. A purchased domain is optional; the existing HTTPS URL works without one.

## Verification

Check navigation at phone and desktop widths, keyboard focus and Escape to close the mobile menu. Confirm project links and email details after editing. External Google Fonts require an internet connection; system font fallbacks remain available.

All security testing represented here belongs in authorized labs or explicitly permitted scopes.
