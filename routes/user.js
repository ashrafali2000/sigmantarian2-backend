import express from "express";
import { getUserData } from "../controllers/user.js";
import {
  createUserWithId,
  getUserWithIds,
} from "../controllers/discordUserIds.js";
// import { createUserData } from "../controllers/discordBot.js";
const router = express.Router();
router.get("/getUserData", getUserData);
router.post("/createUserId", createUserWithId);
router.get("/getUserWithIds", getUserWithIds);
// router.post("/DiscordBotData", createUserData);

export default router;
