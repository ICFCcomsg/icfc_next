# ICFC reference comparison

Reference: https://icfc.com.sg/index.html

Compared all 34 reference HTML pages against the supplied `doc/icfc.com.sg/public_html` files. Their content and image references match after normalizing line endings. The reference styles were used to update the existing native TSX implementation.

## Changes

- Restored reference typography with self-hosted Inter Tight, responsive grids, section spacing, colors, borders, and card hover states across the page components.
- Matched the shared header, language control placement, navigation sizing, breadcrumbs, footer, and floating contact controls.
- Restored visible section images and background images; replaced unavailable reference assets with existing local assets.
- Used native SVG icons, React accordions, tabs, carousels, dialogs, and industry filtering.
- Retained atomic component folders and Tailwind utilities. No injected HTML, vendor stylesheets, or legacy DOM scripts are used. Static styling uses Tailwind; Motion controls runtime animation transforms.
- Preserved the correct active navigation and single page composition. Changed internal links and routes to extension-free URLs such as `/about`. Legacy `.html` URLs and `/contact-us.php` redirect to their clean equivalents; `/index.html` redirects to `/`.
- The reference advertises 25 industries but defines 12 records. The app displays those 12 records and the actual filtered count.

## Comparison checks (before the clean URL migration)

- Production build, TypeScript, lint, and whitespace checks pass.
- All 34 page routes and the contact PHP alias return HTTP 200. Each content page has one main and one footer; the reference's `Version/index.html` is a placeholder page.
- Browser inspection covered home, industry, about, services, service detail, blog, and contact page families, including mobile navigation and industry filtering.
- Inspected pages have no broken images or horizontal overflow. Service FAQ switching leaves one answer open, with no browser console errors in that inspection.

## Header behavior

The top banner scrolls out of view. After 200px, navigation slides into its fixed position over 0.6 seconds. Tablet content wraps and centers; below 480px the guidance message hides while language and contact controls remain available.

## Motion animation migration

Restored source-marked staggered headings, delayed fade/slide entrances, directional image reveals, scroll decoration movement, the marquee, and numeric counters using `motion/react`. Shared accordions, tabs, and dialogs also animate. Reduced-motion preferences disable decorative movement and count-up effects.

## Remaining integrations

Contact and newsletter forms open an email draft; the reference's PHP submission backend is not implemented in Next.js. The language selector uses the supplied JSON translations and remembers the selection across navigation and reloads. Those files only contain header and banner strings; page content remains English until translated page content is supplied. Some broken or empty reference links point to relevant existing pages in the app.

## Animation audit — 28 September 2026

Reviewed all 34 app page references, including their shared JavaScript, main CSS, and page-specific animation styles. Fixed animation behavior in the corresponding native TSX components:

- Corrected fade/slide distances and default timing, replaying staggered headings, and counter-moving image reveals.
- Matched the home marquee's rightward 1,000px movement over 20 seconds and the decoration's scroll trigger.
- Restored icon squash/stretch, brand logo entrances, play-button pulsing and magnetic movement, and industry hotspot rotation every 1.5 seconds.
- Restored the reference hover and focus transition timings, including pseudo-element underlines.
- Added Motion carousel movement over 1.5 seconds, reference autoplay delays, looping where configured, and pause behavior. Inactive portfolio tabs do not advance.
- Restored the service pagination panels, their controls, and the 0.5-second panel entrance. Added the industry detail entrance and menu icon drawing animation.
- Added drawer/modal closing transitions, desktop cursor tracking on the 22 reference pages that include it, and the back-to-top entrance after 150px with a 0.5-second scroll.
- Preserved Tailwind styling, accessible labels, keyboard controls, and reduced-motion behavior.

Lint, TypeScript, and the production build pass. Browser automation is unavailable in this session, so these changes have not received visual browser verification. No test suites were added or run.
