import dbConnection from "./db.js";
import plantIdentities from "./seeds/identities.js";

dbConnection.sync({ force: true }).then(async () => {
  await plantIdentities();
 
  console.log("✅ Seeds planted successfully!");
});
