import db from "./database/connection.js";
import User from "./model/User.js";

db.once("open", async function () {
  console.log("connected");

  const user = new User({
    name: "Name Surname",
    email: "surname_name@mail.com",
  });

  await user.save(function (err, user) {
    if (err) return console.error(err, `user: ${user} could not be saved!`);
    console.log(`User saved: ${user}`);
  });
  
  db.close();

});

