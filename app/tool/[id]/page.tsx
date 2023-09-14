import connectDB from "@/lib/connectdb";
import Tool from "@/models/Tool"
import ToolEditForm from "@/ui/tool-edit-form";
import Link from "next/link";

export default async function Page(
  { params }: 
  {params: { id: string } }
) {

  connectDB();
  const toolObj = await Tool.findById(params.id);
  const tool = {
    name: toolObj.name,
    price: toolObj.price,
    type: toolObj.type,
    description: toolObj.description,
    model_number: toolObj.model_number,
    manufacturer: toolObj.manufacturer,
    status: toolObj.status
  }

  return (
    <div className="flex flex-col pt-4">
      <ToolEditForm tool={tool} id={params.id}/>
    </div>
    
  )
}
