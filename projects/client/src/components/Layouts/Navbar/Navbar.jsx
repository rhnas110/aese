import { useState, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { Heading } from "../../Elements/Heading";
import { List, UnorderedList } from "../../Elements/List";
import { Button, DashboardButton } from "../../Elements/Button";

import { nav_list } from "../../../data";
import { AuthContext } from "../../../context/Auth";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { auth, handleAuth } = useContext(AuthContext);

  const handleNav = () => {
    setNav(!nav);
  };

  let lastScrollTop;
  window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 555) {
      navbar.classList.remove("top-0");
      navbar.classList.add("top-[-80px]");
    } else {
      navbar.classList.remove("top-[-80px]");
      navbar.classList.add("top-0");
    }
    lastScrollTop = scrollTop;
  });

  return (
    <nav
      id="navbar"
      className="text-aese-900 h-24 max-w-[1240px] mx-auto fixed z-[100] top-0 left-0 right-0 transition-all duration-700 px-2"
    >
      <div className="backdrop-blur-xl md:bg-transparent bg-[rgba(0,3,0,.77)] rounded-full flex justify-between items-center mt-2 px-3 sm:px-6 py-3 md:py-1">
        <Heading
          size={1}
          className="text-3xl font-bold w-full md:w-auto select-none hover:text-[2rem] transition-all ease-out duration-300 hover:drop-shadow-[0_20px_40px_rgba(134,93,255,1)]"
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
        {auth?.id ? (
          <DashboardButton email={auth?.email} handleAuth={handleAuth} />
        ) : (
          <a href="/login">
            <Button
              type="button"
              className="text-white bg-aese-900 font-semibold rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 hover:bg-aese-1000 hover:ring-2 hover:ring-offset-2 ring-offset-[#000300] hover:ring-aese-1000 transition-all ease-out duration-300 hover:scale-110"
              text="Login"
            />
          </a>
        )}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
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
