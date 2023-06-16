import { FaLinkedinIn, FaGithubSquare, FaInstagram } from "react-icons/fa";

export const footer = {
  contact: [
    {
      sub_text: "+62 813 8411 8613",
      text: "Call aese",
      icon: "",
      link: "https://api.whatsapp.com/send/?phone=6281384118613",
    },
    {
      sub_text: "raihanas110@gmail.com",
      text: "Email",
      icon: "",
      link: "mailto:raihanas110@gmail.com",
    },
  ],
  follow: [
    {
      title: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/raihanas/",
    },
    {
      title: "Github",
      icon: <FaGithubSquare />,
      link: "https://github.com/rhnas110",
    },
    {
      title: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/hanb.as/",
    },
  ],
  treat: {
    title: "Treat aese coffee",
    type: "soon",
    icon: "&#8594",
    link: ".",
  },
};
