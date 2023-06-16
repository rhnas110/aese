import { Heading } from "../../components/Elements/Heading";
import { BackButton } from "../../components/Elements/Button";

export const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center text-white bg-zinc-800/50">
      <Heading
        className="text-9xl font-extrabold tracking-widest drop-shadow-[4px_4px_2px_rgba(134,93,255,0.55)] select-none hover:drop-shadow-[0_30px_35px_rgba(134,93,255,0.55)] transition-all duration-200 ease-in-out"
        text="404"
      />
      <div className="bg-aese-900 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <BackButton />
    </main>
  );
};
