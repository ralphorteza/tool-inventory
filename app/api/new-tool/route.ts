import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Tool from "@/models/Tool"

export async function POST(req: NextRequest, res: NextResponse) {
  const MONGO_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@cluster0.mwd6uuv.mongodb.net/${process.env.MONGODB_PATH}?retryWrites=true&w=majority`;

  let client;

  try {
    client = await mongoose.connect(MONGO_URI);
    console.log("mongodb connected");
  } catch(error) {
    console.log("There was an error connecting to mongodb", error);
  }

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


  // name: string;
  // price: number;
  // type: string;
  // description: string;
  // model_number: string;
  // manufacturer: string;
  // status: string;
  // date_created: Date;
  // date_modified: Date;
}

// const fs = require("fs");
// const path = require("path");

// export async function POST(request: NextRequest) {
//   const data = await request.json();
//   const filePath = path.resolve(process.cwd(), "app/data/submission.json");

//   let submissions: any = [];

//   try {
//     const data = fs.readFileSync(filePath, "utf8");
//     submissions = JSON.parse(data);
//   } catch(error) {
//     console.error("Error reading this file", error);
//   }

//   submissions.push(data);

//   try {
//     const newData = JSON.stringify(submissions, null, 2);
//     fs.writeFileSync(filePath, newData, "utf8");
//   } catch (error) {
//     console.error("Error writing this file", error);
//   }

//   return NextResponse.json({
//     data: data,
//     message: "This message has been successfully sent",
//   });

