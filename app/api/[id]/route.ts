import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Tool from "@/models/Tool"
import connectDB from "@/lib/connectdb";

export async function PUT(req: NextRequest, res: NextResponse) {
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



  try {
  //  await Tool.findByIdAndUpdate(data._id, {...data, date_modified: Date}, {})
  await Tool.findByIdAndUpdate(
    {_id: data._id},
    {name: name,
    price: price,
    type: type,
    description: description,
    model_number: model_number,
    manufacturer: manufacturer,
    status: status,
    date_created: data.date_created,
    date_modified: Date()},
    {}
  )

  await Tool.save();
    // console.log("New tool created!");
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
// export async function PUT(req: NextRequest, res: NextResponse) {
//   await connectDB();
//   const data = await req.json();
//   const { 
//     name,
//     price,
//     type,
//     description,
//     model_number,
//     manufacturer,
//     status
//   } = data;

//   const newData = {
//     ...data,
//     date_created: new Date(),
//     date_modified: new Date()
//   };


//   try {
//     await Tool.create(newData);
//     console.log("New tool created!");
//     return NextResponse.json(
//       { message: "message sent" },
//       { status: 201 }
//     );
//   } catch(error) {
//     console.log("Tool couldn't be filled", error);
//     return NextResponse.json(
//       { message: "Error sending the tool" },
//       { status: 500 }
//     )
//   }
// }
