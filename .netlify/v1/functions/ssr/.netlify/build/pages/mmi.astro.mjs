import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DDX-xd2c.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BYFamid4.mjs';
export { renderers } from '../renderers.mjs';

const $$MMi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Merci" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center my-8"> <img src="src/assets/img/deschefsprofs1.webp" alt="" class="max-w-96 h-auto"> </div> <div class="flex justify-center"> <div class="text-2xl leading-relaxed mb-20 mt-20 max-w-7xl text-left"> <p>
Nous souhaitons remercier nos professeurs pour leurs idées originales et leur créativité dans l’élaboration des projets de semestre et des SAE.<br>
Un grand merci à :
</p> <ul class="list-disc pl-6 my-4"> <li>Mr Makhoul pour ses cours sur les systèmes d’information.</li> <li>Mr Laurent pour ses enseignements en marketing.</li> <li>Mr Malsot pour l’ensemble de ses cours.</li> <li>Mr Senente pour son engagement et ses précieuses connaissances.</li> <li>Mr Chatonnay, pour sa direction du département MMI.</li> </ul> <p>
Merci à vous tous pour votre accompagnement et votre transmission du savoir ! 🙌
</p> </div> </div> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/pages/MMi.astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/pages/MMi.astro";
const $$url = "/MMi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MMi,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
