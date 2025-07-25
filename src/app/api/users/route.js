// src/app/api/users/route.js
import connectDB from "../lib/dataBase";
import { NextResponse } from "next/server";
import UserCollection from "../Module/UsersSchema";

export const POST = async (req) => {
  await connectDB();

  try {
    const body = await req.json();
    console.log(body);

    const existingUser = await UserCollection.findOne({ email: body.email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const newUser = new UserCollection(body);
    const result = await newUser.save();

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("User POST Error:", error);
    return NextResponse.json(
      { error: error.message || "Server Error" },
      { status: 500 }
    );
  }
};
