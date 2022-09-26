import db from "../models/index.js";
const User = db.user;
const Exercise = db.exercise;

export function createExercise(req, res) {
  console.log(`The exercise is:`);
  console.log(req.body);
  console.log(`User ID is: ${req.params._id}`);
  let dateString;
  if (req.body.date) {
    console.log(`Date provided, creating date string`);
    const splitDate = req.body.date.split("-");
    const providedDate = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);
    dateString = providedDate.toDateString();
    console.log(`Date set to ${dateString}`);
  }
  if (!req.body.date) {
    console.log(`No date provided, creating date`);
    dateString = new Date().toDateString();
    console.log(`Date set to ${dateString}`);
  }
  const newExercise = new Exercise({
    userId: req.params._id,
    description: req.body.description,
    duration: req.body.duration,
    date: dateString,
  });
  User.find({ _id: req.params._id })
    .then((user) => {
      newExercise
        .save(newExercise)
        .then((exercise) => {
          console.log("User is:");
          console.log(user);
          console.log("Exercise is:");
          console.log(exercise);
          res.json({
            _id: exercise.userId,
            username: user[0].username,
            date: exercise.date,
            duration: exercise.duration,
            description: exercise.description,
          });
        })
        .catch((err) => {
          console.log(
            err.message || "Some error occurred whilst creating exercise"
          );
        });
    })
    .catch((err) => {
      console.log(err.message || "Some error occurred whilst getting users");
    });
}
