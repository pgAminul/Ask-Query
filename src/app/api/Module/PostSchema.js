// src/app/userPosts/PostSchema.js
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    minlength: [10, "Minimum length is 10 characters"],
    required: [true, "Title is required"],
    uppercase: true,
  },
  description: {
    type: String,
    required: [true, "Write something about this post"],
  },
});

// Avoid model overwrite error in Next.js
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
