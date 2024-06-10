import { DiscordBotUser } from "../models/discordBord";

export const validUser = async (user) => {
  const validUser = await DiscordBotUser.find({ userName: user });
  return validUser;
};
