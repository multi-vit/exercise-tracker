import express from "express";
import { createExercise, getLogs } from "../controllers/exercise.controller.js";
import { createUser, getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);

router.post("/:_id/exercises", createExercise);

router.get("/:_id/logs", getLogs);

export default router;
