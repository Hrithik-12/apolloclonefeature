import { dbConnect } from "@/lib/dbconnect";
import DoctorSchema from "@/models/Schema";

export async function POST(request) {
  await dbConnect();

  try {
    const body = await request.json(); // In App Router, use request.json()
    const doctor = new DoctorSchema(body);
    await doctor.save();

    return Response.json({ success: true, data: doctor }, { status: 201 });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }
}
