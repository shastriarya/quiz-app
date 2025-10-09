import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const QuizContext = createContext();

const QuizContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isQuizEnd, setIsQuizEnd] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const backendUrl = "https://quiz-backend-92kb.onrender.com/api/questions";

  const fetchQuestions = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}`);
      if (data.success && Array.isArray(data.questions)) {
        setQuestions(data.questions);
      } else {
        setQuestions([]);
      }
    } catch (error) {
      toast.error(error.message || "Failed to load questions");
      setQuestions([]);
    }
  };

  useEffect(() => {
    let countdown;

    if (
      Array.isArray(questions) &&
      currentQuestion < questions.length &&
      !isTimeUp &&
      !isQuizEnd
    ) {
      countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setIsTimeUp(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [questions, currentQuestion, isTimeUp, isQuizEnd]);

  const handleAnswer = (selectedAnswer) => {
    const currentQ = questions[currentQuestion];
    if (!currentQ) return;

    const correctAnswer = currentQ.answer;

    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQ.question,
        correctAnswer,
        selectedAnswer,
      },
    ]);

    if (selectedAnswer === correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setIsTimeUp(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimer(10);
      setIsTimeUp(false);
    } else {
      setIsQuizEnd(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimer(10);
    setIsTimeUp(false);
    setIsQuizEnd(false);
    setUserAnswers([]);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const value = {
    questions,
    currentQuestion,
    score,
    timer,
    isTimeUp,
    isQuizEnd,
    userAnswers,
    handleAnswer,
    handleNextQuestion,
    handleRestartQuiz,
  };

  return (
    <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
  );
};

export default QuizContextProvider;
