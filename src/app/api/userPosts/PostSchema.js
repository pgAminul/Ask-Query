// src/app/userPosts/PostSchema.js
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // ✅ Corrected
  },
  title: {
    type: String,
    minlength: [10, "Minimum length is 10 characters"],
    required: [true, "Title is required"], // ✅ Corrected
    uppercase: true,
  },
  description: {
    type: String,
    required: [true, "Write something about this post"], // ✅ Corrected
  },
});

// Avoid model overwrite error in Next.js
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post; // ✅ ES module export
