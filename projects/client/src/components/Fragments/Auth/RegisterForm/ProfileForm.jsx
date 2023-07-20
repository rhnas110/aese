import { Button } from "../../../Elements/Button";
import { Input, Label } from "../../../Elements/Input";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useInput } from "../../../../hooks/useInput";
import axios from "../../../../config/axios";
import { profileFormValidator } from "../../../../utils/validator";
import { toastError, toastSuccess } from "../../../../utils/toast";

export const ProfileForm = ({ userInformation }) => {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("text");
  const nickname = useInput("");
  const gender = useInput("");
  const birthDate = useInput("");
  const navigate = useNavigate();

  const profileInformation = {
    nickname: nickname.value,
    gender: gender.value,
    birthDate: birthDate.value,
  };

  const userData = {
    ...userInformation,
    ...profileInformation,
  };

  const onRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const check = profileFormValidator(profileInformation);
      if (!check) {
        const response = await (
          await axios.post("/auth/register", { ...userData })
        ).data;

        toastSuccess(response?.message);
        return setTimeout(() => navigate("/login"), 1500);
      } else setTimeout(() => setLoading(false), 1000);
    } catch (error) {
      console.log(error);
      toastError("Register Failed");
      setTimeout(() => setLoading(false), 1000);
    }
  };
  return (
    <>
      <div>
        <div className="relative mb-4">
          <Input
            type="text"
            id="nickname"
            placeholder=" "
            className="block rounded-md px-2.5 pb-2 pt-4 w-full text-sm text-white bg-gray-800 border-0 border-b-2 border-gray-700 appearance-none focus:border-aese-900 focus:outline-none focus:ring-0 peer"
            name="nickname"
            {...nickname}
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
                onChange={(e) => gender.onChange(e)}
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
                onChange={(e) => gender.onChange(e)}
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
                onChange={(e) => gender.onChange(e)}
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
            {...birthDate}
          />
        </div>
        <Button
          className={`w-full py-2 my-6 bg-aese-900 hover:bg-aese-1000 rounded-3xl font-semibold ${
            loading && "cursor-not-allowed"
          }`}
          onClick={(e) => {
            onRegister(e);
          }}
          text="Create an account"
          loading={loading}
          disabled={loading}
        />
      </div>
    </>
  );
};
