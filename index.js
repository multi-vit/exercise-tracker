import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRouter from "./routes/users.js";
import db from "./models/index.js";
import bodyParser from "body-parser";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.static(`${process.cwd()}/public`));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users", usersRouter);

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

db.mongoose
  .connect(db.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
