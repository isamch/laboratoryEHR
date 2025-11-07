import mongoose from "mongoose";
import LabTest from "./../models/labTest.model.js"; 

const MONGO_URI = "mongodb://isam:isam2003@localhost:27017/laboratory_db?authSource=admin";

const seedLabTests = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to Laboratory DB");

    await LabTest.deleteMany();

    const labTests = [
      {
        patientId: "690b6ec0bf0049ae908610a3",
        doctorId: "690b6ebbbf0049ae90861074",
        testType: "Blood Test",
        status: "pending"
      },
      {
        patientId: "690b6ec0bf0049ae908610a3",
        doctorId: "690b6ebbbf0049ae90861074",
        testType: "Urine Test",
        status: "pending"
      },
      {
        patientId: "690b6ec0bf0049ae908610a3",
        doctorId: "690b6ebbbf0049ae90861074",
        testType: "Glucose Test",
        status: "pending"
      }
    ];

    await LabTest.insertMany(labTests);
    console.log("✅ Seed data for Laboratory created!");

    process.exit();
  } catch (err) {
    console.error("❌ Error seeding Laboratory:", err.message);
    process.exit(1);
  }
};

seedLabTests();
