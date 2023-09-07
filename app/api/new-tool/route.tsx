import { NextRequest, NextResponse } from "next/server";

const fs = require("fs");
const path = require("path");

export async function POST(request: NextRequest) {
  const data = await request.json();
  const filePath = path.resolve(process.cwd(), "app/data/submission.json");

  let submissions: any = [];

  try {
    const data = fs.readFileSync(filePath, "utf8");
    submissions = JSON.parse(data);
  } catch(error) {
    console.error("Error reading this file", error);
  }

  submissions.push(data);

  try {
    const newData = JSON.stringify(submissions, null, 2);
    fs.writeFileSync(filePath, newData, "utf8");
  } catch (error) {
    console.error("Error writing this file", error);
  }

  return NextResponse.json({
    data: data,
    message: "This message has been successfully sent",
  });
}

// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json([
//     {
//       _id: "2444fh5567rrtg",
//       name: "screw driver",
//       price: "9.48",
//       type: "handtool",
//       description: "12 inch screw driver",
//       model_number: "MF356DF",
//       manufacturer: "REDD Co"
//     }
//   ])
// }