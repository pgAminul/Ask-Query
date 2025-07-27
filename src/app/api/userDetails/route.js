import { NextResponse } from "next/server";
import userDetail from "../Module/UserDetailsSchema";
import connectDB from "../lib/dataBase";

export const POST = async (req) => {
  try {
    await connectDB();
    const body = await req.json();
    const Details = new userDetail(body);
    const result = await Details.save();
    console.log(body);
    return NextResponse.json(result, { status: 202 });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { message: "server side error", error: error.message },
      { status: 500 }
    );
  }
};
