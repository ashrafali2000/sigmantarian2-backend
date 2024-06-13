import { DiscardUserId } from "../models/discordUserIds.js";
import { oldUser } from "../utils/services.js";

export const createUserWithId = async (req, res, next) => {
  const { userId, contractId } = req.body;
  const result = await oldUser(userId);
  if (!result) {
    const newUserWithId = new DiscardUserId({
      userId,
      contractId,
    });
    await newUserWithId.save();
    res.status(200).json(newUserWithId);
  } else {
    res.status(403).json("User exist");
  }
};
export const getUserWithIds = async (req, res, next) => {
  const userWithId = new DiscardUserId.find();
  res.status(200).json(userWithId);
};
