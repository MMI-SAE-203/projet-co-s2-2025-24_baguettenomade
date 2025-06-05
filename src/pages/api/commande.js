import { createCommande } from '../../../backend/backend.mjs';

export async function POST({ request }) {
  const data = await request.json();
  const { utilisateur, statut, panier, facturation, livraison, paymentToken } = data;

  await createCommande({ utilisateur, statut, panier, facturation, livraison, paymentToken });

  return new Response(JSON.stringify({ success: true, message: "Commande enregistrée dans PocketBase" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}