import { BiUser, BiBookmarkAlt, BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { censor } from "../../../utils";
import { axiosPrivate } from "../../../config/axios";
import { toastSuccess } from "../../../utils/toast";

const list = [
  {
    icon: <BiUser size={22} />,
    text: "Account",
    href: "/account",
  },
  {
    icon: <BiBookmarkAlt size={22} />,
    text: "Bookmarks",
    href: "/bookmarks",
  },
];

export const DashboardButton = ({ email, handleAuth }) => {
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      const response = (await axiosPrivate.delete("/auth/logout")).data;
      handleAuth("");
      toastSuccess(response?.message);
      setTimeout(() => window.location.replace("/"), 1500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="dropdown inline-block relative mr-3 md:mr-0">
      <button
        className="text-white bg-aese-900 font-semibold py-2 px-4 rounded-lg inline-flex items-center"
        onClick={() => navigate("/dashboard")}
      >
        <span className="mr-1">Dashboard</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
      </button>
      <ul className="dropdown-menu absolute hidden text-gray-900 pt-1">
        <li className="border-b border-gray-300">
          <div className="rounded-t bg-gray-200 py-2 px-3 whitespace-no-wrap">
            <span className="text-sm opacity-75 block">Signed in as</span>
            {censor(email, 4)}
          </div>
        </li>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="bg-gray-200 py-2 px-3 flex gap-2 whitespace-no-wrap hover:border-r-2 border-aese-800"
                href={item.href}
              >
                {item.icon}
                {item.text}
              </a>
            </li>
          );
        })}
        <li className="border-t border-gray-300">
          <span
            className="rounded-b bg-gray-200 hover:bg-gray-300 py-2 px-3 flex gap-2 whitespace-no-wrap cursor-pointer text-red-500"
            onClick={() => onLogout()}
          >
            <BiLogOutCircle size={22} />
            Sign out
          </span>
        </li>
      </ul>
    </div>
  );
};
