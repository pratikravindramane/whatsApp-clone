import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async () => {
  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsappclone.mlloaau.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("database connected successfully");
  } catch (error) {
    console.log("error from mongoose", error);
  }
};

export default Connection;
