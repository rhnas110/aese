import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../../Elements/Button";

export const AuthButton = () => {
  return (
    <>
      <Button
        className="relative w-full py-2 bg-inherit border-[1px] rounded-3xl font-semibold text-sm hover:shadow-l hover:bg-[rgba(1,2,3,.35)]"
        text={[
          <i className="absolute top-1.5 left-6" key="i">
            {" "}
            <FcGoogle size={22} />
          </i>,
          <span key="span">Continue with Google</span>,
        ]}
      />
      <Button
        className="relative w-full py-2 mt-2 bg-inherit border-[1px] rounded-3xl font-semibold text-sm hover:shadow-l hover:bg-[rgba(1,2,3,.35)]"
        text={[
          <i className="absolute top-1.5 left-6 text-[#1B76F2]" key="i">
            {" "}
            <BsFacebook size={22} />
          </i>,
          <span key="span">Continue with Facebook</span>,
        ]}
      />
    </>
  );
};
