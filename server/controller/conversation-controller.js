import conversation from "../model/Conversation.js";

const newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    const exist = await conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });
    if (exist) {
      res.status(200).json("conversation already exist");
      return;
    }
    const newConversation = new conversation({
      members: [receiverId, senderId],
    });
    await newConversation.save();
    return res.status(200).json("conversation saved successfully");
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export default newConversation;
