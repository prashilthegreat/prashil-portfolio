import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const docs = path.join(root, "docs");
const client = path.join(root, "dist", "client");
const server = path.join(root, "dist", "server", "index.js");

const workerUrl = pathToFileURL(server);
workerUrl.searchParams.set("export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://prashilkoirala.com.np/", {
    headers: { accept: "text/html" },
  }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Static render failed with HTTP ${response.status}`);
}

await rm(docs, { recursive: true, force: true });
await mkdir(docs, { recursive: true });
await cp(client, docs, { recursive: true });
await Promise.all([
  "tool-logos",
  ".vite",
  ".assetsignore",
  "_headers",
  "vinext-client-entry-manifest.json",
  "file.svg",
  "globe.svg",
  "window.svg",
].map((name) => rm(path.join(docs, name), { recursive: true, force: true })));
await writeFile(path.join(docs, "index.html"), await response.text());
await writeFile(path.join(docs, "CNAME"), "prashilkoirala.com.np\n");
await writeFile(path.join(docs, ".nojekyll"), "");

console.log("GitHub Pages export written to docs/");
