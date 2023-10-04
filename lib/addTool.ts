"use server"
import Tool from "@/models/Tool";
import connectDB from "./connectdb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function AddTool(data: any) {
  await connectDB();

  const newTool = {
    ...data,
    date_created: new Date(),
    date_modified: new Date()
  };

  try {
    await Tool.create(newTool);
    console.log("message sent");

  } catch(error) {
    console.log("Tool couldn't be filled", error);
    return;
  }

  revalidatePath("/");
  redirect("/")
}