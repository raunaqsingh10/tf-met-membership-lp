# Verification

Verified locally on 18 November 2026.

## Visitor flow

A visitor reads the hero, explores experiences, understands the community and membership, then uses a membership CTA. Until a real checkout URL is provided, both payment CTAs open an explicit development notice. This is a frontend implementation; it does not invent a backend, payment transaction, WhatsApp screening integration, or approval/refund service.

## Checks

- TypeScript check passes.
- Production Vite build passes.
- All 69 approved copy passages match the actual React-rendered page.
- Local page responds with HTTP 200.
- Browser layouts checked at 320, 360, 375, 390, 430, 768, 1024, 1440 and 1920px, including the final production bundle.
- No document-level horizontal overflow or overflowing body/heading/button text at those widths.
- Mobile hero order is headline, photograph, description and CTA.
- Figtree loads locally, including the currency glyph subset.
- Mobile gallery button navigation and keyboard Home/End work; native horizontal scrolling changes the active experience and snaps into place. Desktop displays all three experiences.
- Membership anchor navigation works.
- FAQs expose the exact approved answers using native details/summary controls.
- Unconfigured checkout opens a native dialog; Escape closes it and focus returns to the triggering CTA.
- Requested CTA separators, eyebrow dashes and refund border are absent.
- All image assets and local fonts load successfully. The production page has no browser console errors.
- Image update: all five supplied PNG images replace the active exploration placeholders. The top development-preview strip is removed.

## Final design refinement

- Rechecked at 320, 390, 430, 768, 1024 and 1440px after the refinement. No document or body/heading/button text overflow; all seven image elements load successfully, including both official logos.
- The candid laughing-group photo is now the hero, with a 3:2 mobile frame, 8:5 tablet frame and 5:4 desktop frame. It retains eager/high-priority loading, accurate 1122 x 1402 source metadata, and headline/photo/description/CTA mobile order.
- The larger group photo is now in section 3, with a bottom-aligned 2:1 frame and accurate 1672 x 941 source metadata. Original image files and colour treatment are unchanged.
- All three experience frames are 4:3. Button navigation, keyboard Home/End and native horizontal scrolling update the active experience correctly. Desktop retains all three visible experiences.
- Subsequent dinner-photo replacement: Brunches & Social Dinners now uses the supplied Dinner image event.jpg, exported as met-dinner.webp at 1440 x 1440. Its 4:3 crop was checked at 390 and 1440px with no page overflow; approved-copy, TypeScript and build checks pass. Captions, gallery behaviour and other photographs are unchanged.
- The top bar and footer use the transparent official white-and-gold SVG wordmark, exported from the supplied MET Logo 10 PDF with lettering converted to vector paths. Following the requested size reduction, the header logo measures 92.8px on mobile and 105.6px on desktop; the footer logo measures 105.6px throughout. Logos and vertical padding are 20% smaller than the original branding layout, preserving the reduced bar heights. Rechecked at 320, 390, 768 and 1440px with no page overflow.
- All three FAQs reveal their approved answers. Both unconfigured payment CTAs open the notice; Escape closes it and returns focus to the triggering button. No payment flow was added or changed.
- Approved-copy verification remains 69/69. TypeScript and the production build pass. Browser warning/error logs are empty.
- Full-page screenshots at all six widths were reviewed for crops, logo legibility and alignment. These browser checks do not replace physical iOS/Android testing.

## Remaining inputs

- The HTTPS checkout URL for the INR 999 introductory membership. No live transaction has been tested.
- Review on physical iOS and Android devices before launch. Responsive viewport checks are not physical-device testing.

## Dependency audit

The runtime dependency audit (`npm audit --omit=dev`) reports zero vulnerabilities. The complete audit reports five high-severity entries propagated from one build-tool dependency, `picomatch`, through Vite and its development plugin chain. The upstream advisory currently lists no patched release: [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf).

The advisory concerns malicious glob patterns processed by Node.js tooling. This static app does not accept visitor-supplied glob patterns, and the affected package is not shipped in the browser bundle. The development server binds to loopback. Recheck the upstream fix before upgrading build dependencies; do not apply the audit tool's suggested downgrade to older Vite/plugin major versions blindly.
