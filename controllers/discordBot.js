import { Client, GatewayIntentBits } from "discord.js";
import {
  DisCordBotComment,
  DiscordBotUser,
  // disCordBotComment,
} from "../models/discordBord.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const createUserData = async (req, res, next) => {
  try {
    const client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });
    client.on("messageCreate", async (message) => {
      if (message.author.bot) return;
      if (message.content) {
        const newUser = new DiscordBotUser({
          _id: new mongoose.Types.ObjectId(),
          userName: message.author.username,
        });
        await newUser.save();
        const newComments = new DisCordBotComment({
          author: newUser._id,
          message: message.content,
        });
        await newComments.save();
      }
    });
    client.login(process.env.CLIENT_LOGIN_SECRET);

    const discordUsers = await DiscordBotUser.find();
    res.status(200).json({
      discordUsers,
    });
  } catch (error) {
    return next(error);
  }
};
