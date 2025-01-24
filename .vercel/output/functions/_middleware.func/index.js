// https://github.com/vercel/examples/blob/main/build-output-api/edge-middleware/.vercel/output/functions/_middleware.func/index.js

/**
 * @param {Request} req
 * @returns {Response}
 */
export default function middleware(req) {
  console.log(req.url);

  const response = new Response();

  // Rewrite the URL to /
  const url = new URL(req.url);
  url.pathname = "/";
  response.headers.set("x-middleware-rewrite", String(url));

  // "Pass through" the middleware to complete the HTTP request
  response.headers.set("x-middleware-next", "1");

  console.log(response);

  return response;
}
