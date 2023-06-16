import registerImg from "../../assets/img/liquid.webp";
import { RegisterForm } from "../../components/Fragments/Auth";
import { Auth } from "../../components/Layouts";

export const Register = () => {
  return (
    <div className="relative w-full h-screen text-center text-white">
      <Auth
        authSrc={registerImg}
        authAlt="registerImg"
        children={<RegisterForm />}
      />
    </div>
  );
};
