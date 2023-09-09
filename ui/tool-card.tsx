// TODO: remove? date fields.
interface ToolProps {
  _id: string;
  name: string;
  price: string;
  type: string;
  description: string;
  model_number: string;
  manufacturer: string;
  status: string;
  date_created: string;
  date_modified: string;
};

type Props = { tool: ToolProps };

export const ToolCard = ({ tool }: Props) => {
  return (
    <div className="flex flex-row border-gray-600 border-b-2 place-content-between items-center py-1 px-2 mb-2">

      <div className="py-1 px-1">
        <p className="text-sm font-bold">{tool.name}</p>
        <p className="text-xs text-gray-600">${tool.price}</p>
      </div>

      <p className="text-xs text-gray-600">{tool.status}</p>

      <div className="flex gap-x-4 text-xs text-gray-600 font-medium">
        <button className="border-gray-500 border-2 rounded-lg px-2 py-0.5">Edit</button>
      </div>

    </div>
  );
} 
