import PocketBase from 'pocketbase' ;	
export const pb = new PocketBase("https://pocketbase-projet-s2.ugo-lippi.fr:443");

export async function AllProduits() {
    const records = await pb.collection('produits').getFullList({ sort: 'nom' });
    return records;
}

export async function OneProduitbyId(id) {
    const oneRecord = await pb.collection('produits').getOne(id);
    return oneRecord;
}

export async function AddNewProduits(newProduits) {
    return await pb.collection('produits').create(newProduits);
}

export async function updateProduitById(id, data) {
    return await pb.collection('produits').update(id, data);
}

export async function filterByCategory(categorie) {
    try {
        let produits = await pb.collection("produits").getFullList({
            filter: `categorie = "${categorie}"`,
        });
        produits = produits.map((produit) => {
            produit.imgUrl = pb.files.getURL(produit, produit.image);
            return produit;
        });
        return {
            success: true,
            produits: produits,
            message: "Les événements ont été filtrés avec succès.",
        }
    } catch (error) {
        return {
            success: false,
            produits: [],
            message: "Une erreur est survenue lors du filtrage des événements: " + error,
        }
    }
}

export async function createCommande({ utilisateur, statut = "en cours", panier, facturation, livraison, paymentToken }) {
    return await pb.collection('commandes').create({
        utilisateur,
        date: new Date().toISOString(),
        statut,
        panier,
        facturation,
        livraison,
        paymentToken
    });
}