import { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { InfoBox } from "../../../Elements/Box";
import { Button } from "../../../Elements/Button";
import { Label } from "../../../Elements/Input";

import { SendCodeForm } from "./SendCodeForm";
import { VerifyCodeForm } from "./VerifyCodeForm";
import { ShowPasswordContext } from "../../../../context/ShowPassword";
import { PasswordConfirmValid } from "../../../../utils/validator/yup";
import axios from "../../../../config/axios";
import { toastError, toastSuccess } from "../../../../utils/toast";

export const ResetPasswordForm = () => {
  const [indexForm, setIndexForm] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const { showPassword, handleShowPassword } = useContext(ShowPasswordContext);

  function handleIndexForm(value) {
    setIndexForm(value);
  }
  function handleEmail(value) {
    setEmail(value);
  }

  const onResetPassword = async (values) => {
    try {
      setLoading(true);
      const data = {
        email,
        code_v1: otp,
        password: values?.newpassword,
        confirmPassword: values?.confirmpassword,
      };
      const response = (await axios.post("/auth/resetpassword", data)).data;
      if (response?.success) {
        toastSuccess(response?.message);
        setTimeout(() => window.location.replace("/login"), 1500);
      }
    } catch (error) {
      console.log(error);
      toastError(error?.response?.data);
      setLoading(false);
    }
  };
  return (
    <div>
      {indexForm === 1 ? (
        <SendCodeForm
          handleIndexForm={handleIndexForm}
          handleEmail={handleEmail}
        />
      ) : indexForm === 2 ? (
        <VerifyCodeForm
          handleIndexForm={handleIndexForm}
          email={email}
          otp={otp}
          setOtp={setOtp}
        />
      ) : indexForm === 3 ? (
        <Formik
          initialValues={{
            newpassword: "",
            confirmpassword: "",
          }}
          validationSchema={PasswordConfirmValid}
          onSubmit={(value) => {
            onResetPassword(value);
          }}
        >
          {() => {
            return (
              <Form>
                <p className="mb-4 text-left">
                  Set a secure password that you're not using on other websites.
                </p>
                {/* <InfoBox text="If you reset your password, you will be automatically logged out of all devices." /> */}
                <div className="relative mb-2">
                  <Field
                    type={!showPassword ? "password" : "text"}
                    id="newpassword"
                    placeholder=" "
                    className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-[#222] border-0 border-b-2 border-zinc-600 appearance-none focus:border-aese-900 focus:outline-none focus:ring-0 peer"
                    name="newpassword"
                  />
                  <Label
                    htmlFor="newpassword"
                    text="New Password"
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
                    name="newpassword"
                    component="div"
                    className="text-aese-800 text-left mb-2"
                  />
                </div>
                <div className="relative">
                  <Field
                    type={!showPassword ? "password" : "text"}
                    id="confirmpassword"
                    placeholder=" "
                    className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-[#222] border-0 border-b-2 border-zinc-600 appearance-none focus:border-aese-900 focus:outline-none focus:ring-0 peer"
                    name="confirmpassword"
                  />
                  <Label
                    htmlFor="confirmpassword"
                    text="Confirm Password"
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
                    name="confirmpassword"
                    component="div"
                    className="text-aese-800 text-left mb-2"
                  />
                </div>
                <div className="pb-12">
                  <Button
                    className={`w-full py-2 mt-8 bg-aese-900 hover:bg-aese-1000 rounded-3xl font-semibold text-white ${
                      loading && "cursor-not-allowed"
                    }`}
                    text="Reset"
                    type="submit"
                    loading={loading}
                    disabled={loading}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      ) : null}
    </div>
  );
};
