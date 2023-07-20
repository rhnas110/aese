import { useState } from "react";

import { MyModal } from "../../../Elements/Modal";
import { Input, Label } from "../../../Elements/Input";
import { Button } from "../../../Elements/Button";

import { useInput } from "../../../../hooks/useInput";
import { profileFormValidator } from "../../../../utils/validator";
import { axiosPrivate } from "../../../../config/axios";
import { toastError, toastSuccess } from "../../../../utils/toast";

export const AccountProfileModal = ({ modalIsOpen, closeModal, profile }) => {
  const [loading, setLoading] = useState(false);

  const nickname = useInput(profile?.nickname);
  const gender = useInput(profile?.gender);
  const birthDate = useInput(profile?.birthDate);

  const editedProfile = {
    nickname: nickname.value,
    gender: gender.value,
    birthDate: birthDate.value,
  };
  const defaultProfile = {
    nickname: profile.nickname,
    gender: profile.gender,
    birthDate: profile.birthDate,
  };
  const noChanges =
    JSON.stringify(editedProfile) === JSON.stringify(defaultProfile);

  console.log(noChanges);

  const onEditProfile = async () => {
    try {
      setLoading(true);
      const check = profileFormValidator(editedProfile);

      if (!check) {
        const response = await (
          await axiosPrivate.patch("/profile", { ...editedProfile })
        ).data;
        if (response?.success) {
          toastSuccess(response?.message);
          setTimeout(() => {
            window.location.reload();
            setLoading(false);
          }, 1500);
        }
      } else setTimeout(() => setLoading(false), 1000);
    } catch (error) {
      console.log(error);
      toastError(error?.response?.data);
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <MyModal isOpen={modalIsOpen} isClose={closeModal} header="Edit Profile">
      <div className="lg:w-2/3 mx-auto">
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
        <div className="flex justify-around border-2 bg-gray-800 rounded-md py-2.5 text-white">
          <div className="flex items-center">
            <Input
              id="male"
              type="radio"
              value="Male"
              name="gender"
              className="w-5 h-5 accent-aese-800 focus:accent-aese-900"
              onChange={(e) => gender.onChange(e)}
              defaultChecked={editedProfile?.gender === "Male"}
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
              defaultChecked={editedProfile?.gender === "Female"}
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
              defaultChecked={editedProfile?.gender === "Other"}
            />
            <Label
              htmlFor="other"
              className="ml-1 text-sm font-medium"
              text="Other"
            />
          </div>
        </div>
        <div className="mt-4">
          <Input
            type="date"
            className="bg-gray-800 w-full py-2 px-2 rounded-md border-t-2 border-gray-700 date-dark"
            placeholder="Birthday"
            min="1950-01-01"
            max="2010-01-31"
            {...birthDate}
          />
        </div>
        <div className="flex gap-4 text-white">
          <Button
            className={`w-full py-2 my-6 bg-red-600 hover:bg-red-700 rounded-3xl font-semibold`}
            onClick={closeModal}
            text="Cancel"
          />
          <Button
            className={`w-full py-2 my-6 bg-aese-900 hover:bg-aese-1000 rounded-3xl font-semibold ${
              (loading || noChanges) && "cursor-not-allowed line-through"
            }`}
            onClick={() => {
              onEditProfile();
            }}
            text="Save"
            loading={loading}
            disabled={loading || noChanges}
          />
        </div>
      </div>
    </MyModal>
  );
};
