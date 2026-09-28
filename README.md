# ICFC Next.js site

All 34 reference routes render native React TSX. HTML files in `doc/` are migration references only; the app does not read them at build time or runtime.

## Development

```sh
bun install
bun dev
bun run build
```

Check deployment adapter output paths with `NEXT_ADAPTER_PATH="$PWD/scripts/check-build-output.mjs" bun run build`.

## Structure

- `app/`: Next.js routes, layout, and metadata.
- `components/atoms/`: links, images, and accessible native dialogs.
- `components/molecules/`: accordions, tabs, carousels, forms, breadcrumbs, and industry cards.
- `components/organisms/`: header, footer, industry explorer, and floating contact controls.
- `components/templates/`: shared page composition.
- `components/pages/`: native JSX for every page, divided into named section components.
- `lib/`: route registry and typed industry data.
- `public/assets/`: reference images and downloadable documents.
- `app/globals.css`: Tailwind entry point; all styling is in TSX utility classes.

Edit TSX components directly. Tailwind CSS 4 is the only styling system. Bootstrap, icon fonts, reference stylesheets, and inline styles have been removed. SVG icons are native React components.

## Interactions

Filtering, search, card expansion, accordions, tabs, carousels, menus, WeChat dialogs, and scrolling use React or native browser controls. No jQuery or legacy script injection is used. The header language picker uses the five supplied navigation dictionaries; page articles remain in their reference language.

Contact forms on home, industry, and contact pages submit leads through `/api/contact` to the CRM. Set `CRM_API_HOST`, `CRM_API_KEY`, and `CRM_API_SECRET` in the root `.env` (and the deployment environment). The host is `https://icfc.digital`; credentials stay on the server. Restart the dev server after changing configuration. Name, email, phone, message, and selected options are stored on the lead; this does not send email. Newsletter and blog forms still open an email draft.

Run the CRM handler checks with `node --test app/api/contact/route.test.mjs`.

The reference provides 12 industry records. `/Version/index.html` reproduces the reference's missing-page message.
