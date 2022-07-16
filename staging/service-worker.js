const s = { toString: () => {
  throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
} };
const e = ["/smr-frontend/staging/_app/immutable/start-1d6d338b.js", "/smr-frontend/staging/_app/immutable/pages/__layout.svelte-7efdcd97.js", "/smr-frontend/staging/_app/immutable/assets/pages/__layout.svelte-6f197ffe.css", "/smr-frontend/staging/_app/immutable/error.svelte-7461603c.js", "/smr-frontend/staging/_app/immutable/pages/admin/index.svelte-6fba5dde.js", "/smr-frontend/staging/_app/immutable/assets/pages/admin/index.svelte-dfc5337c.css", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/_smlVersionId_/edit.svelte-00a876b9.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/index.svelte-31148d26.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/new.svelte-9368e7d0.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-mods.svelte-49c600b6.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-versions.svelte-f0313300.js", "/smr-frontend/staging/_app/immutable/pages/api-docs/index.svelte-747afe4f.js", "/smr-frontend/staging/_app/immutable/assets/pages/tos/index.svelte-1ae42d62.css", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/edit.svelte-e8edae87.js", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/index.svelte-080bc455.js", "/smr-frontend/staging/_app/immutable/pages/guides/index.svelte-d415836c.js", "/smr-frontend/staging/_app/immutable/pages/help/index.svelte-913fdc53.js", "/smr-frontend/staging/_app/immutable/pages/index.svelte-e13d75b6.js", "/smr-frontend/staging/_app/immutable/assets/pages/index.svelte-fe20af75.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/edit.svelte-b4154af7.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/index.svelte-98231b75.js", "/smr-frontend/staging/_app/immutable/assets/pages/mod/_modId_/index.svelte-1e2ec0d7.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/new-version.svelte-a9c7fc3b.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/edit.svelte-929d2bc5.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/index.svelte-795ded22.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/view.svelte-155aaa18.js", "/smr-frontend/staging/_app/immutable/pages/mods/index.svelte-a27e6ba5.js", "/smr-frontend/staging/_app/immutable/assets/pages/mods/index.svelte-07b34bd3.css", "/smr-frontend/staging/_app/immutable/pages/new-guide/index.svelte-e5d2db8f.js", "/smr-frontend/staging/_app/immutable/pages/new-mod/index.svelte-549acd81.js", "/smr-frontend/staging/_app/immutable/pages/privacy-policy/index.svelte-3e94fff1.js", "/smr-frontend/staging/_app/immutable/pages/settings/index.svelte-76fe073e.js", "/smr-frontend/staging/_app/immutable/pages/sml-versions/index.svelte-ad02b845.js", "/smr-frontend/staging/_app/immutable/pages/tools/index.svelte-7e75a80d.js", "/smr-frontend/staging/_app/immutable/pages/tos/index.svelte-d3db2e18.js", "/smr-frontend/staging/_app/immutable/pages/user/_userId_/index.svelte-dd1cc65f.js", "/smr-frontend/staging/_app/immutable/chunks/extras-8984d02f.js", "/smr-frontend/staging/_app/immutable/chunks/forms-a08ac836.js", "/smr-frontend/staging/_app/immutable/chunks/jszip-0721729d.js", "/smr-frontend/staging/_app/immutable/chunks/vendor-3906a87e.js", "/smr-frontend/staging/_app/immutable/chunks/paths-1c47712a.js", "/smr-frontend/staging/_app/immutable/chunks/singletons-cdeec3fd.js", "/smr-frontend/staging/_app/immutable/chunks/preload-helper-b2fcde9f.js", "/smr-frontend/staging/_app/immutable/chunks/global-188764f4.js", "/smr-frontend/staging/_app/immutable/chunks/user-d8fd3640.js", "/smr-frontend/staging/_app/immutable/chunks/navigation-ce539261.js", "/smr-frontend/staging/_app/immutable/chunks/launcher-3b6be0c9.js", "/smr-frontend/staging/_app/immutable/chunks/api-bb6d5972.js", "/smr-frontend/staging/_app/immutable/chunks/graphql-c174641c.js", "/smr-frontend/staging/_app/immutable/chunks/stores-656a72dd.js", "/smr-frontend/staging/_app/immutable/chunks/Toast-2c4756ef.js", "/smr-frontend/staging/_app/immutable/chunks/MetaDescriptors-3bdad2d4.js", "/smr-frontend/staging/_app/immutable/chunks/routing-c6322149.js", "/smr-frontend/staging/_app/immutable/chunks/SMLVersionForm-ab467a85.js", "/smr-frontend/staging/_app/immutable/assets/SMLVersionForm-1cc6d1a4.css", "/smr-frontend/staging/_app/immutable/chunks/forms-d082c50e.js", "/smr-frontend/staging/_app/immutable/chunks/markdown-6a2ff7f0.js", "/smr-frontend/staging/_app/immutable/chunks/PageControls-853f2dd8.js", "/smr-frontend/staging/_app/immutable/chunks/formatting-b1e7d458.js", "/smr-frontend/staging/_app/immutable/chunks/GuideForm-c4f924ad.js", "/smr-frontend/staging/_app/immutable/chunks/gql-ab61d814.js", "/smr-frontend/staging/_app/immutable/chunks/GuideCard-676ffbd3.js", "/smr-frontend/staging/_app/immutable/chunks/FicsitCard-7d9bd66e.js", "/smr-frontend/staging/_app/immutable/assets/FicsitCard-4de49b41.css", "/smr-frontend/staging/_app/immutable/chunks/uplugin-9e82fa30.js", "/smr-frontend/staging/_app/immutable/chunks/ModCard-0ef4d3db.js", "/smr-frontend/staging/_app/immutable/chunks/CompatibilityButton-24ae9dc6.js", "/smr-frontend/staging/_app/immutable/chunks/ModForm-2075f3e4.js", "/smr-frontend/staging/_app/immutable/chunks/ModCompatibilityEdit-8bf9139b.js", "/smr-frontend/staging/_app/immutable/chunks/VersionForm-2db7130f.js", "/smr-frontend/staging/_app/immutable/chunks/custom_protocol-9a0f337a.js"];
const n = ["/smr-frontend/staging/assets/android-chrome-192x192.png", "/smr-frontend/staging/assets/android-chrome-512x512.png", "/smr-frontend/staging/assets/apple-touch-icon.png", "/smr-frontend/staging/assets/browserconfig.xml", "/smr-frontend/staging/assets/favicon-16x16.png", "/smr-frontend/staging/assets/favicon-32x32.png", "/smr-frontend/staging/assets/favicon.ico", "/smr-frontend/staging/assets/fonts/flow-rounded.woff", "/smr-frontend/staging/assets/mstile-150x150.png", "/smr-frontend/staging/assets/safari-pinned-tab.svg", "/smr-frontend/staging/images/Satisfactory_KeyArt_1_1024x1024_NoLogo.webp", "/smr-frontend/staging/images/bg_nologo.webp", "/smr-frontend/staging/images/dog_aw_yis_pats.gif", "/smr-frontend/staging/images/dog_boing.gif", "/smr-frontend/staging/images/dog_stand.gif", "/smr-frontend/staging/images/mods_mobile.webp", "/smr-frontend/staging/images/no_image.webp", "/smr-frontend/staging/images/satisfactory_logo_full_color_small.webp", "/smr-frontend/staging/images/sf_modding_logo.webp", "/smr-frontend/staging/images/smm_background.webp", "/smr-frontend/staging/images/smm_hand.webp", "/smr-frontend/staging/images/smm_icon_white.webp", "/smr-frontend/staging/manifest.json", "/smr-frontend/staging/robots.txt", "/smr-frontend/staging/smui.css"];
const t = self;
const a = `cache${s}`;
const i = e.concat(n);
const m = new Set(i);
t.addEventListener("install", (s2) => {
  s2.waitUntil(caches.open(a).then((s3) => s3.addAll(i)).then(() => {
    t.skipWaiting();
  }));
});
t.addEventListener("activate", (s2) => {
  s2.waitUntil(caches.keys().then(async (s3) => {
    for (const e2 of s3) {
      if (e2 !== a) {
        await caches.delete(e2);
      }
    }
    t.clients.claim();
  }));
});
async function r(e2) {
  const n2 = await caches.open(`offline${s}`);
  try {
    const s2 = await fetch(e2);
    n2.put(e2, s2.clone());
    return s2;
  } catch (s2) {
    const t2 = await n2.match(e2);
    if (t2) {
      return t2;
    }
    throw s2;
  }
}
t.addEventListener("fetch", (s2) => {
  if (s2.request.method !== "GET" || s2.request.headers.has("range")) {
    return;
  }
  const e2 = new URL(s2.request.url);
  const n2 = e2.protocol.startsWith("http");
  const t2 = e2.hostname === self.location.hostname && e2.port !== self.location.port;
  const a2 = e2.host === self.location.host && m.has(e2.pathname);
  const i2 = s2.request.cache === "only-if-cached" && !a2;
  if (n2 && !t2 && !i2 && a2 && !s2.request.url.includes("start")) {
    s2.respondWith((async () => {
      const e3 = a2 && await caches.match(s2.request);
      return e3 || r(s2.request);
    })());
  }
});
//# sourceMappingURL=service-worker.js.map
