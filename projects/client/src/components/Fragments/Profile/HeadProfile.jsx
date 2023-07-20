import { useState } from "react";
import {
  AiOutlineSetting,
  AiFillCloseCircle,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

import { Heading } from "../../Elements/Heading";

import { sideProfile } from "../../../data/profile";
import { toastInfo } from "../../../utils/toast";

export const HeadProfile = ({ nickname }) => {
  const [bar, setBar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleBar = () => {
    setBar(!bar);
  };

  const profile = sideProfile({ nickname });

  return (
    <div className="relative mb-8">
      <div className="items-center gap-1 px-2 group md:flex hidden">
        <AiOutlineSetting
          size={35}
          className="group-hover:rotate-90 duration-300"
        />
        <span className="font-medium text-xl">Settings</span>
      </div>
      <div onClick={handleBar} className="block md:hidden px-2">
        {bar ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <ul
        className={
          bar
            ? "fixed text-center left-0 top-0 w-full h-full bg-[#000300] ease-in-out duration-500 font-medium text-white z-10"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="relative">
          <Heading
            size={1}
            className="text-2xl font-bold m-4 pt-4 select-none"
            text="Settings"
          />
          <div
            onClick={handleBar}
            className="absolute right-5 top-5 cursor-pointer"
          >
            <AiOutlineClose size={25} />
          </div>
        </div>
        {profile.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex justify-center py-5 hover:bg-gray-300/25 cursor-pointer ${
                index === profile.length - 1
                  ? ""
                  : "border-b-2 border-b-gray-200"
              } ${
                location?.pathname === item.path
                  ? "bg-[rgba(255,255,255,.25)]"
                  : ""
              }`}
              onClick={() => {
                if (item?.type) {
                  navigate(item.path);
                  handleBar();
                } else {
                  toastInfo("This feature is not available yet");
                }
              }}
            >
              <span>{item.text}</span>
            </div>
          );
        })}
      </ul>

      <a
        className="absolute right-0 top-0.5 md:-right-1 md:-top-1 cursor-pointer"
        href="/"
      >
        <AiFillCloseCircle
          size={20}
          className="text-gray-500 hover:text-gray-600"
        />
      </a>
    </div>
  );
};
