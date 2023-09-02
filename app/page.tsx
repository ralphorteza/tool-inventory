import { Tool } from "@/ui/tool";
import ToolForm from "@/ui/tool-form";
import { useEffect } from "react";

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
    manufacturer: "REDD Co"
    },
    {
      _id: "24433346DDcd5",
      name: "Power Drill",
      price: "69.48",
      type: "powertool",
      description: "Drills through things and items",
      model_number: "PT356D4",
      manufacturer: "REDD Co"
    }
  ];
  return (
    <div>
      {/* <ToolForm /> */}
      {tools.map((tool) => {
        return (<Tool key={tool._id} tool={tool}/>)
      })}
    </div>
  )
}
