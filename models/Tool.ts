// TODO: handle date creation for date_created and date_modified

// Comment out code block when running populatedb.js
const mongoose = require("mongoose");
interface ITool {
    _id: string,
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
  manufacturer: { type: String, required: true},
  status: {
    type: String,
    required: true,
    enum: ["available", "in-use", "maintenance", "missing", "broken"],
    default: "maintenance",
  },
  date_created: Date,
  date_modified: Date,
});

// Comment out code when running populatedb.js
export default mongoose.models.Tool || mongoose.model("Tool", ToolSchema);

// Use this for populatedb.js
// module.exports = mongoose.model("Tool", ToolSchema);