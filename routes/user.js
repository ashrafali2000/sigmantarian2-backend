import express from "express";
import { getUserData } from "../controllers/user.js";
// import { createUserData } from "../controllers/discordBot.js";
const router = express.Router();
router.get("/getUserData", getUserData);
// router.post("/DiscordBotData", createUserData);

export default router;
