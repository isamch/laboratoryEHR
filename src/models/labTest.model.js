import mongoose from "mongoose";

const labTestSchema = new mongoose.Schema({
  patientId: { type: String, required: true },
  doctorId: { type: String, required: true },
  testType: { type: String, required: true },
  status: { type: String, enum: ["pending", "in_progress", "completed"], default: "pending" },
  result: { type: String, default: "" },
}, { timestamps: true });

export default mongoose.model("LabTest", labTestSchema);
