import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, g as renderSlot, e as addAttribute } from './astro/server_DDX-xd2c.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_BYFamid4.mjs';
import { $ as $$Picture } from './_astro_assets_CXCiDSZz.mjs';

const $$Astro = createAstro();
const $$LayoutWithHeroButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutWithHeroButton;
  const { title, src, alt, heroButton = null } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative"> ${renderComponent($$result2, "Picture", $$Picture, { "pictureAttributes": { class: `w-full h-auto object-cover` }, "class": "w-full", "formats": ["avif", "webp"], "widths": [540, 1024, src.width], "sizes": `(max-width: 540px) 540px, (max-width: 1024px) 1024px, ${src.width}px`, "src": src, "alt": alt, "loading": "lazy" })} <div class="absolute inset-0 flex flex-col items-start justify-center pl-12 pb-52 text-left z-0"> <h1 class="text-center max-w-[500px] text-white text-2xl lg:text-4xl font-display font-bold drop-shadow-lg mb-6">${title}</h1> ${heroButton && renderTemplate`<div class="flex justify-center"> <a${addAttribute(heroButton.href, "href")} class="bg-[#92400E] hover:bg-[#d9a652] text-white font-semibold px-6 py-3 mx-32 rounded-md text-lg transition"> ${heroButton.label} </a> </div>`} </div> </div> <main> ${renderSlot($$result2, $$slots["default"])} </main> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/layouts/LayoutWithHeroButton.astro", void 0);

const Hero = new Proxy({"src":"/_astro/hero2.DfayzdYR.webp","width":2880,"height":1532,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/assets/img/hero2.webp";
							}
							
							return target[name];
						}
					});

export { $$LayoutWithHeroButton as $, Hero as H };
