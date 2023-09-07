"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

// TODO: removed date objects from client-side.
// TODO: implement client-side form validation.

interface FormData {
  name: string;
  price: string;
  type: "power-tool" | "hand-tool" | "n/a";
  description: string;
  model_number: string;
  manufacturer: string;
  status: string;
  date_created: string;
  date_modified: string;
}

export default function ToolForm() {

  const[errors, setErrors] = useState({});
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: "",
    type: "n/a",
    description: "",
    model_number: "",
    manufacturer: "",
    status: "",
    date_created:"",
    date_modified: "",
  });

  async function postData(formData: FormData) {
    try {
      const response = await fetch('/api/new-tool', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        },
      });
      
      if (!response.ok) throw new Error("HTTP ERROR! status: " + response.status);
      router.push('/');
    } catch(error: any) {
      console.log("There was a problem with the fetch operation " + error.message);
    }
  }

  function formValidate() {
    let err: any = {};
    if (!formData.name.trim()) err.name = "Name is required";
    if (!formData.price.trim()) err.price = "Price is required or input is required";
    if (!formData.type.trim() && formData.type === "n/a") err.type = "Type is required";
    if (!formData.description.trim()) err.description = "Description is required";
    if (!formData.model_number.trim()) err.model_number = "Model # is required";
    if (!formData.manufacturer.trim()) err.manufacturer = "Manufacturer is required";
    if (!formData.status.trim()) err.status = "Status is required";

    return err;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData(prevFormData => {
      return { ...formData, [name]: value }
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const errs = formValidate();
    postData(formData);
    console.log('clicked create!');
  }

    return (
    <div className="px-3">
      <header className="flex text-lg font-semibold justify-center items-center border-gray-400 border-b-2 mb-3">
        New Tool
      </header>
      <form onSubmit={handleSubmit} className="flex flex-col">
        
        <label htmlFor="name" className="text-sm text-gray-600">name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-slate-200 bg-transparent rounded px-2 py-1 mb-3 outline-none focus-within:border-slate-400"
          onChange={handleChange}
          minLength={1}
          maxLength={50}
          required
        />

        <label htmlFor="price" className="text-sm text-gray-600">price:</label>
        <input
          type="text"
          id="price"
          name="price"
          className="border border-slate-200 bg-transparent rounded px-2 py-1 mb-3 outline-none focus-within:border-slate-400"
          onChange={handleChange}
          required
        />

        <label htmlFor="type" className="text-sm text-gray-600">type:</label>
        <select
          id="type"
          name="type"
          onChange={handleChange}
          defaultValue={"default"}
          className="border border-slate-200 bg-transparent rounded px-2 py-2 mb-3 outline-none focus-within:border-slate-400"
          required
        >
          <option value={"default"} disabled> choose an option </option>
          <option value={"hand-tool"}>hand-tool</option>
          <option value={"power-tool"}>power-tool</option>
        </select>

        <label htmlFor="description" className="text-sm text-gray-600">description:</label>
        <input
          id="description"
          type="text"
          name="description"
          className="border border-slate-200 bg-transparent rounded px-2 py-1 mb-3 outline-none focus-within:border-slate-400"
          onChange={handleChange}
          minLength={10}
          maxLength={250}
          required
        />

        <label htmlFor="model_num" className="text-sm text-gray-600">model #:</label>
        <input
          type="text"
          id="model_num"
          name="model_number"
          className="border border-slate-200 bg-transparent rounded px-2 py-1 mb-3 outline-none focus-within:border-slate-400"
          onChange={handleChange}
          required
        />

        <label htmlFor="manufacturer" className="text-sm text-gray-600">manufacturer:</label>
        <input
          type="text"
          id="manufacturer"
          name="manufacturer"
          className="border border-slate-200 bg-transparent rounded px-2 py-1 mb-3 outline-none focus-within:border-slate-400"
          onChange={handleChange}
          minLength={1}
          maxLength={50}
          required
        />

        <label htmlFor="status" className="text-sm text-gray-600">status:</label>
        <input
          type="text"
          id="status"
          name="status"
          className="border border-slate-200 bg-transparent rounded px-2 py-1 mb-3 outline-none focus-within:border-slate-400"
          onChange={handleChange}
          minLength={1}
          maxLength={50}
          required
        />

      

        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="font-bold text-gray-600 border border-gray-300 rounded px-2 py-1 mb-3 outline-none hover:bg-slate-300 hover:text-white focus-within:bg-slate-300 focus-within:text-white"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="font-bold text-white bg-gray-500 rounded px-2 py-1 mb-3 outline-none hover:bg-gray-600 focus-within:bg-gray-600"
          >
            Create
          </button>
          <div>
          </div>
        </div>
      </form>
    </div>
  );
}