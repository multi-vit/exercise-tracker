import db from "../models/index.js";
const User = db.user;
const Exercise = db.exercise;

export function createExercise(req, res) {
  console.log(`The exercise is:`);
  console.log(req.body);
  console.log(`User ID is: ${req.params._id}`);
  let date;
  if (req.body.date) {
    console.log(`Date provided, creating date string`);
    date = req.body.date;
    console.log(`Date set to ${date}`);
  }
  if (!req.body.date) {
    console.log(`No date provided, creating date`);
    const currentDate = new Date();
    date = `${currentDate.toLocaleString("default", {
      year: "numeric",
    })}-${currentDate.toLocaleString("default", {
      month: "2-digit",
    })}-${currentDate.toLocaleString("default", { day: "2-digit" })}`;
    console.log(`Date set to ${date}`);
  }
  const newExercise = new Exercise({
    userId: req.params._id,
    description: req.body.description,
    duration: req.body.duration,
    date: date,
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
            date: exercise.date.toDateString(),
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

export function getLogs(req, res) {
  let { from, to, limit } = req.query;
  from = from || "1900-01-01";
  to = to || "3000-01-01";
  limit = limit || 100;
  console.log(`Limit is: ${limit}`);
  console.log(`The User ID is: ${req.params._id}`);
  User.find({ _id: req.params._id }).then((user) => {
    Exercise.find({ userId: req.params._id })
      .where("date")
      .gt(from)
      .lt(to)
      .limit(limit)
      .then((exercises) => {
        console.log("Returning user:");
        console.log(user);
        console.log("Returning exercise:");
        console.log(exercises);
        let logArray = [];
        exercises.map((exercise) => {
          const parsedExercise = {
            date: exercise.date.toDateString(),
            duration: exercise.duration,
            description: exercise.description,
          };
          logArray.push(parsedExercise);
        });
        res.json({
          _id: user[0]._id,
          username: user[0].username,
          count: exercises.length,
          log: logArray,
        });
      });
  });
}
