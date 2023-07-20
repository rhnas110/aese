import { AiOutlineUser } from "react-icons/ai";
import { TbPalette } from "react-icons/tb";
import { MdLanguage } from "react-icons/md";

import { getWidth, minimize } from "../utils";

export const sideProfile = ({ nickname }) => {
  const witdh = getWidth();

  const bar = [
    {
      icon: <AiOutlineUser size={25} />,
      text: witdh < 768 ? "Account" : minimize(nickname, 10) || "...",
      path: "/account",
      type: true,
    },
    {
      icon: <TbPalette size={25} />,
      text: "Theme",
      path: "/account_theme",
      type: false,
    },
    {
      icon: <MdLanguage size={25} />,
      text: "Language",
      path: "/account_language",
      type: false,
    },
  ];
  return bar;
};
