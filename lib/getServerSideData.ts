"use server"
import mongoose from "mongoose";
import Tool from "@/models/Tool";
import connectDB from "./connectdb";

export default async function getServerSideData() {
  await connectDB();

  const data = await Tool.find({});
  const tools = data.map((doc: any) => {
    // console.log(data);
    // console.log("inside getServerData.js: ");
    const tool = doc.toObject();
    // const tool = doc;
    // console.log(tool);
    tool._id = tool._id.toString();
    return tool;
  });

  return tools;
}