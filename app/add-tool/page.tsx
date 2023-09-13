import ToolForm from "@/ui/tool-form";
 
export default function Page() {
  const prefill = {
    name: "",
    price: null,
    type: null,
    description: null,
    model_number: null,
    manufacturer: null,
    status: null,
  }
  return(
    <div>
      <ToolForm />
    </div>
  );
}