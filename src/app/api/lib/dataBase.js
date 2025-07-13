import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const url =
      "mongodb+srv://dbDatabase:zeI1pjue2b4W287V@server.lxdqe.mongodb.net/?retryWrites=true&w=majority&appName=Server";

    mongoose
      .connect(url)
      .then(() => console.log("mongodb connected"))
      .catch((e) => console.log(e.message));

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(" MongoDB Connected");
  } catch (error) {
    console.error(" MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

export default connectDB;
