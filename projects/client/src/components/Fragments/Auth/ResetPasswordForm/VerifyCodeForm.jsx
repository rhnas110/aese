import OtpInput from "react-otp-input";

import { Button } from "../../../Elements/Button";
import { censor } from "../../../../utils";
import { toastError, toastSuccess } from "../../../../utils/toast";
import axios from "../../../../config/axios";
import { InfoBox } from "../../../Elements/Box";

export const VerifyCodeForm = ({ email, handleIndexForm, otp, setOtp }) => {
  const onVerifyCode = async (e) => {
    e.preventDefault();
    try {
      const length = otp?.length;
      if (length !== 6) {
        return toastError("Field can't empty");
      } else {
        const response = (
          await axios.post("/auth/verifyresetpassword", {
            email,
            code_v1: otp,
          })
        ).data;
        if (response?.success) {
          toastSuccess(response?.message);
          handleIndexForm(3);
        }
      }
    } catch (error) {
      console.log(error);
      toastError(error?.response?.data);
    }
  };
  return (
    <>
      <p className="mb-4 text-left">
        Your verification code has been sent to{" "}
        <span className="font-bold">{censor(email, 6)}.</span> Please enter the
        code below.
      </p>
      <InfoBox
        text="If you didn't receive the e-mail, please check all your e-mails
          including the spam folder."
      />
      <div className="mb-4 flex items-center justify-center p-4">
        <OtpInput
          containerStyle={{
            transform: "scale(2)",
          }}
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span> - </span>}
          renderInput={(props) => (
            <input {...props} className="rounded sm:mx-0.5 mx-[1px]" />
          )}
        />
      </div>
      <div className="pb-12">
        <Button
          className={`w-full py-2 mt-6 bg-aese-900 hover:bg-aese-1000 rounded-3xl font-semibold text-white ${
            otp?.length === 6 ? false : true && "cursor-not-allowed"
          }`}
          text="Next"
          onClick={(e) => onVerifyCode(e)}
          disabled={otp?.length === 6 ? false : true}
        />
      </div>
    </>
  );
};
