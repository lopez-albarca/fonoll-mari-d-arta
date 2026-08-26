# Fonoll Marí d'Artà

Static multilingual preview for the restaurant website.

## Preview mode

- `robots.txt` blocks crawling.
- Every language page includes `noindex,nofollow`.
- Analytics is disabled in `assets/config.js`.

## Production launch checklist

1. Set `preview: false` and add the GA4 measurement ID in `assets/config.js`.
2. Remove the `robots` noindex meta tags.
3. Replace `robots.txt` with an allow rule and sitemap location.
4. Add and submit `sitemap.xml` in Google Search Console.
5. Confirm legal owner details and publish privacy/cookie/legal pages.
6. Verify all production canonicals and hreflang URLs.
7. Connect the domain and preserve any existing mail DNS records.

## Local preview

Serve the folder with any static HTTP server; opening files directly may not reflect GitHub Pages paths.
