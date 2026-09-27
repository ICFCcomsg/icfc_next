# ICFC Next.js site

All 34 reference routes render native React TSX. HTML files in `doc/` are migration references only; the app does not read them at build time or runtime.

## Development

```sh
bun install
bun dev
bun run build
```

## Structure

- `app/`: Next.js routes, layout, and metadata.
- `components/atoms/`: links, images, and accessible native dialogs.
- `components/molecules/`: accordions, tabs, carousels, forms, breadcrumbs, and industry cards.
- `components/organisms/`: header, footer, industry explorer, and floating contact controls.
- `components/templates/`: shared page composition.
- `components/pages/`: native JSX for every page, divided into named section components.
- `lib/`: route registry and typed industry data.
- `public/assets/`: reference images, fonts, and stylesheets.
- `public/styles/`: page styles and native component styles.

Edit TSX components directly. `scripts/convert-reference.cjs` is the one-time migration utility; rerunning it overwrites converted pages.

## Interactions

Filtering, search, card expansion, accordions, tabs, carousels, menus, WeChat dialogs, and scrolling use React or native browser controls. No jQuery or legacy script injection is used. The header language picker uses the five supplied navigation dictionaries; page articles remain in their reference language.

Contact and newsletter forms open an email draft addressed to ICFC. Automatic email delivery and newsletter storage require a backend integration. No email is sent by the app itself.

The reference provides 12 industry records. `/Version/index.html` reproduces the reference's missing-page message.
