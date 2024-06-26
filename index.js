import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import cors from "cors";
import { Client, GatewayIntentBits } from "discord.js";
import { DisCordBotComment, DiscordBotUser } from "./models/discordBord.js";
import { validUser } from "./utils/services.js";
dotenv.config();

const DbPassword = process.env.USER_PASSWORD;
const SecretToken = process.env.CLIENT_LOGIN_SECRET;
mongoose
  .connect(
    `mongodb+srv://bawdicsoft:${DbPassword}@cluster0.felwzd8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("DataBase is connected--->");
  })
  .catch((err) => {
    console.log("err------>", err);
  });
const app = express();
app.use(cors());
app.use(express.json());

// Discord code
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content) {
    const result = await validUser(message.author.username);
    if (!result) {
      const newUser = new DiscordBotUser({
        userName: message.author.username,
      });
      await newUser.save();
      const newComments = new DisCordBotComment({
        author: newUser._id,
        message: message.content,
      });
      await newComments.save();
    } else {
      const newComments = new DisCordBotComment({
        author: result._id,
        message: message.content,
      });
      await newComments.save();
    }
  }
});
client.login(SecretToken);
// end Code discord code
app.listen(5001, () => {
  console.log("Server is running on Port 3000");
});
app.use("/user", userRoutes);

app.get("/", function (req, res) {
  res.send("Server is running...");
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, statusCode, message });
});
