import LabTest from "../models/labTest.model.js";
import axios from "axios";

// Handle a new lab test request from the clinic
export const createLabTest = async (req, res) => {
  try {
    const newTest = await LabTest.create(req.body);
    res.status(201).json({ success: true, data: newTest });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get all lab tests
export const getAllLabTests = async (req, res) => {
  const tests = await LabTest.find();
  res.json({ success: true, data: tests });
};


// Update the result and send it to the clinic
export const updateLabResult = async (req, res) => {
  try {
    const { id } = req.params;
    const { result } = req.body;

    const updated = await LabTest.findByIdAndUpdate(id, { result, status: "completed" }, { new: true });

    if (!updated) {
      return res.status(404).json({ success: false, message: "Lab test not found or not completed." });
    }

    await axios.post(process.env.CLINIC_RESULT_ENDPOINT, updated);


    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};