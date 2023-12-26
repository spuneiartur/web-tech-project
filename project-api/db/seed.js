import dbConnection from "./db.js";
import Identity from "./entities/identity.js";

dbConnection.sync({ force: true }).then(async () => {
  const identity = await Identity.create({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "password",
  });
  console.log(identity.toJSON());
});
