import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Input, Label } from "../../../Elements/Input";
import { Button } from "../../../Elements/Button";
import { AuthButton } from "../AuthButton";

export const CheckUserForm = (props) => {
  const { showPassword, handleShowPassword, handleUserDuplicate } = props;
  return (
    <div>
      <div>
        <div className="relative mb-2">
          <Input
            type="email"
            id="email"
            placeholder=" "
            className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-gray-800 border-0 border-b-2 border-gray-700 appearance-none focus:border-aese-900 focus:outline-none focus:ring-0 peer"
          />
          <Label
            htmlFor="email"
            text="Email address"
            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-aese-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-4"
          />
        </div>
        <div className="relative">
          <Input
            type={!showPassword ? "password" : "text"}
            id="password"
            placeholder=" "
            className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-gray-800 border-0 border-b-2 border-gray-700 appearance-none focus:border-aese-900 focus:outline-none focus:ring-0 peer"
          />
          <Label
            htmlFor="password"
            text="Password"
            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-aese-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-4"
          />
          <i
            className="text-gray-400 absolute top-[25%] right-3 cursor-pointer"
            title={!showPassword ? "Show password" : "Hide password"}
            onClick={handleShowPassword}
          >
            {!showPassword ? <FaEye size={25} /> : <FaEyeSlash size={25} />}
          </i>
        </div>
        <Button
          className="w-full py-2 mt-6 bg-aese-900 hover:bg-aese-1000 rounded-3xl font-semibold"
          onClick={(e) => {
            e.preventDefault();
            handleUserDuplicate();
          }}
          text="Next"
        />
      </div>

      <div className="flex flex-col my-10">
        <AuthButton />
      </div>
    </div>
  );
};
