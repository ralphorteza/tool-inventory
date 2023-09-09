import mongoose from "mongoose";
import Tool from "@/models/Tool";
import connectDB from "./connectdb";

export default async function getServerSideData() {
  await connectDB();

  const data = await Tool.find({});
  const tools = data.map((doc: any) => {
    const tool = doc.toObject();
    tool._id = tool._id.toString();
    return tool;
  });

  return tools;
}
//   const MONGO_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@cluster0.mwd6uuv.mongodb.net/${process.env.MONGODB_PATH}?retryWrites=true&w=majority`;

//   let client;

//   try {
//     client = await mongoose.connect(MONGO_URI);
//     console.log("mongodb connected in homepage");
    
//     const data = await Tool.find();
//     const tools = data.map((doc: any) => {
//       const tool = doc.toObject();
//       tool._id = tool._id.toString();
//       return tool;
//     })
//     console.log(data);
//     return tools;
//   } catch(error) {
//     console.log("There was an error connecting to mongodb", error);
//   }
// }