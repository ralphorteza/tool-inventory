import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Tool from "@/models/Tool"
import connectDB from "@/lib/connectdb";

export async function POST(req: NextRequest, res: NextResponse) {
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
