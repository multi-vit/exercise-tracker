import mongoose from "mongoose";
import userSchema from "./user.model.js";
import dotenv from "dotenv";
dotenv.config();

const db = {};
db.mongoose = mongoose;
db.connectionString = process.env.MONGO_URI;
db.user = userSchema(mongoose);

export default db;
