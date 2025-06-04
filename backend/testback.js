import { AllProduits, OneProduitbyId } from "./backend.mjs";

/*try {
        const records = await AllProduits();
        console.log(records);
    } catch (e) {
        console.error(e);
    }*/

    try {
            const Onerecord = await OneProduitbyId('4hu0yxf9bz5qj1g');
            console.log(Onerecord);
        } catch (e) {
            console.error(e);
        }