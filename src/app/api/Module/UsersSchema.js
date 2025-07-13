import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Avoid model overwrite in dev environment
const UserCollection =
  mongoose.models.User || mongoose.model("User", UsersSchema);

export default UserCollection;
