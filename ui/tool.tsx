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
}

type Props = { tool: ToolProps}

export const Tool = ({tool} : Props) => {
  return (
    <div className="flex flex-row justify-between px-8 py-2 border-red-500 border-2 mx-4 mb-4">
      <div>
        <p className="text-sm font-bold">{tool.name}</p>
        <p className="text-xs text-gray-600">${tool.price}</p>
        <p className="text-xs text-gray-600">{tool.description}</p>
      </div>
      <div className="grid grid-flow-col gap-x-2">
        <button className="border-red-500 border-2 rounded-md px-2">Edit</button>
        <button className="border-red-500 border-2 rounded-md px-2">Delete</button>
      </div>
    </div>
  );
}
