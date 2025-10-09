import dotenv from "dotenv";
import main from "./config/db.js";
import QuestionModel from "./models/question.js";

dotenv.config();

const allQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    id: 3,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Leonardo da Vinci",
  },
  {
    id: 4,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    answer: "Blue Whale",
  },
  {
    id: 5,
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
];

const Data= async () => {
  try {
    await main();
    await QuestionModel.deleteMany({});
    await QuestionModel.insertMany(allQuestions);
    console.log("✅ Questions inserted successfully into MongoDB Atlas!");
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting questions:", error.message);
    process.exit(1);
  }
};

Data();
