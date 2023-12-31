import { hash, genSaltSync } from "bcrypt";

const getIdentitiesSeeds = async () => {
  return [
  {
    email: "michael@email.com",
    firstName: "Michael",
    lastName: "Scott",
    role: "user",
    password: await hash("supersecretpassword", genSaltSync(8)),
  },
  {
    email: "jim@email.com",
    firstName: "Jim",
    lastName: "Halpert",
    role: "user",
    password: await hash("supersecretpassword", genSaltSync(8)),
  },
  {
    email: "pam@email.com",
    firstName: "Pam",
    lastName: "Beesly",
    role: "user",
    password: await hash("supersecretpassword", genSaltSync(8)),
  },
]};

export default getIdentitiesSeeds;
