import { DiscordBotUser } from "../models/discordBord.js";
import { DiscardUserId } from "../models/discordUserIds.js";

export const validUser = async (user) => {
  const validUser = await DiscordBotUser.findOne({ userName: user });
  return validUser;
};
export const oldUser = async (id) => {
  const validUser = await DiscardUserId.findOne({ userId: id });
  return validUser;
};
