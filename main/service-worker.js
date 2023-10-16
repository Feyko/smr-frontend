const e = { toString: () => {
  throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
} };
const s = ["/smr-frontend/main/_app/immutable/start-907a972c.js", "/smr-frontend/main/_app/immutable/pages/__layout.svelte-69256a31.js", "/smr-frontend/main/_app/immutable/assets/pages/__layout.svelte-d4b9638d.css", "/smr-frontend/main/_app/immutable/error.svelte-465a1520.js", "/smr-frontend/main/_app/immutable/pages/admin/index.svelte-b0b36299.js", "/smr-frontend/main/_app/immutable/assets/pages/admin/index.svelte-dfc5337c.css", "/smr-frontend/main/_app/immutable/pages/admin/sml-versions/_smlVersionId_/edit.svelte-65a054d9.js", "/smr-frontend/main/_app/immutable/pages/admin/sml-versions/index.svelte-701c5327.js", "/smr-frontend/main/_app/immutable/pages/admin/sml-versions/new.svelte-d2fc7fa4.js", "/smr-frontend/main/_app/immutable/pages/admin/tag-manager.svelte-eb6157df.js", "/smr-frontend/main/_app/immutable/pages/admin/unapproved-mods.svelte-0c83ec3c.js", "/smr-frontend/main/_app/immutable/pages/admin/unapproved-versions.svelte-fdfb73e1.js", "/smr-frontend/main/_app/immutable/pages/api-docs/index.svelte-79f08e97.js", "/smr-frontend/main/_app/immutable/assets/pages/api-docs/index.svelte-1c1e4dfd.css", "/smr-frontend/main/_app/immutable/pages/content-policy/index.svelte-956865cd.js", "/smr-frontend/main/_app/immutable/pages/guide/_guideId_/edit.svelte-af9aaef0.js", "/smr-frontend/main/_app/immutable/pages/guide/_guideId_/index.svelte-4cbdabae.js", "/smr-frontend/main/_app/immutable/pages/guides/index.svelte-652443ad.js", "/smr-frontend/main/_app/immutable/pages/help/index.svelte-26289a68.js", "/smr-frontend/main/_app/immutable/pages/index.svelte-2d83078d.js", "/smr-frontend/main/_app/immutable/assets/pages/index.svelte-fe20af75.css", "/smr-frontend/main/_app/immutable/pages/mod/_modId_/edit.svelte-d923a353.js", "/smr-frontend/main/_app/immutable/pages/mod/_modId_/index.svelte-e1437a8c.js", "/smr-frontend/main/_app/immutable/assets/pages/mod/_modId_/index.svelte-1e2ec0d7.css", "/smr-frontend/main/_app/immutable/pages/mod/_modId_/new-version.svelte-6736a60a.js", "/smr-frontend/main/_app/immutable/pages/mod/_modId_/version/_versionId_/edit.svelte-7d24b134.js", "/smr-frontend/main/_app/immutable/pages/mod/_modId_/version/_versionId_/index.svelte-81f8dc29.js", "/smr-frontend/main/_app/immutable/pages/mod/_modId_/version/_versionId_/view.svelte-bbfd40b2.js", "/smr-frontend/main/_app/immutable/pages/mods/index.svelte-389aef07.js", "/smr-frontend/main/_app/immutable/assets/pages/mods/index.svelte-07b34bd3.css", "/smr-frontend/main/_app/immutable/pages/new-guide/index.svelte-7425cf87.js", "/smr-frontend/main/_app/immutable/pages/new-mod/index.svelte-6050581b.js", "/smr-frontend/main/_app/immutable/pages/privacy-policy/index.svelte-d1834f4d.js", "/smr-frontend/main/_app/immutable/pages/settings/index.svelte-178b7b2a.js", "/smr-frontend/main/_app/immutable/pages/sml-versions/index.svelte-b0d36102.js", "/smr-frontend/main/_app/immutable/pages/tools/index.svelte-368b3d13.js", "/smr-frontend/main/_app/immutable/pages/tos/index.svelte-653d165d.js", "/smr-frontend/main/_app/immutable/pages/user/_userId_/index.svelte-7285f70a.js", "/smr-frontend/main/_app/immutable/chunks/extras-8984d02f.js", "/smr-frontend/main/_app/immutable/chunks/forms-099cb473.js", "/smr-frontend/main/_app/immutable/chunks/jszip-0721729d.js", "/smr-frontend/main/_app/immutable/chunks/vendor-22698a15.js", "/smr-frontend/main/_app/immutable/chunks/paths-1c47712a.js", "/smr-frontend/main/_app/immutable/chunks/singletons-cdeec3fd.js", "/smr-frontend/main/_app/immutable/chunks/preload-helper-f72398ae.js", "/smr-frontend/main/_app/immutable/chunks/global-f30eeeff.js", "/smr-frontend/main/_app/immutable/chunks/user-6e2eeec5.js", "/smr-frontend/main/_app/immutable/chunks/navigation-ce539261.js", "/smr-frontend/main/_app/immutable/chunks/launcher-c348dc95.js", "/smr-frontend/main/_app/immutable/chunks/api-0a391947.js", "/smr-frontend/main/_app/immutable/chunks/graphql-32ca0bd6.js", "/smr-frontend/main/_app/immutable/chunks/stores-a04bccbe.js", "/smr-frontend/main/_app/immutable/chunks/Toast-3f77241b.js", "/smr-frontend/main/_app/immutable/chunks/MetaDescriptors-fd872502.js", "/smr-frontend/main/_app/immutable/chunks/routing-c6322149.js", "/smr-frontend/main/_app/immutable/chunks/SMLVersionForm-1190f309.js", "/smr-frontend/main/_app/immutable/assets/SMLVersionForm-1cc6d1a4.css", "/smr-frontend/main/_app/immutable/chunks/forms-e27a2b2a.js", "/smr-frontend/main/_app/immutable/chunks/markdown-6a2ff7f0.js", "/smr-frontend/main/_app/immutable/chunks/PageControls-ca9de549.js", "/smr-frontend/main/_app/immutable/chunks/formatting-b1e7d458.js", "/smr-frontend/main/_app/immutable/chunks/GuideForm-24b2bf51.js", "/smr-frontend/main/_app/immutable/chunks/gql-a60281d5.js", "/smr-frontend/main/_app/immutable/chunks/GuideCard-2221795d.js", "/smr-frontend/main/_app/immutable/chunks/FicsitCard-fe347dff.js", "/smr-frontend/main/_app/immutable/assets/FicsitCard-4de49b41.css", "/smr-frontend/main/_app/immutable/chunks/uplugin-7e0a2425.js", "/smr-frontend/main/_app/immutable/chunks/ModCard-d142c927.js", "/smr-frontend/main/_app/immutable/chunks/CompatibilityButton-02304679.js", "/smr-frontend/main/_app/immutable/chunks/TagList-1d5f0240.js", "/smr-frontend/main/_app/immutable/assets/TagList-719d0d10.css", "/smr-frontend/main/_app/immutable/chunks/ModForm-0232431b.js", "/smr-frontend/main/_app/immutable/chunks/ModCompatibilityEdit-4e8e70f5.js", "/smr-frontend/main/_app/immutable/chunks/VersionForm-e993ec0d.js", "/smr-frontend/main/_app/immutable/assets/VersionForm-a85b24ef.css", "/smr-frontend/main/_app/immutable/chunks/custom_protocol-9a0f337a.js"];
const n = ["/smr-frontend/main/assets/android-chrome-192x192.png", "/smr-frontend/main/assets/android-chrome-512x512.png", "/smr-frontend/main/assets/apple-touch-icon.png", "/smr-frontend/main/assets/browserconfig.xml", "/smr-frontend/main/assets/favicon-16x16.png", "/smr-frontend/main/assets/favicon-32x32.png", "/smr-frontend/main/assets/favicon.ico", "/smr-frontend/main/assets/fonts/flow-rounded.woff", "/smr-frontend/main/assets/mstile-150x150.png", "/smr-frontend/main/assets/safari-pinned-tab.svg", "/smr-frontend/main/images/Satisfactory_KeyArt_1_1024x1024_NoLogo.webp", "/smr-frontend/main/images/bg_nologo.webp", "/smr-frontend/main/images/dog_aw_yis_pats.gif", "/smr-frontend/main/images/dog_boing.gif", "/smr-frontend/main/images/dog_stand.gif", "/smr-frontend/main/images/mods_mobile.webp", "/smr-frontend/main/images/no_image.webp", "/smr-frontend/main/images/satisfactory_logo_full_color_small.webp", "/smr-frontend/main/images/sf_modding_logo.webp", "/smr-frontend/main/images/smm_background.webp", "/smr-frontend/main/images/smm_hand.webp", "/smr-frontend/main/images/smm_icon_white.webp", "/smr-frontend/main/manifest.json", "/smr-frontend/main/robots.txt", "/smr-frontend/main/smui.css"];
const a = self;
const m = `cache${e}`;
const t = s.concat(n);
const i = new Set(t);
a.addEventListener("install", (e2) => {
  e2.waitUntil(caches.open(m).then((e3) => e3.addAll(t)).then(() => {
    a.skipWaiting();
  }));
});
a.addEventListener("activate", (e2) => {
  e2.waitUntil(caches.keys().then(async (e3) => {
    for (const s2 of e3) {
      if (s2 !== m) {
        await caches.delete(s2);
      }
    }
    a.clients.claim();
  }));
});
async function r(s2) {
  const n2 = await caches.open(`offline${e}`);
  try {
    const e2 = await fetch(s2);
    n2.put(s2, e2.clone());
    return e2;
  } catch (e2) {
    const a2 = await n2.match(s2);
    if (a2) {
      return a2;
    }
    throw e2;
  }
}
a.addEventListener("fetch", (e2) => {
  if (e2.request.method !== "GET" || e2.request.headers.has("range")) {
    return;
  }
  const s2 = new URL(e2.request.url);
  const n2 = s2.protocol.startsWith("http");
  const a2 = s2.hostname === self.location.hostname && s2.port !== self.location.port;
  const m2 = s2.host === self.location.host && i.has(s2.pathname);
  const t2 = e2.request.cache === "only-if-cached" && !m2;
  if (n2 && !a2 && !t2 && m2 && !e2.request.url.includes("start")) {
    e2.respondWith((async () => {
      const s3 = m2 && await caches.match(e2.request);
      return s3 || r(e2.request);
    })());
  }
});
//# sourceMappingURL=service-worker.js.map
