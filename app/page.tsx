import { Tool } from "@/ui/tool";
import ToolForm from "@/ui/tool-form";
import { useEffect } from "react";

// TODO 
// Add tool status, date created/modified into prop
export default function Home() {
  // let objects: any[] = [];
  // useEffect(() => {
  //   fetch('/api/new-tool')
  //     .then(res => res.json())
  //     .then(data => objects)
  // }, [])

  
  // temporary tools object for prototyping Tool component
  const tools = [
    {
    _id: "2444fh5567rrtg",
    name: "screw driver",
    price: "9.48",
    type: "handtool",
    description: "12 inch screw driver",
    model_number: "MF356DF",
    manufacturer: "REDD Co",
    status: "available",
    date_created: "02/15/2023",
    date_modified: "07/23/2023"
    },
    {
      _id: "24433346DDcd5",
      name: "Power Drill",
      price: "69.48",
      type: "powertool",
      description: "Drills through things and items",
      model_number: "PT356D4",
      manufacturer: "REDD Co",
      status: "missing",
      date_created: "08/11/2023",
      date_modified: "09/04/2023"
    }
  ];
  return (
    <div className="pt-4">
      <button className="border-red-500 border-2 px-4 py-4 rounded-lg ml-4 mb-4">Add</button>
      {/* <ToolForm /> */}
      {tools.map((tool) => {
        return (<Tool key={tool._id} tool={tool}/>)
      })}
    </div>
  )
}
