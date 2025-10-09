import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import main from "./config/db.js";
import QuestionModel from "./models/question.js";

dotenv.config();

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

main();


app.get("/api/questions", async (req, res) => {
  try {
    const questions = await QuestionModel.find({});
    res.status(200).json({ success: true, questions });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to load questions",
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
