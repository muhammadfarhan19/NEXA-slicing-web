"use client";

import React from "react";
import { FaUserTie } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";

const ChatBox = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const handleChatBox = () => setIsShow(!isShow);
  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-end">
      <div
        className={`w-80 h-96 rounded-2xl bg-white overflow-hidden ${
          isShow ? "block" : "hidden"
        }`}
      >
        <div className="w-full h-16 bg-blue-600 flex items-center justify-between px-5">
          <h1 className="text-white text-sm">Terhubunglah Bersama Kami</h1>
          <RiCloseLargeFill
            fill="white"
            onClick={handleChatBox}
            className="cursor-pointer"
          />
        </div>
        <div className="w-full h-full px-5">
          <div className="bg-gray-200 rounded-lg w-full h-10 my-5" />
          <div className="bg-gray-200 rounded-lg w-full h-10 my-5" />
          <div className="bg-gray-200 rounded-lg w-full h-10 my-5" />
          <div className="bg-gray-200 rounded-lg w-full h-10 my-5" />
          <div className="bg-gray-200 rounded-lg w-full h-10 my-5" />
        </div>
      </div>
      <div
        className={`w-16 md:w-24 h-16 md:h-24 rounded-full grid place-items-center bg-blue-400 cursor-pointer`}
        onClick={handleChatBox}
      >
        <FaUserTie
          className="w-8 md:w-12 h-8 md:h-12 cursor-pointer"
          fill="white"
        />
      </div>
    </div>
  );
};

export default ChatBox;
