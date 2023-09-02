import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      _id: "2444fh5567rrtg",
      name: "screw driver",
      price: "9.48",
      type: "handtool",
      description: "12 inch screw driver",
      model_number: "MF356DF",
      manufacturer: "REDD Co"
    }
  ])
}