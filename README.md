# MET Membership

React, TypeScript and Vite implementation of the approved MET membership design. Mobile is the baseline; tablet and desktop layouts adapt at 640px and 1024px. Styling uses Tailwind CSS 4 with a small component stylesheet. Figtree and all images are served locally.

## Run locally

Requires Node.js 22.12+ or 24+.

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite, normally http://127.0.0.1:5173.

```sh
npm run check
npm run build
npm run preview
```

`check` runs TypeScript and compares all 69 approved passages against the actual React-rendered page. The copy snapshot in `docs/approved-copy.json` was extracted from the supplied `MET Membership LP Copy.docx`. Customer-facing strings live in `src/content.ts`.

See `docs/verification.md` for the browser checks, remaining integrations and dependency audit note.

## Checkout

Copy `.env.example` to `.env.local` and set `VITE_MEMBERSHIP_CHECKOUT_URL` to the approved HTTPS checkout URL for the INR 999 three-month membership. Restart Vite after changing environment variables. This is a public URL, not an API key.

Without a valid HTTPS URL, payment CTAs open an explicit development notice. They do not collect payment or simulate membership approval. Both payment CTAs share the same configuration. The WhatsApp screening and approval/refund process belongs to the payment and membership operations; no unprovided integration is invented in this app.

## Photography

The five active WebP images in `public/images/met-*.webp` were converted from the user-supplied PNG/JPEG files at their original dimensions, with no added colour treatment. The Brunches & Social Dinners card uses `met-dinner.webp`, converted from the supplied `Dinner image event.jpg` (1440 x 1440). The source files and previous brunch asset are untouched. Asset mapping and focal positions live in `src/config.ts`.

The candid laughing-group photo opens the hero, framed at 3:2 on mobile, 8:5 from 640px and 5:4 from 1024px. The larger group photo appears in section 3 in a bottom-aligned 2:1 frame. Gallery photographs use 4:3 frames with individual focal positions. Hero media loads eagerly; the remaining photographs load lazily. There is no automatic carousel rotation. The top development-preview strip has been removed as requested. The payment notice still explains that checkout is unconfigured when a payment CTA is used.

## Branding

`public/brand/met-wordmark.svg` is a transparent vector export of the supplied `MET logo/New/MET Logo 10.pdf`. It preserves the official white lettering and gold tagline, with the tagline converted to paths; only the background and excess canvas were removed. The original PDF is untouched. The header logo is 92.8px wide on mobile and 105.6px from 1024px; the footer logo is 105.6px wide throughout. These sizes and the surrounding vertical padding are 20% smaller than the original branding layout. No extra logo is added to the hero.

## Implementation

- Mobile hero order: headline, media, description, CTA.
- Native horizontal gallery on mobile and tablet; three visible experiences on desktop.
- Gallery supports swipe, arrows and keyboard navigation.
- FAQs use native disclosure controls.
- Local payment notice uses a native modal dialog with Escape and focus return.
- Reduced-motion preferences disable smooth scrolling and button movement.
- Membership, event tickets, screening, refunds and optional annual renewal retain the approved terms.
- No analytics, tracking, backend, payment gateway or public deployment has been added.
