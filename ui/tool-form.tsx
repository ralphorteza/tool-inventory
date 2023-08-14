import Link from "next/link";

export default function ToolForm() {
  return (
    <div className="px-8">
      <header className="flex font-semibold justify-center items-center mb-4">
        New tool
      </header>
      <form className="flex gap-2 flex-col">
        <label htmlFor="tool-name">tool name: </label>
        <input
          type="text"
          name="tool-name"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label htmlFor="tool-price">price:</label>
        <input
          type="text"
          name="tool-price"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label htmlFor="tool-type">tool type: </label>
        <select className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100">
          <option value="hand-tool">hand-tool</option>
          <option value="power-tool">power-tool</option>
        </select>
        <label htmlFor="tool-desc">description: </label>
        <input
          type="text"
          name="tool-desc"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label htmlFor="tool-model-num">model #: </label>
        <input
          type="text"
          name="tool-model-num"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label htmlFor="tool-manafacturer">manafacturer: </label>
        <input
          type="text"
          name="tool-manafacturer"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
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