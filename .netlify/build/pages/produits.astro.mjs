import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, g as renderSlot, e as addAttribute } from '../chunks/astro/server_DDX-xd2c.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BYFamid4.mjs';
import { $ as $$Picture } from '../chunks/_astro_assets_CXCiDSZz.mjs';
import PocketBase from 'pocketbase';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$LayoutWithHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LayoutWithHero;
  const { title, src, alt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative"> ${renderComponent($$result2, "Picture", $$Picture, { "pictureAttributes": { class: `w-full h-auto object-cover` }, "class": "w-full", "formats": ["avif", "webp"], "widths": [540, 1024, src.width], "sizes": `(max-width: 540px) 540px, (max-width: 1024px) 1024px, ${src.width}px`, "src": src, "alt": alt, "loading": "lazy" })} <h1 class="absolute bottom-16 lg:bottom-64 left-1/2 transform -translate-x-1/2 text-white text-2xl lg:text-4xl font-bold">${title}</h1> </div> <main> ${renderSlot($$result2, $$slots["default"])} </main> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/layouts/LayoutWithHero.astro", void 0);

const pb = new PocketBase("https://pocketbase-projet-s2.ugo-lippi.fr:443");

async function AllProduits() {
    const records = await pb.collection('produits').getFullList({ sort: 'nom' });
    return records;
}

const $$Astro$1 = createAstro();
const $$ImgPb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ImgPb;
  const { record, field = "imgUrl", alt, classPicture, classImg, thumb = "1024x1024" } = Astro2.props;
  const imageUrl = record?.[field] ? pb.files.getURL(record, record[field], { thumb }) : null;
  return renderTemplate`${imageUrl ? renderTemplate`${maybeRenderHead()}<div${addAttribute(classPicture, "class")}><img${addAttribute(classImg, "class")}${addAttribute(alt || "Image", "alt")}${addAttribute(imageUrl, "src")}></div>` : renderTemplate`<div${addAttribute(classPicture + " w-full h-60 lg:h-96 flex items-center justify-center bg-gray-200", "class")}><span class="text-gray-500">Image non disponible</span></div>`}`;
}, "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/components/ImgPb.astro", void 0);

const $$Astro = createAstro();
const $$CardProduits = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardProduits;
  const { ...produit } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group col-span-1 grid grid-rows-[auto_auto_auto_1fr] gap-4 items-center text-center bg-white p-4 rounded-lg"> <div class="w-44 h-44 lg:w-64 lg:h-64 mx-auto rounded-3xl overflow-hidden"> ${renderComponent($$result, "ImgPb", $$ImgPb, { "record": produit, "field": "image", "alt": produit.nom, "classPicture": "w-full h-full", "classImg": "object-cover w-full h-full" })} </div> <h3 class="font-semibold text-black text-sm">${produit.nom}</h3> <span class="text-sm font-normal text-black">${produit.prix}€</span> <button class="bg-[#E4B062] hover:bg-[#d9a652] text-white px-2 py-2 rounded-md text-xs font-semibold uppercase tracking-wide transition-colors self-end min-w-[120px] w-fit mx-auto">
+ AJOUTER AU PANIER
</button> </article>`;
}, "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/components/CardProduits.astro", void 0);

const Produits = new Proxy({"src":"/_astro/hero.DnEM2-2g.webp","width":2880,"height":1532,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/assets/img/hero.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const produits = await AllProduits();
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": "Boulangerie de la Semaine", "src": Produits, "alt": "Pain frais et artisanal" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12"> <div class="container mx-auto px-4"> <div class="max-w-md mx-auto"> <div class="overflow-hidden shadow-lg rounded-lg"> <div class="aspect-square relative"> <img src="src/assets/img/paincoeur.webp" alt="Pain en forme de cœur" class="w-full h-full object-cover"> </div> </div> </div> </div> </section> <div class="container mx-auto px-4 py-12"> <h2 class="text-3xl font-bold text-center text-amber-900 mb-12">Tous nos produits</h2> <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${produits.length > 0 ? produits.map((produit) => renderTemplate`${renderComponent($$result2, "CardProduits", $$CardProduits, { ...produit })}`) : renderTemplate`<p class="col-span-full text-center py-12 text-amber-800 text-lg">Aucun produit n'a été trouvé.</p>`} </div> </div> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/pages/produits/index.astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/pages/produits/index.astro";
const $$url = "/produits";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
