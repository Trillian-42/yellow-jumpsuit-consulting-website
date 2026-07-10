# Yellow Jumpsuit Consulting LLC

Consulting website for [yellowjumpsuitconsulting.com](https://www.yellowjumpsuitconsulting.com)

## What's here

- `website/index.html` -- Main website HTML (served via Cloudflare Worker proxy)
- `functions/serveWebsite.ts` -- Base44 backend function that serves the HTML
- `functions/submitContact.ts` -- Backend function handling contact form submissions
- `contracts/` -- Legal templates (MSA, NDA, SOW)

## Tech stack

- Hosted on Base44 backend functions
- Custom domain via Cloudflare Worker reverse proxy
- Contact form submissions stored in Base44 entities
