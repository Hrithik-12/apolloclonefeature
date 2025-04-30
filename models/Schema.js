import mongoose from "mongoose";

// Updated Doctor Schema
const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  experience: { type: Number, required: true },
  rating: { type: Number, required: true },
  location: { type: String, required: true },
  consultationFee: { type: Number, required: true },
  availableToday: { type: Boolean, default: false },
  modeOfConsult: { type: String, enum: ['online', 'hospital visit'], required: true }, // Online or Hospital Visit
  languages: { type: [String], required: true }, // Languages the doctor speaks
}, {
  timestamps: true,
});

export default mongoose.models.Doctor || mongoose.model("Doctor", DoctorSchema);
