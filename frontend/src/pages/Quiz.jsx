import { useContext, useEffect } from "react";
import { QuizContext } from "../context/QuizContext";

const Quiz = () => {
  const {
    questions = [],
    currentQuestion = 0,
    score = 0,
    timer = 0,
    isTimeUp = false,
    isQuizEnd = false,
    userAnswers = [],
    handleAnswer,
    handleNextQuestion,
    handleRestart,
    handleRestartQuiz,
  } = useContext(QuizContext);

  useEffect(() => {
    if (isTimeUp && typeof handleNextQuestion === "function") {
      handleNextQuestion();
    }
  }, [isTimeUp, handleNextQuestion]);

  if (!Array.isArray(questions) || questions.length === 0) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  const restart = () => {
    if (typeof handleRestartQuiz === "function") {
      handleRestartQuiz();
    } else if (typeof handleRestart === "function") {
      handleRestart();
    }
  };

  if (isQuizEnd) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white">
        <h2 className="text-3xl font-bold mb-4">Quiz Finished</h2>
        <p className="text-lg mb-4">
          Your Score: <span className="font-semibold">{score}</span> / {questions.length}
        </p>
        <button
          onClick={restart}
          className="text-white py-3 px-8 rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:outline-none transform duration-300 ease-in-out mb-6"
        >
          Restart Quiz
        </button>

        <div className="max-w-4xl w-full p-6 rounded-lg shadow-lg h-96 overflow-auto">
  <h3 className="text-2xl font-semibold mb-4">Review Your Answers:</h3>
  <div className="space-y-6">
    {userAnswers.length > 0 &&
      userAnswers.map((answer, index) => (
        <div key={index} className="p-4 rounded-lg border">
          <p className="font-bold text-lg mb-2">
            Q {index + 1}: {answer.question}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-green-500">Correct Answer:</span>{" "}
            {answer.correctAnswer}
          </p>
          <p>
            <span className="font-semibold text-red-500">Your Answer:</span>{" "}
            {answer.selectedAnswer || "Not Answered"}
          </p>
        </div>
      ))}
  </div>
</div>

      </div>
    );
  }

  const currentQ = questions[currentQuestion] || {};
  const question = currentQ.question || "";
  const options = currentQ.options || [];
  const progress = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-gradient-to-l from-[#13072e] to-[#3f2182] text-white">
      <div className="flex flex-row justify-between space-x-12 mb-6">
        <p className="text-lg font-bold">Total Questions: {questions.length}</p>
        <p className="text-lg font-bold">Current Question: {currentQuestion + 1}</p>
      </div>

      <div className="p-8 rounded-xl shadow-lg max-w-3xl w-full bg-gradient-to-b from-[#13072e] to-[#3f2182] border">
        <button
          onClick={() => typeof handleNextQuestion === "function" && handleNextQuestion()}
          className="border py-1 px-4 rounded-md mb-5 bg-blue-500 hover:bg-blue-600"
        >
          Next
        </button>

        <h2 className="text-3xl font-bold text-center mb-4">{question}</h2>

        <p className="text-xl text-center mb-6">
          Time Left: <span className="text-red-500 font-semibold">{timer}</span>
        </p>

        <div className="relative mb-6">
          <progress value={progress} max="100" className="w-full h-0.5 bg-gray-300 rounded-full mb-9"></progress>
          <span className="absolute top-0 left-8 right-0 text-center text-white font-semibold mt-3">
            {Math.round(progress)}% completed
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => typeof handleAnswer === "function" && handleAnswer(option)}
              className="text-white py-3 px-6 rounded-lg shadow-lg bg-indigo-500 transition ease-in-out duration-300 transform hover:scale-105 hover:bg-green-500"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
