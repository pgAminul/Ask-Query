import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photoURL: { type: String },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isFraud: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const UserCollection =
  mongoose.models.User || mongoose.model("User", UsersSchema);

export default UserCollection;
