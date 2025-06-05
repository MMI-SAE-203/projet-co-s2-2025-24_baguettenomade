import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_ntg2uhwa.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/accueil.astro.mjs');
const _page2 = () => import('./pages/apropos.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/gaspi.astro.mjs');
const _page5 = () => import('./pages/legales.astro.mjs');
const _page6 = () => import('./pages/mmi.astro.mjs');
const _page7 = () => import('./pages/produits/_id_.astro.mjs');
const _page8 = () => import('./pages/produits.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/accueil.astro", _page1],
    ["src/pages/apropos.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/gaspi.astro", _page4],
    ["src/pages/legales.astro", _page5],
    ["src/pages/MMi.astro", _page6],
    ["src/pages/produits/[id].astro", _page7],
    ["src/pages/produits/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c49db9d7-0929-4706-a8a3-594421113ed5"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
