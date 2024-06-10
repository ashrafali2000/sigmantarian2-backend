import { DiscordBotUser } from "../models/discordBord.js";

export const validUser = async (user) => {
  const validUser = await DiscordBotUser.findOne({ userName: user });
  return validUser;
};
