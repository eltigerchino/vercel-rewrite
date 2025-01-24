/**
 * @param {Request} req
 * @returns {Response}
 */
export function GET(req) {
  console.log(req.url);
  return new Response(req.url);
}
