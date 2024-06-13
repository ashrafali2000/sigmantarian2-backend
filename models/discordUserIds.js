import { mongoose } from "mongoose";

const discordUserIdSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const DiscardUserId = mongoose.model(
  "DiscardUserId",
  discordUserIdSchema
);
