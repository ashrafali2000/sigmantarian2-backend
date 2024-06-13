import { DiscardUserId } from "../models/discordUserIds";

export const createUserWithId = async (req, res, next) => {
  const { userId } = req.body;
  const newUserWithId = new DiscardUserId({
    userId,
  });
  await newUserWithId.save();
  res.status(200).send(newUserWithId);
};
export const getUserWithId = async (req, res, next) => {
  const { userId } = req.body;
  const userWithId = new DiscardUserId.finedOne({
    userId,
  });
  res.status(200).send(userWithId);
};
