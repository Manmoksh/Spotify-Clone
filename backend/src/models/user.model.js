import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    clerkId: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true } // created ,updated at by default
);
export const User = mongoose.model("User", userSchema);
