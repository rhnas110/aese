import cosmos from "../../../assets/img/cosmos.webp";
import { ResetPasswordForm } from "../../../components/Fragments/Auth/ResetPasswordForm";

export const ResetPassword = () => {
  return (
    <div className="relative w-full h-screen text-center text-white">
      <img
        className="absolute w-full h-full object-cover -z-10 brightness-[.8]"
        src={cosmos}
        alt="cosmos"
        loading="lazy"
      />
      <div className="flex justify-center items-center h-full">
        <div className="sm:max-w-[480px] max-w-[380px] w-full mx-auto">
          <div className="h-[4.5rem] bg-zinc-800/60 rounded-t-lg flex items-center justify-center font-semibold">
            <h1>Reset password</h1>
          </div>
          <div className="bg-slate-200/40 rounded-b-lg pt-6 px-3 sm:px-12 text-black">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};
