"use client";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";

// TODO:
// price number validation
// type default selection


interface FormData {
  name: string;
  price: string;
  type: string;
  description: string;
  model_number: string;
  manufacturer: string;
}

export default function ToolForm() {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: "",
    type: "default",
    description: "",
    model_number: "",
    manufacturer: ""
  });

  function handleChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData(prevFormData => {
      return { ...formData, [name]: value}
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
  }

    return (
    <div className="px-8">
      <header className="flex font-semibold justify-center items-center mb-4">
        New tool
      </header>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        
        <label htmlFor="name">name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          onChange={handleChange}
          minLength={1}
          maxLength={50}
          required
        />

        <label htmlFor="price">price:</label>
        <input
          type="text"
          id="price"
          name="price"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          onChange={handleChange}
          required
        />

        <label htmlFor="type">type:</label>
        <select
          id="type"
          name="type"
          onChange={handleChange}
          defaultValue={"default"}
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          required
        >
          <option value={"default"} disabled> choose an option </option>
          <option value={"hand-tool"}>hand-tool</option>
          <option value={"power-tool"}>power-tool</option>
        </select>

        <label htmlFor="description">description:</label>
        <input
          id="description"
          type="text"
          name="description"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          onChange={handleChange}
          minLength={10}
          maxLength={250}
          required
        />

        <label htmlFor="model_num">model #:</label>
        <input
          type="text"
          id="model_num"
          name="model_number"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          onChange={handleChange}
          required
        />

        <label htmlFor="manufacturer">manufacturer:</label>
        <input
          type="text"
          id="manufacturer"
          name="manufacturer"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          onChange={handleChange}
          minLength={1}
          maxLength={50}
          required
        />

        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );

}