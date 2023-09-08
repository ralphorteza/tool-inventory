const mongoose = require("mongoose");
// TODO: handle date creation for date_created and date_modified
interface ITool {
    name: string;
    price: number;
    type: string;
    description: string;
    model_number: string;
    manufacturer: string;
    status: string;
    date_created: Date;
    date_modified: Date;
  }

const ToolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  type: {
    type: String,
    required: true,
    enum: ["power-tool", "hand-tool", "electronics"],
    default: "hand-tool"
  },
  description: { type: String, required: true },
  model_number: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["available", "in-use", "maintenance", "missing", "broken"],
    default: "maintenance",
  },
  date_created: Date,
  date_modified: Date,
});

export default mongoose.models.Tool || mongoose.model("Tool", ToolSchema);