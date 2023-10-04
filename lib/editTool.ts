"use server"
import mongoose from "mongoose";
import Tool from "@/models/Tool";
import connectDB from "./connectdb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditTool(data: any, id: String) {
  await connectDB();

  const prevData = await Tool.findByIdAndUpdate(
    id,
    {
      name: data.name,
      price: data.price,
      type: data.type,
      description: data.description,
      model_number: data.model_number,
      manufacturer: data.manufacturer,
      status: data.status,
      date_modified: Date(),
    }
  );
  
  revalidatePath("/");
  redirect("/");
}