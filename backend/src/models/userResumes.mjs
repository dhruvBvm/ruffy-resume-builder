import mongoose from "mongoose";

const userResumesSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
    },
    resumeName: { type: String, required: true },
    resumeType: { type: String, required: true },
    resumeDetails: { type: String, required: true },
  },
  { timestamps: true },
);

export const UserResume = mongoose.model("UserResume", userResumesSchema);
