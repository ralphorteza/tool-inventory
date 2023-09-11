import { ToolCard } from "@/ui/tool-card";
import Link from "next/link";
import getServerSideData from "@/lib/getServerSideData";

export default async function Home() {
  const tools = await getServerSideData();
  console.log(tools);
  // TODO: get tool cards from remote db and populate here.
  return (
    <div className="flex flex-col pt-4">
      <Link
        href={'/add-tool'}
        className="border-gray-700 border-2 bg-gray-400 rounded-lg py-2 mb-4 text-white text-center font-extrabold"
      >
        Add Tool
      </Link>
      {tools.map((tool:any) => {
        return(<ToolCard key={tool._id} tool={tool}/>)
      })}
    </div>
  ); 
}