import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DDX-xd2c.mjs';
import 'kleur/colors';
import { $ as $$LayoutWithHeroButton, H as Hero } from '../chunks/hero2_DUMzdoKu.mjs';
export { renderers } from '../renderers.mjs';

const $$Accueil = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutWithHeroButton", $$LayoutWithHeroButton, { "title": "Bienvenue chez Baguette Nomade", "src": Hero, "alt": "Pain frais", "heroButton": { label: "Commencer ses courses", href: "/produits" } })}`;
}, "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/pages/accueil.astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/pages/accueil.astro";
const $$url = "/accueil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Accueil,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
