import connectDB from "@/lib/connectdb";
import Tool from "@/models/Tool"
import ToolEditForm from "@/ui/tool-edit-form";

export default async function Page(
  { params }: 
  {params: { id: string } }
) {

  connectDB();
  const toolObj = await Tool.findById(params.id);
  const tool = {
    _id: toolObj.id,
    name: toolObj.name,
    price: toolObj.price,
    type: toolObj.type,
    description: toolObj.description,
    model_number: toolObj.model_number,
    manufacturer: toolObj.manufacturer,
    status: toolObj.status,
    date_created: toolObj.date_created,
    date_modified: toolObj.date_modified
  };

  console.log("inside app/tool/[id]:");
  console.log(tool);

  return (
    <div className="flex flex-col pt-4">
      <ToolEditForm tool={tool} id={params.id}/>
    </div>
    
  )
}
