"use server"
import Tool from "@/models/Tool";
import connectDB from "./connectdb";

export default async function getServerSideData() {
  await connectDB();

  const data = await Tool.find({});
  const tools = data.map((doc: any) => {
    const tool = doc.toObject();
    tool._id = tool._id.toString();
    return tool;
  });

  return tools;
}