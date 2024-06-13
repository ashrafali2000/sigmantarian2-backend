import express from "express";
import { getUserData } from "../controllers/user.js";
import {
  createUserWithId,
  getUserWithId,
} from "../controllers/discordUserIds.js";
// import { createUserData } from "../controllers/discordBot.js";
const router = express.Router();
router.get("/getUserData", getUserData);
router.post("/createUserId", createUserWithId);
router.get("/getUserWithId", getUserWithId);
// router.post("/DiscordBotData", createUserData);

export default router;
