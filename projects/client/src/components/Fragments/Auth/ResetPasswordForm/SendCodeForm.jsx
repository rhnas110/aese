import { Button } from "../../../Elements/Button";
import { Label } from "../../../Elements/Input";

import { Formik, Form, Field, ErrorMessage } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

import axios from "../../../../config/axios";
import { EmailValid } from "../../../../utils/validator";
import { toastError, toastSuccess } from "../../../../utils/toast";

export const SendCodeForm = ({ handleIndexForm, handleEmail }) => {
  const [captchaToken, setCaptchaToken] = useState("");

  const onSendCode = async (values) => {
    try {
      if (!captchaToken) {
        return toastError("Invalid Captcha");
      } else {
        const email = values?.email;
        const response = (
          await axios.post("/auth/coderesetpassword", {
            email,
            token: captchaToken,
          })
        ).data;
        if (response?.success) {
          toastSuccess(response?.message);
          handleEmail(email);
          handleIndexForm(2);
        }
      }
    } catch (error) {
      console.log(error);
      toastError(error?.response?.data);
    }
  };

  function onChange(value) {
    setCaptchaToken(value);
  }

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={EmailValid}
      onSubmit={(value) => {
        onSendCode(value);
      }}
    >
      {() => {
        return (
          <Form>
            <p className="mb-4 text-left">
              Enter your registered email address.
            </p>
            <div className="relative mb-6">
              <Field
                type="email"
                id="email"
                placeholder=" "
                className="block rounded-md px-2.5 pb-2 pt-4 w-full text-sm text-white bg-[#222] border-0 border-b-2 border-zinc-600 appearance-none focus:border-aese-900 focus:outline-none focus:ring-0 peer"
                name="email"
              />
              <Label
                htmlFor="email"
                text="Email"
                className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3.5 z-10 origin-[0] left-2.5 peer-focus:text-aese-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-4"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-aese-800 text-left mb-2"
              />
            </div>
            <div>
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_CAPTCHA_SITE}
                onChange={onChange}
                onExpired={() => setCaptchaToken("")}
                theme="dark"
              />
            </div>
            <div className="pb-12">
              <Button
                className={`w-full py-2 mt-6 bg-aese-900 hover:bg-aese-1000 rounded-3xl font-semibold text-white ${
                  !captchaToken && "cursor-not-allowed"
                }`}
                text="Send"
                type="submit"
                disabled={!captchaToken}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
