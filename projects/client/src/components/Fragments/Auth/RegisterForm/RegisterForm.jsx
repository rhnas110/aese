import { Paragraph } from "../../../Elements/Paragraph";
import { Heading } from "../../../Elements/Heading";
import { BackFormButton, HomeFormButton } from "../Button";

import { CheckUserForm } from "./CheckUserForm";
import { ProfileForm } from "./ProfileForm";

import { useState } from "react";
import { Formik, Form } from "formik";
import axios from "../../../../config/axios";

import { FormValid as RegisterValid } from "../../../../utils/validator";
import { toastError } from "../../../../utils/toast";

export const RegisterForm = () => {
  const [userDuplicate, setUserDuplicate] = useState(false);
  const [userInformation, setUserInformation] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function handleUserDuplicate() {
    setUserDuplicate(true);
  }

  const checkUser = async (values) => {
    try {
      setLoading(true);
      const { email, password } = values;
      const response = await (
        await axios.post("/auth/registered", { email })
      ).data;
      if (!response?.isRegistered) {
        handleUserDuplicate();
        setUserInformation({ email, password });
      }
      setTimeout(() => setLoading(false), 1000);
    } catch (error) {
      toastError(error?.response?.data);
      setTimeout(() => setLoading(false), 1000);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={RegisterValid}
      onSubmit={(value) => {
        checkUser(value);
      }}
    >
      {() => {
        return (
          <Form className="glassmorphism py-8 px-10 rounded-lg">
            <div className="pb-8">
              <Heading
                className="text-4xl font-bold pb-4 pt-2 text-aese-900 select-none"
                text="aese"
                size={2}
              />
              <Heading
                className="text-xl font-medium"
                text="Create an account"
              />
            </div>

            {userDuplicate ? (
              <ProfileForm userInformation={userInformation} />
            ) : (
              <CheckUserForm loading={loading} />
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
          </Form>
        );
      }}
    </Formik>
  );
};
