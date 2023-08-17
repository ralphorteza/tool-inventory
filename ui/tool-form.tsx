"use client";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";


// interface ToolFormProps {
//   name: string;
//   price: number;
//   type: string;
//   description: string;
//   model_number: string;
//   manufacturer:  string;
// }

export default function ToolForm() {

  async function handleSubmit(e:any) {
    e.preventDefault();
    const data = {
      name: String(e.target.name.value),
      price: String(e.target.name.value),
      type: String(e.target.name.value),
      description: String(e.target.name.value),
      model_number: String(e.target.name.value),
      manufacturer: String(e.target.name.value),
    };

    console.log(data);
  }

    return (
    <div className="px-8">
      <header className="flex font-semibold justify-center items-center mb-4">
        New tool
      </header>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        
        <label htmlFor="tool-name">tool name:</label>
        <input
          type="text"
          id="tool-name"
          name="name"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          minLength={1}
          maxLength={50}
          required
        />

        <label htmlFor="price">price:</label>
        <input
          type="number"
          id="price"
          name="price"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          required
        />

        <label htmlFor="tool-type">tool type:</label>
        <select
          id="tool-type"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          required
        >
          <option value="hand-tool">hand-tool</option>
          <option value="power-tool">power-tool</option>
        </select>

        <label htmlFor="tool-desc">description:</label>
        <input
          type="text"
          name="description"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          minLength={10}
          maxLength={250}
          required
        />

        <label htmlFor="tool-model-num">model #:</label>
        <input
          type="text"
          id="tool-model-num"
          name="model_number"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          required
        />

        <label htmlFor="tool-manufacturer">manufacturer:</label>
        <input
          type="text"
          id="tool-manufacturer"
          name="manufacturer"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
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