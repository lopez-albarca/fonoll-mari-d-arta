# Fonoll Marí d'Artà

Static multilingual preview for the restaurant website.

## Preview mode

- `robots.txt` blocks crawling.
- Every language page includes `noindex,nofollow`.
- GA4 is configured in `assets/config.js` and loads only after consent.

## Production launch checklist

1. Remove the `robots` noindex meta tags.
2. Replace `robots.txt` with an allow rule and sitemap location.
3. Add and submit `sitemap.xml` in Google Search Console.
4. Confirm legal owner details and publish privacy/cookie/legal pages.
5. Verify all production canonicals and hreflang URLs.
6. Connect the domain and preserve any existing mail DNS records.

## Local preview

Serve the folder with any static HTTP server; opening files directly may not reflect GitHub Pages paths.
