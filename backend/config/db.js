import mongoose from "mongoose";

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas successfully...");
  } catch (error) {
    console.error("MongoDB Atlas connection failed:", error.message);
    process.exit(1);
  }
};

export default main;
