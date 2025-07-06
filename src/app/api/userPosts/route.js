import connectDB from "../lib/dataBase";
import { NextResponse } from "next/server";
import Post from "./PostSchema";

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
