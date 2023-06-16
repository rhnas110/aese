import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { Heading } from "../../Elements/Heading";
import { List, UnorderedList } from "../../Elements/List";
import { Button } from "../../Elements/Button";

import { nav_list } from "../../../data";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="text-aese-900 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 relative z-[100]">
      <Heading
        size={1}
        className="text-3xl font-bold w-full md:w-auto select-none hover:text-4xl transition-all ease-out duration-300 hover:drop-shadow-[0_20px_40px_rgba(134,93,255,1)]"
        text={
          <a href="/" className="relative aese">
            aese
          </a>
        }
      />
      <UnorderedList
        className="hidden md:flex font-medium"
        children={nav_list.map((list) => {
          return (
            <List
              className="p-4 treat-100 hover:font-semibold hover:text-aese-1000 hover:scale-110 transition-all ease-out duration-300"
              key={list.id}
              text={<a href={list.link}>{list.title}</a>}
            />
          );
        })}
      />
      <Button
        type="button"
        className="text-white bg-aese-900 font-semibold rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 hover:bg-aese-1000 hover:ring-2 hover:ring-offset-2 ring-offset-[#000300] hover:ring-aese-1000 transition-all ease-out duration-300 hover:scale-110"
        text={<a href="/login">Login</a>}
      />
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <UnorderedList
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 font-medium"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
        children={[
          <Heading
            size={1}
            className="w-full text-3xl font-bold m-4 pt-4 select-none"
            text="aese"
            key={"h1"}
          />,
          nav_list.map((list, index) => {
            return (
              <List
                className={index === 3 ? "p-4" : "p-4 border-b border-gray-600"}
                key={list.id}
                text={
                  <a
                    href={list.link}
                    onClick={() => {
                      if (index === 3) setNav(false);
                    }}
                  >
                    {list.title}
                  </a>
                }
              />
            );
          }),
        ]}
      />
    </nav>
  );
};
