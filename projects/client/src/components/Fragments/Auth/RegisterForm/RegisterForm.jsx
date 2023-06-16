import { Paragraph } from "../../../Elements/Paragraph";
import { Heading } from "../../../Elements/Heading";
import { BackFormButton, HomeFormButton } from "../../../Elements/Button";

import { useContext, useState } from "react";
import { ShowPasswordContext } from "../../../../context/ShowPassword";
import { CheckUserForm } from "./CheckUserForm";
import { ProfileForm } from "./ProfileForm";

export const RegisterForm = () => {
  const { showPassword, handleShowPassword } = useContext(ShowPasswordContext);
  const [userDuplicate, setUserDuplicate] = useState(false);

  function handleUserDuplicate() {
    setUserDuplicate(true);
  }
  return (
    <form className="glassmorphism py-8 px-10 rounded-lg">
      <div className="pb-8">
        <Heading
          className="text-4xl font-bold pb-4 pt-2 text-aese-900 select-none"
          text="aese"
          size={2}
        />
        <Heading className="text-xl font-medium" text="Create an account" />
      </div>

      {userDuplicate ? (
        <ProfileForm />
      ) : (
        <CheckUserForm
          showPassword={showPassword}
          handleShowPassword={handleShowPassword}
          handleUserDuplicate={handleUserDuplicate}
        />
      )}

      <hr className="border-gray-500 rounded-lg" />
      <Paragraph
        className="mt-2 text-sm"
        text={[
          "Already have account?",
          <a
            href="/login"
            key={"a"}
            className="text-gray-400 hover:border-b-[1px] border-gray-400"
          >
            {" "}
            Sign in now
          </a>,
        ]}
      />
      <div className="absolute top-3 left-3 hover:scale-110" tabIndex={1}>
        {userDuplicate ? (
          <BackFormButton onClick={() => setUserDuplicate(false)} />
        ) : (
          <HomeFormButton />
        )}
      </div>
    </form>
  );
};
