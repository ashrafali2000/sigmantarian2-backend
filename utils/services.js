import { DiscordBotUser } from "../models/discordBord.js";

export const validUser = async (user) => {
  const validUser = await DiscordBotUser.find({ userName: user });
  return validUser;
};