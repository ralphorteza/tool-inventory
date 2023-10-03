import { ToolCard } from "@/ui/tool-card";
import Link from "next/link";
import getServerSideData from "@/lib/getServerSideData";

export default async function Home() {
  const tools = await getServerSideData();
  return (
    <div className="flex flex-col pt-4">
      <Link
        href={'/tool/new'}
        className="border-gray-700 border-2 bg-gray-400 rounded-lg py-2 mb-4 text-white text-center font-extrabold"
      >
        Add Tool
      </Link>
      {tools.map((tool: any) => {
        return(<ToolCard key={tool._id} tool={tool}/>)
      })}
    </div>
  ); 
}