import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import headerImage from "../assets/GroupImg.png";
import Steps from "./Steps";
import Modal from "./Modal";

const Header = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const startQuiz = () => {
    setIsModalOpen(false);
    navigate("/quizes");
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-12 mt-12 mb-12">
        <div className="w-full flex flex-col justify-center p-6 lg:p-12 text-center lg:text-center">
          <p className="font-bold text-2xl md:text-4xl lg:text-6xl leading-tight">
            Experience the Ultimate Quiz Challenge, Play, and Learn!
          </p>
          <p className="mt-4 mb-4 text-xl md:text-3xl lg:text-4xl font-thin text-white">
            Challenge your knowledge !
          </p>
          <div className="flex justify-center lg:justify-start items-center">
            <button
              onClick={openModal}
              className="border bg-yellow-50 font-bold hover:bg-gray-400 text-black border-black px-6 py-3 rounded-lg cursor-pointer mt-4 mb-6"
            > 
              Start Quiz
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="uppercase font-semibold text-xl md:text-2xl lg:text-3xl">
            Join Thousands of Players Today!
          </p>
          <div className="flex justify-center lg:justify-start items-center flex-row">
            <p className="font-bold text-2xl md:text-3xl lg:text-4xl mt-2 text-red-500">
              20,000 +
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <img
            src={headerImage}
            alt="header"
            className="w-3/4 md:w-2/3 lg:w-full max-w-lg rounded-full"
          />
        </div>
      </div>

      <Steps />
      {isModalOpen && <Modal closeModal={closeModal} startQuiz={startQuiz} />}
    </>
  );
};

export default Header;
