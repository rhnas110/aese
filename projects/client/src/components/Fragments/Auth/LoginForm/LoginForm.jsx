import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Paragraph } from "../../../Elements/Paragraph";
import { Heading } from "../../../Elements/Heading";
import { Label } from "../../../Elements/Input";
import { Button, HomeFormButton } from "../../../Elements/Button";
import { AuthButton } from "../AuthButton";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useState } from "react";

import { ShowPasswordContext } from "../../../../context/ShowPassword";
import axios from "../../../../config/axios";

import { FormValid as LoginValid } from "../../../../utils/validator";
import { toastError, toastSuccess } from "../../../../utils/toast";

export const LoginForm = () => {
  const { showPassword, handleShowPassword } = useContext(ShowPasswordContext);
  const [loading, setLoading] = useState(false);

  const onLogin = async (values) => {
    try {
      setLoading(true);
      const response = (await axios.post("/auth/login", values)).data;
      localStorage.setItem("auth_token", response?.token);

      toastSuccess(response?.message);
      return setTimeout(() => window.location.replace("/"), 1500);
    } catch (error) {
      toastError(error?.response?.data);
      setLoading(false);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginValid}
      onSubmit={(value) => {
        onLogin(value);
      }}
    >
      {() => {
        return (
          <Form className="glassmorphism py-8 px-10 rounded-lg">
            <div className="pb-8">
              <Heading
                className="text-4xl font-bold pt-2 text-aese-900 select-none"
                text="aese"
                size={2}
              />
              <Heading
                className="-mt-2 text-aese-900/75"
                text="your aese your taste"
              />
            </div>
            <div>
              <div className="relative mb-2">
                <Field
                  type="email"
                  id="email"
                  placeholder=" "
                  className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-gray-800 border-0 border-b-2 border-gray-700 appearance-none focus:border-aese-900 focus:outline-none focus:ring-0 peer"
                  name="email"
                />
                <Label
                  htmlFor="email"
                  text="Email address"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-aese-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-4"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-aese-800 text-left mb-2"
                />
              </div>
              <div className="relative">
                <Field
                  type={!showPassword ? "password" : "text"}
                  id="password"
                  placeholder=" "
                  className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-gray-800 border-0 border-b-2 border-gray-700 appearance-none focus:border-aese-900 focus:outline-none focus:ring-0 peer"
                  name="password"
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
                  {!showPassword ? (
                    <FaEye size={25} />
                  ) : (
                    <FaEyeSlash size={25} />
                  )}
                </i>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-aese-800 text-left"
                />
              </div>
              <Button
                className={`w-full py-2 mt-6 bg-aese-900 hover:bg-aese-1000 rounded-3xl font-semibold ${
                  loading && "cursor-not-allowed"
                }`}
                text="Login"
                type="submit"
                loading={loading}
                disabled={loading}
              />
            </div>

            <Paragraph
              text={
                <a
                  href="/password/reset"
                  className="text-gray-400 hover:font-semibold"
                >
                  Forgot password?
                </a>
              }
              className="mt-3"
            />

            <div className="flex flex-col my-10">
              <AuthButton />
            </div>
            <hr className="border-gray-500 rounded-lg" />
            <Paragraph
              className="mt-2 text-sm"
              text={[
                "Don't have an account?",
                <a
                  href="/register"
                  key={"a"}
                  className="text-gray-400 hover:border-b-[1px] border-gray-400"
                >
                  {" "}
                  Sign up now
                </a>,
              ]}
            />
            <div className="absolute top-3 left-3 hover:scale-110" tabIndex={1}>
              <HomeFormButton />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
