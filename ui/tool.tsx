interface ToolProps {
  _id: string;
  name: string;
  price: string;
  type: string;
  description: string;
  model_number: string;
  manufacturer: string;
}

type Props = { tool: ToolProps}

export const Tool = ({tool} : Props) => {
  return (
    <div className="px-8 border-red-500 border-2 mb-5">
      <p className="text-lg font-bold">{tool.name}</p>
      <p className="text-base text-gray-600">${tool.price}</p>
      <p className="text-sm text-gray-600">{tool.description}</p>
    </div>
  );
}

// export const Tool = ({ 
//   _id,
//   name,
//   price,
//   type,
//   description,
//   model_number,
//   manufacturer
// }: ToolProps) => {
//   return (
//     <div className="px-8">

//     </div>
//   );
// }