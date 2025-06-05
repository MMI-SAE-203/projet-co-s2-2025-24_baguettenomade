import { c as createComponent, m as maybeRenderHead, r as renderComponent, b as renderScript, a as renderTemplate, d as createAstro, e as addAttribute, f as renderHead, g as renderSlot } from '../chunks/astro/server_DDX-xd2c.mjs';
import 'kleur/colors';
import { L as Logo, $ as $$Footer } from '../chunks/Footer_lyxQTBd2.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$HeaderSpecial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex items-center bg-[#FFE76A] justify-between px-4 gap-8 border-b-2 border-b-[#FFE76A] h-20"> <a href="/MMi"> ${renderComponent($$result, "Logo", Logo, {})} </a> <button id="menu-btn" class="group relative z-10 flex h-3 w-6 flex-col justify-between lg:hidden *:block *:ease *:h-0.5 *:w-full *:transform *:rounded-full *:bg-white *:transition *:duration-300" aria-label="Menu" aria-controls="menu" aria-expanded="false"> <span class="group-aria-expanded:translate-y-[5px] group-aria-expanded:rotate-45"></span> <span class="group-aria-expanded:-translate-y-[5px] group-aria-expanded:invisible"></span> <span class="group-aria-expanded:-translate-y-[5px] group-aria-expanded:-rotate-45"></span> </button> <nav id="menu" class="flex-1 px-6 py-12 flex justify-between mt-20 flex-col fixed z-10 inset-0 bg-[#FFE76A] visible opacity-100 max-lg:aria-hidden:invisible max-lg:aria-hidden:opacity-0 lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:visible lg:text-sm lg:font-bold lg:items-center lg:tracking-wide lg:opacity-100" aria-hidden="true"> <ul class="flex flex-col gap-4 lg:flex-row"> <li> <a class="block p-4 rounded-lg text-black" href="/accueil">Accueil</a> </li> <li> <a class="block p-4 rounded-lg text-black" href="/produits">Boulangerie</a> </li> <li> <a class="block p-4 rounded-lg text-black" href="/gaspi">Paniers anti-gaspi</a> </li> <li> <a class="block p-4 rounded-lg text-black" href="/contact">Contact</a> </li> <li> <a class="block p-4 rounded-lg text-black" href="/apropos">A propos</a> </li> </ul> </nav> <form class="hidden lg:flex items-center bg-white rounded-lg px-4 py-2 w-[400px] ml-8 shadow"> <img src="src/assets/icons/search-black.svg" alt="loupe de recherche"> <input type="text" placeholder="recherche" class="bg-transparent outline-none flex-1 text-gray-700 placeholder:text-gray-400"> </form> <div class="flex items-center gap-6 ml-4"> <a href="/compte" aria-label="Compte utilisateur"> <img src="src/assets/icons/personne.svg" alt="Icône de compte utilisateur"> </a> <a href="/panier" aria-label="Panier"> <img src="src/assets/icons/panier.svg" alt="Icône de panier d'achat"> </a> </div> </header> ${renderScript($$result, "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/components/HeaderSpecial.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/components/HeaderSpecial.astro", void 0);

