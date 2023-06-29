import loginImg from "../../../assets/img/liquid.webp";
import { LoginForm } from "../../../components/Fragments/Auth";
import { Auth } from "../../../components/Layouts";

export const Login = () => {
  return (
    <div className="relative w-full h-screen text-center text-white">
      <Auth authSrc={loginImg} authAlt="loginImg" children={<LoginForm />} />
    </div>
  );
};
