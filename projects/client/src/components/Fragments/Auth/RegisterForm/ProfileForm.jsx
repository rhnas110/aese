import { useState } from "react";
import { Button } from "../../../Elements/Button";
import { Input, Label } from "../../../Elements/Input";

export const ProfileForm = () => {
  const [type, setType] = useState("text");
  return (
    <div>
      <div className="relative mb-4">
        <Input
          type="text"
          id="nickname"
          placeholder=" "
          className="block rounded-md px-2.5 pb-2 pt-4 w-full text-sm text-white bg-gray-800 border-0 border-b-2 border-gray-700 appearance-none focus:border-aese-900 focus:outline-none focus:ring-0 peer"
        />
        <Label
          htmlFor="nickname"
          text="Nickname"
          className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3.5 z-10 origin-[0] left-2.5 peer-focus:text-aese-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-4"
        />
      </div>
      <div className="mb-4">
        <div className="flex justify-around border-2 border-gray-700 rounded-md py-2.5">
          <div className="flex items-center">
            <Input
              id="male"
              type="radio"
              value="Male"
              name="gender"
              className="w-5 h-5 accent-aese-800 focus:accent-aese-900"
            />
            <Label
              htmlFor="male"
              className="ml-1 text-sm font-medium"
              text="Male"
            />
          </div>
          <div className="flex items-center">
            <Input
              id="female"
              type="radio"
              value="Female"
              name="gender"
              className="w-5 h-5 accent-aese-800 focus:accent-aese-900"
            />
            <Label
              htmlFor="female"
              className="ml-1 text-sm font-medium"
              text="Female"
            />
          </div>
          <div className="flex items-center">
            <Input
              id="other"
              type="radio"
              value="Other"
              name="gender"
              className="w-5 h-5 accent-aese-800 focus:accent-aese-900"
            />
            <Label
              htmlFor="other"
              className="ml-1 text-sm font-medium"
              text="Other"
            />
          </div>
        </div>
      </div>
      <div>
        <Input
          type={type}
          className="bg-gray-800 w-full py-2 px-2 rounded-md border-t-2 border-gray-700 date-dark"
          placeholder="Birthday"
          onFocus={() => setType("date")}
          min="1950-01-01"
          max="2010-01-31"
          onKeyDown={(e) => {
            e.preventDefault();
            return false;
          }}
        />
      </div>
      <Button
        className="w-full py-2 my-6 bg-aese-900 hover:bg-aese-1000 rounded-3xl font-semibold"
        onClick={(e) => {
          e.preventDefault();
        }}
        text="Create an account"
      />
    </div>
  );
};
