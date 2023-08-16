
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";


interface ToolFormProps {
  name: string;
  price: number;
  type: string;
  description: string;
  model_number: string;
  manufacturer:  string;
}

export default function ToolForm({name, price, type, description, model_number, manufacturer}:ToolFormProps) {
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    name: "",
    price: "",
    type: "",
    description: "",
    model_number: "",
    manufacturer: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value, type } = e.currentTarget;
    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: value
      }
    });
  };

  const handleSubmit =(e: FormEvent) => {
    e.preventDefault();
    console.log(form);
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
          name="tool-name"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          // onChange={e => handleChange(e)}
          onChange={handleChange}
          value={form.name}
        />
        <label htmlFor="tool-price">price:</label>
        <input
          type="text"
          name="tool-price"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          // onChange={e => handleChange(e)}
          onChange={handleChange}
          value={form.price}
        />
        <label htmlFor="tool-type">tool type:</label>
        <select
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          // onChange={e => handleChange(e)}
          onChange={handleChange}
          value={form.type}
        >
          <option value="hand-tool">hand-tool</option>
          <option value="power-tool">power-tool</option>
        </select>
        <label htmlFor="tool-desc">description:</label>
        <input
          type="text"
          name="tool-desc"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          // onChange={e => handleChange(e)}
          onChange={handleChange}
          value={form.description}
        />
        <label htmlFor="tool-model-num">model #:</label>
        <input
          type="text"
          name="tool-model-num"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          // onChange={e => handleChange(e)}
          onChange={handleChange}
          value={form.model_number}
        />
        <label htmlFor="tool-manafacturer">manafacturer:</label>
        <input
          type="text"
          name="tool-manafacturer"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          // onChange={e => handleChange(e)}
          onChange={handleChange}
          value={form.manufacturer}
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