"use server"
import Tool from "@/models/Tool";
import connectDB from "./connectdb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeleteTool(id: string) {
  await connectDB();

  const selectedTool = await Tool.findByIdAndDelete(id);
  
  revalidatePath("/");
  redirect("/");
}