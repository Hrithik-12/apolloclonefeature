import { dbConnect } from "@/lib/dbconnect";
import DoctorSchema from "@/models/Schema";

export async function GET(request) {
  await dbConnect();

  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 9;
  const minExperience = parseInt(searchParams.get("minExperience")) || 0;
  const modeOfConsult = searchParams.get("modeOfConsult") || '';
  const minFee = parseInt(searchParams.get("minFee")) || 0;
  const maxFee = parseInt(searchParams.get("maxFee")) || 1500;
  const languages = searchParams.get("languages") ? searchParams.get("languages").split(',') : [];

  try {
    const filter = {
      ...(minExperience && { experience: { $gte: minExperience } }),
      ...(modeOfConsult && { modeOfConsult }),
      ...(minFee && { consultationFee: { $gte: minFee } }),
      ...(maxFee && { consultationFee: { $lte: maxFee } }),
      ...(languages.length > 0 && { languages: { $in: languages } }),
    };

    const doctors = await DoctorSchema.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);

    return new Response(JSON.stringify({ success: true, data: doctors }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
