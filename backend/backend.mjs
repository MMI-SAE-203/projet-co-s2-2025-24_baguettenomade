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

export async function createCommande({ utilisateur, statut = "en cours", panier }) {
    return await pb.collection('commandes').create({
        utilisateur,
        date: new Date().toISOString(),
        statut,
        panier
    });
}

// Commande : ajouter ou mettre à jour la quantité pour un produit (et un utilisateur si besoin)
export async function addOrUpdateCommande(produitId, quantite, userId = null) {
    // On suppose une collection 'commandes' avec les champs : produit, quantite, user (optionnel)
    let filter = `produit = "${produitId}"`;
    if (userId) filter += ` && user = "${userId}"`;
    const commandes = await pb.collection('commandes').getFullList({ filter, perPage: 1 });
    if (commandes.length > 0) {
        // Mise à jour
        return await pb.collection('commandes').update(commandes[0].id, { quantite });
    } else {
        // Création
        return await pb.collection('commandes').create({ produit: produitId, quantite, ...(userId && { user: userId }) });
    }
}

// Commande : supprimer une commande pour un produit (et un utilisateur si besoin)
export async function removeCommande(produitId, userId = null) {
    let filter = `produit = "${produitId}"`;
    if (userId) filter += ` && user = "${userId}"`;
    const commandes = await pb.collection('commandes').getFullList({ filter, perPage: 1 });
    if (commandes.length > 0) {
        return await pb.collection('commandes').delete(commandes[0].id);
    }
    return null;
}