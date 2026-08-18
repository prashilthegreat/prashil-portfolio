import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Prashil Koirala \| User &amp; Endpoint Support<\/title>/i);
  assert.match(html, /Calm user support/);
  assert.match(html, /User &amp; Endpoint<br\/>Support Technician/);
  assert.match(html, /My breakthrough into IT/);
  assert.match(html, /Client satisfaction/);
  assert.match(html, /About me/);
});

test("renders the default Emerge resume link", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /href="\/Prashil-Koirala-Resume\.pdf"[^>]*>View résumé/);
});
