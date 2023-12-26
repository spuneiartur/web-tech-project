import Identity from "../entities/identity";
import identities from "../resources/identities";

const plantIdentities = async () => {
  try {
    console.log("Planting identities...");
    await identities().map(async (identity) => {
      await Identity.create(identity);
    });
  } catch (error) {
    console.error(error);
  }
};

export default plantIdentities;
