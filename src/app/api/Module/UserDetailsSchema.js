import mongoose from "mongoose";

const userDetails = mongoose.Schema({
  about: String,
  skills: [String],
  email: String,
});

const userDetail =
  mongoose.models.userDetail || mongoose.model("userDetail", userDetails);

export default userDetail;
