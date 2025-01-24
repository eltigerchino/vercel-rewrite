/**
 * @param {Request} req
 * @returns {Response}
 */
export default function render(req) {
  console.log(req.url);
  return new Response(req.url);
}
