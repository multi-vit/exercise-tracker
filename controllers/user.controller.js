import db from "../models/index.js";
const User = db.user;

export function createUser(req, res) {
  console.log(`The username is:${req.body.username}`);
  const newUser = new User({ username: req.body.username });
  newUser
    .save(newUser)
    .then((data) => {
      console.log(data);
      res.json({ username: data.username, _id: data._id });
    })
    .catch((err) => {
      console.log(err.message || "Some error occurred whilst creating user");
    });
}

export function getUsers(req, res) {
  User.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message || "Some error occurred whilst getting users");
    });
}
