import { HomeFormButton, BackFormButton } from "./FormButton";

export const Button = ({ type, className, text, ...restProps }) => {
  return (
    <button type={type} className={className} {...restProps}>
      {text}
    </button>
  );
};

export const BackButton = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="mt-5 relative inline-block text-sm font-medium group active:text-zinc-800 focus:outline-none focus:ring"
    >
      <span className="absolute rounded-lg inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-aese-1200 group-hover:translate-y-0 group-hover:translate-x-0"></span>
      <span className="relative block px-8 py-3 bg-aese-900 border border-current rounded-lg border-zinc-800">
        Back
      </span>
    </button>
  );
};

export { HomeFormButton, BackFormButton };