const $$Astro = createAstro();
const $$LayoutSpecial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutSpecial;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><link rel="shortcut icon" href="/favicon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title ? `${title} \u2014 La Baguette Nomade` : "La Baguette Nomade"}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">${renderHead()}</head> <body> <main> ${renderComponent($$result, "HeaderSpecial", $$HeaderSpecial, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </main> </body></html>`;
}, "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/layouts/LayoutSpecial.astro", void 0);

const $$Legales = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutSpecial", $$LayoutSpecial, { "title": "Mentions L\xE9gales & CGV" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center my-8 mb-20"> <div class="text-base leading-relaxed max-w-7xl text-left space-y-8"> <section> <h2 class="text-2xl font-bold mb-4">Mentions Légales</h2> <h3 class="text-lg font-semibold mt-4 mb-2">1. Informations Générales</h3> <ul class="list-none pl-0 mb-4 space-y-1"> <li><strong>Nom du site :</strong> La Baguette Nomade</li> <li><strong>URL :</strong> LaBaguetteNomade</li> <li><strong>Propriétaires :</strong> Ugo Lippi, Evan Gay, Noëlie Ahuir</li> <li><strong>Siège social :</strong> 1 Rue des Boulanger 25200 Montbéliard</li> <li><strong>SIRET :</strong> [Numéro SIRET]</li> <li><strong>RCS :</strong> Montbéliard</li> <li><strong>Contact :</strong> labaguettenomade@gmail.com</li> <li><strong>Numéro de téléphone :</strong> 0000000000</li> </ul> <h3 class="text-lg font-semibold mt-4 mb-2">2. Hébergement</h3> <ul class="list-none pl-0 mb-4 space-y-1"> <li><strong>Hébergeur :</strong> Infomaniak</li> <li><strong>Adresse :</strong> Rue Eugène Marziano 25 1227 Genève Suisse</li> <li><strong>Téléphone :</strong> +41 22 820 35 41</li> </ul> <h3 class="text-lg font-semibold mt-4 mb-2">3. Propriété Intellectuelle</h3> <p>
L'ensemble du contenu du site (La Baguette Nomade) incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de La Baguette Nomade, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
          Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord écrit des Ugo Lippi, Evan Gay, Noëlie Ahuir.
</p> <h3 class="text-lg font-semibold mt-4 mb-2">4. Données Personnelles</h3> <p>
Les informations recueillies sur ce site font l'objet d'un traitement destiné à La Baguette Nomade, responsable du traitement des données. Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification et de suppression des informations vous concernant. Pour exercer ces droits, vous pouvez nous contacter à : labaguettenomade@gmail.com.
</p> <h3 class="text-lg font-semibold mt-4 mb-2">5. Responsabilité</h3> <p>
Le propriétaire du site met à disposition des utilisateurs des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes et carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
</p> <h3 class="text-lg font-semibold mt-4 mb-2">6. Cookies</h3> <p>
Le site peut être amené à utiliser des cookies. Vous avez la possibilité de les accepter ou de les refuser lors de votre navigation.
</p> <h3 class="text-lg font-semibold mt-4 mb-2">7. Droit Applicable</h3> <p>
Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux compétents seront ceux du ressort de Montbéliard.
</p> </section> <section class="mt-12 pt-14"> <h2 class="text-2xl font-bold mb-4">Conditions Générales de Vente</h2> <h3 class="text-lg font-semibold mt-4 mb-2">1. Objet</h3> <p>
Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre La Baguette Nomade, ci-après désignée "le Vendeur", et toute personne physique ou morale souhaitant effectuer un achat via le site internet ou en magasin, ci-après désignée "l'Acheteur".
</p> <h3 class="text-lg font-semibold mt-4 mb-2">2. Acceptation des Conditions</h3> <p>
Le fait de passer commande auprès du Vendeur implique l'acceptation entière et sans réserve des présentes conditions générales de vente. Toute condition contraire posée par l'Acheteur est donc inapplicable, sauf acceptation expresse du Vendeur.
</p> <h3 class="text-lg font-semibold mt-4 mb-2">3. Produits</h3> <p>
Les produits sont présentés sur le site avec leurs caractéristiques essentielles. Le Vendeur se réserve le droit de modifier son offre en fonction de l’évolution de ses stocks et de ses fournisseurs.
</p> <h3 class="text-lg font-semibold mt-4 mb-2">4. Commandes</h3> <p>
Les commandes sont valables après validation par l’Acheteur via le processus de commande sur le site ou en magasin. Toute commande est considérée comme un engagement ferme de l’Acheteur, sauf annulation dans les 24 heures suivant la commande.
</p> <h3 class="text-lg font-semibold mt-4 mb-2">5. Prix</h3> <p>
Les prix des produits sont indiqués en euros toutes taxes comprises (TTC), hors frais de livraison, qui sont facturés en supplément. Le Vendeur se réserve le droit de modifier ses prix à tout moment, mais les prix appliqués sont ceux en vigueur au moment de la commande.
</p> <h3 class="text-lg font-semibold mt-4 mb-2">6. Paiement</h3> <p>
Le paiement peut être effectué par carte bancaire, virement, ou tout autre moyen de paiement indiqué sur le site. Le Vendeur garantit la sécurité des transactions en ligne par l'utilisation d'un système de paiement sécurisé.
</p> <h3 class="text-lg font-semibold mt-4 mb-2">7. Livraison</h3> <p>
Les produits seront livrés à l’adresse indiquée lors de la commande, sous réserve de la disponibilité des stocks. Les délais de livraison sont indicatifs et ne sont pas garantis. Le Vendeur ne peut être tenu responsable des retards de livraison dus à des circonstances imprévues.
</p> <h3 class="text-lg font-semibold mt-4 mb-2">8. Données Personnelles</h3> <p>
Les informations collectées sur l'Acheteur sont nécessaires à la gestion de la commande et ne seront utilisées que dans ce cadre. Conformément à la législation en vigueur, l'Acheteur peut demander l'accès, la rectification ou la suppression de ses données personnelles.
</p> <h3 class="text-lg font-semibold mt-4 mb-2">12. Propriété Intellectuelle</h3> <p>
Tous les éléments du site, y compris les produits, images et descriptions, sont protégés par des droits de propriété intellectuelle. Toute reproduction ou utilisation sans autorisation préalable est interdite.
</p> <h3 class="text-lg font-semibold mt-4 mb-2">13. Droit Applicable</h3> <p>
Les présentes conditions sont régies par la loi Française. Tout litige relatif à leur interprétation ou exécution sera de la compétence des tribunaux du ressort du siège social du Vendeur.
</p> </section> </div> </div> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/pages/legales.astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/projet-co-s2-2025-24_baguettenomade/src/pages/legales.astro";
const $$url = "/legales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Legales,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
