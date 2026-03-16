import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    refreshToken: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 240 },
  },
  { autoIndex: true },
);

const Token = mongoose.model("Token", tokenSchema);
export default Token;
