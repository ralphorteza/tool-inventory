import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Tool from "@/models/Tool"
import connectDB from "@/lib/connectdb";

export async function POST(req: NextRequest, res: NextResponse) {
  // const MONGO_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@cluster0.mwd6uuv.mongodb.net/${process.env.MONGODB_PATH}?retryWrites=true&w=majority`;

  // let client;

  // try {
  //   client = await mongoose.connect(MONGO_URI);
  //   console.log("mongodb connected");
  // } catch(error) {
  //   console.log("There was an error connecting to mongodb", error);
  // }
  await connectDB();


  const data = await req.json();
  const { 
    name,
    price,
    type,
    description,
    model_number,
    manufacturer,
    status
  } = data;

  const newData = {
    ...data,
    date_created: new Date(),
    date_modified: new Date()
  };


  try {
    await Tool.create(newData);
    console.log("New tool created!");
    return NextResponse.json(
      { message: "message sent" },
      { status: 201 }
    );
  } catch(error) {
    console.log("Tool couldn't be filled", error);
    return NextResponse.json(
      { message: "Error sending the tool" },
      { status: 500 }
    )
  }
}