import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  question: {
    type: String,
    required: true,
    trim: true,
  },
  options: {
    type: [String],
    required: true,
    validate: {
      validator: function (arr) {
        return arr.length >= 2;
      },
      message: "A question must have at least 2 options.",
    },
  },
  answer: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (value) {
        return this.options.includes(value);
      },
      message: "Answer must be one of the provided options.",
    },
  },
});

const QuestionModel = mongoose.model("Question", questionSchema);
export default QuestionModel;
