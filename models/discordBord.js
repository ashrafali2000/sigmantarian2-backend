import { mongoose } from "mongoose";
const { Schema } = mongoose;
const disCordBotUserSchema = new mongoose.Schema(
  {
    _id: Schema.Types.ObjectId,
    userName: {
      type: String,
      required: true,
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "disCordBotComment" }],
  },
  { timestamps: true }
);
export const DiscordBotUser = mongoose.model(
  "DiscordBotUser",
  disCordBotUserSchema
);

const disCordBotCommentSchema = new mongoose.Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "DiscordBotUser" },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const DisCordBotComment = mongoose.model(
  "DisCordBotComment",
  disCordBotCommentSchema
);
