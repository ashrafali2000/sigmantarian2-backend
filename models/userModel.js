import { mongoose } from "mongoose";
const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    refId: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
