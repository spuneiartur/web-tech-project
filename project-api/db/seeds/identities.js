import Identity from "../entities/identity.js";
import getIdentitiesSeeds from "../resources/identities.js";

const plantIdentities = async () => {
  try {
    console.log("✅ Planting identities...");
    const seeds = await getIdentitiesSeeds();
    seeds.map(async (identity) => {
      await Identity.create(identity);
    });
  } catch (error) {
    console.error(error);
  }
};

export default plantIdentities;
