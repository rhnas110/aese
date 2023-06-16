import { HiArrowNarrowLeft } from "react-icons/hi";

export const HomeFormButton = () => {
  return (
    <a href="/" className="text-aese-900/75 hover:text-aese-900">
      <HiArrowNarrowLeft size={30} />
    </a>
  );
};

export const BackFormButton = ({ ...restProps }) => {
  return (
    <button className="text-aese-900/75 hover:text-aese-900" {...restProps}>
      <HiArrowNarrowLeft size={30} />
    </button>
  );
};
