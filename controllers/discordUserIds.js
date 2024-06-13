import { DiscardUserId } from "../models/discordUserIds";
import { errorHandler } from "../utils/error";

export const createUserWithId = async (req, res, next) => {
  const { userId } = req.body;
  const oldUser = await oldUser(userId);
  if (!oldUser) {
    const newUserWithId = new DiscardUserId({
      userId,
    });
    await newUserWithId.save();
    res.status(200).send(newUserWithId);
  } else {
    res.send(errorHandler(403, "User exist"));
  }
};
export const getUserWithId = async (req, res, next) => {
  const { userId } = req.body;
  const userWithId = new DiscardUserId.finedOne({
    userId,
  });
  res.status(200).send(userWithId);
};
