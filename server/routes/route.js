import express from "express";
import newConversation from "../controller/conversation-controller.js";
import { addUser, getUsers } from "../controller/user-controller.js";
const route = express.Router();

route.post("/add", addUser);
route.post("/conversation/add", newConversation);
route.get("/users", getUsers);

export default route;
