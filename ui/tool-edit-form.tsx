"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import EditTool from "@/lib/editTool";
import { XIcon } from "./x-icon";
import DeleteTool from "@/lib/deleteTool";

enum TypeEnum {
  power_tool = "power-tool",
  hand_tool = "hand-tool",
  electronics = "electronics"
};

enum StatusEnum {
  available = "available",
  in_use = "in-use",
  maintenance = "maintenance",
  missing = "missing",
  broken = "broken"
};

type Inputs = {
  name: string,
  price: string,
  type: TypeEnum,
  description: string,
  model_number: string,
  manufacturer: string,
  status: StatusEnum,
};

export default function ToolEditForm({tool, id}: {tool: Inputs, id: string}) {
  const router = useRouter();
  const prefill = tool;

  const { register, handleSubmit, watch, formState: { errors }} = useForm<Inputs>({
    defaultValues: {
      ...tool
    }
  });

  const handleDelete = async (id: string) => DeleteTool(id);
  const onSubmit: SubmitHandler<Inputs> = async (data) => EditTool(data, id);

  return (
    <div className="px-3">
      <button
        type="button"
        className="justify-self-end"
        onClick={() => handleDelete(id)}
      >
        <XIcon />
      </button>
      <header className="flex text-lg font-semibold justify-center items-center border-gray-400 border-b-2 mb-3">
        Modify Tool
      </header>
      
      

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col"
      >
        <label htmlFor="name" className="text-sm text-gray-600">name{errors.name && <span className="text-sm text-red-400">*</span>}</label>
        <input
          id="name"
          className="border border-slate-200 bg-transparent rounded px-2 py-1 mb-3 outline-none focus-within:border-slate-400"
          {...register("name", { required: true, })}
        />

        <label htmlFor="price" className="text-sm text-gray-600">price{errors.price && <span className="text-sm text-red-400">*</span>}</label>
        <input
          id="price"
          className="border border-slate-200 bg-transparent rounded px-2 py-1 mb-3 outline-none focus-within:border-slate-400"
          {...register("price", { required: true })}
        />

        <label htmlFor="type" className="text-sm text-gray-600">type{errors.type && <span className="text-sm text-red-400">*</span>}</label>
        <select
          id="type"
          className="border border-slate-200 bg-transparent rounded px-2 py-2 mb-3 outline-none focus-within:border-slate-400"
          {...register("type", { required: true })}
        >
          <option value="n/a" disabled>--select option--</option>
          <option value="power-tool">power-tool</option>
          <option value="hand-tool">hand-tool</option>
          <option value="electronics">electronics</option>
        </select>

        <label htmlFor="description" className="text-sm text-gray-600">description{errors.description && <span className="text-sm text-red-400">*</span>}</label>
        <input
          id="description"
          className="border border-slate-200 bg-transparent rounded px-2 py-1 mb-3 outline-none focus-within:border-slate-400"
          {...register("description", { required: true })}
        />

        <label htmlFor="model_number" className="text-sm text-gray-600">model #{errors.model_number && <span className="text-sm text-red-400">*</span>}</label>
        <input
          id="model_number"
          className="border border-slate-200 bg-transparent rounded px-2 py-1 mb-3 outline-none focus-within:border-slate-400"
          {...register("model_number", { required: true })}
        />

        <label htmlFor="manufacturer" className="text-sm text-gray-600">manufacturer{errors.manufacturer && <span className="text-sm text-red-400">*</span>}</label>
        <input
          id="manufacturer"
          className="border border-slate-200 bg-transparent rounded px-2 py-1 mb-3 outline-none focus-within:border-slate-400"
          {...register("manufacturer", { required: true })}
        />

        <label htmlFor="status" className="text-sm text-gray-600">status{errors.type && <span className="text-sm text-red-400">*</span>}</label>
        <select
          id="status"
          className="border border-slate-200 bg-transparent rounded px-2 py-2 mb-3 outline-none focus-within:border-slate-400"
          {...register("status", { required: true })}
        >
          <option value="n/a" disabled>--select option--</option>
          <option value="available">available</option>
          <option value="in-use">in-use</option>
          <option value="maintenance">maintenance</option>
          <option value="missing">missing</option>
          <option value="broken">broken</option>
        </select>

        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="font-bold text-gray-600 border border-gray-300 rounded px-2 py-1 mb-3 outline-none hover:bg-slate-300 hover:text-white focus-within:bg-slate-300 focus-within:text-white"
          >
            Cancel
          </Link>
          <input
            type="submit"
            value="Edit"
            className="font-bold text-white bg-gray-500 rounded px-4 py-1 mb-3 outline-none hover:bg-gray-600 focus-within:bg-gray-600"
          />
        </div>
      </form>
    </div>
  );
}