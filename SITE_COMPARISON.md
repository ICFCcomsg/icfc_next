# ICFC reference comparison

Reference: https://icfc.com.sg/index.html

Compared all 34 reference HTML pages against the supplied `doc/icfc.com.sg/public_html` files. Their content and image references match after normalizing line endings. The reference styles were used to update the existing native TSX implementation.

## Changes

- Restored reference typography with self-hosted Inter Tight, responsive grids, section spacing, colors, borders, and card hover states across the page components.
- Matched the shared header, language control placement, navigation sizing, breadcrumbs, footer, and floating contact controls.
- Restored visible section images and background images; replaced unavailable reference assets with existing local assets.
- Used native SVG icons, React accordions, tabs, carousels, dialogs, and industry filtering.
- Retained atomic component folders and Tailwind utilities. No injected HTML, inline styles, vendor stylesheets, or legacy DOM scripts are used.
- Preserved the correct active navigation and single page composition. Changed internal links and routes to extension-free URLs such as `/about`. Legacy `.html` URLs and `/contact-us.php` redirect to their clean equivalents; `/index.html` redirects to `/`.
- The reference advertises 25 industries but defines 12 records. The app displays those 12 records and the actual filtered count.

## Comparison checks (before the clean URL migration)

- Production build, TypeScript, lint, and whitespace checks pass.
- All 34 page routes and the contact PHP alias return HTTP 200. Each content page has one main and one footer; the reference's `Version/index.html` is a placeholder page.
- Browser inspection covered home, industry, about, services, service detail, blog, and contact page families, including mobile navigation and industry filtering.
- Inspected pages have no broken images or horizontal overflow. Service FAQ switching leaves one answer open, with no browser console errors in that inspection.

## Remaining integrations

Contact and newsletter forms open an email draft; the reference's PHP submission backend is not implemented in Next.js. The language selector translates the shared header, rather than providing the reference's whole-page Google translation. Some broken or empty reference links point to relevant existing pages in the app.
