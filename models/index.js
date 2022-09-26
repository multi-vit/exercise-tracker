import mongoose from "mongoose";
import userSchema from "./user.model.js";
import dotenv from "dotenv";
import exerciseSchema from "./exercise.model.js";
dotenv.config();

const db = {};
db.mongoose = mongoose;
db.connectionString = process.env.MONGO_URI;
db.user = userSchema(mongoose);
db.exercise = exerciseSchema(mongoose);

export default db;
