import { DiscardUserId } from "../models/discordUserIds";

export const createUserWithId = async (req, res, next) => {
  const { userId } = req.body;
  const oldUser = await oldUser(userId);
  if (!oldUser) {
    const newUserWithId = new DiscardUserId({
      userId,
    });
    await newUserWithId.save();
    res.status(200).json(newUserWithId);
  } else {
    res.status(403).json("User exist");
  }
};
export const getUserWithId = async (req, res, next) => {
  const { userId } = req.body;
  const userWithId = new DiscardUserId.finedOne({
    userId,
  });
  res.status(200).json(userWithId);
};
