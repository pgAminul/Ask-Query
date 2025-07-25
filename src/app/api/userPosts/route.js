import connectDB from "../lib/dataBase";
import { NextResponse } from "next/server";
import Post from "../Module/PostSchema";

export const POST = async (req) => {
  await connectDB();

  try {
    const body = await req.json();
    const post = new Post(body);
    const result = await post.save();

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Server Error" },
      { status: 500 }
    );
  }
};

export const GET = async (req) => {
  try {
    await connectDB();
    const data = await Post.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { error: error.message || "Server Error" },
      { status: 500 }
    );
  }
};
