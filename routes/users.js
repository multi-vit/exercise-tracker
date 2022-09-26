import express from "express";
import { createExercise } from "../controllers/exercise.controller.js";
import { createUser, getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);

router.post("/:_id/exercises", createExercise);

export default router;
