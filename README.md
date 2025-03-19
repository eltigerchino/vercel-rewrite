# Vercel rewrite middleware

Reproduction repro for Vercel Edge middleware rewrites dropping URL query parameters with no value.

Instructions:

1. Fork the repository and deploy it to Vercel
1. Open the deployed project URL with a URL query parameter with no value such as https://vercel-rewrite-drab.vercel.app/?example
1. Observe that the text response returned is without the query parameter.
1. Open the deployed project URL with a URL query parameter with a value such as https://vercel-rewrite-drab.vercel.app/?example=true
1. Observe that the text response returned includes the query parameter.
