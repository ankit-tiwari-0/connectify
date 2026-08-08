import mongoose, { Schema } from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        text: {
            type: String,
        },
        image:{
            type: String
        },
    },
    {timestamps: true}
);

// Delete message approximately 2 days after createdAt
messageSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: 2 * 24 * 60 * 60 }
);

const Message = mongoose.model("message", messageSchema);

export default Message;