import { BsInfoCircle } from "react-icons/bs";

export const InfoBox = ({ text }) => {
  return (
    <div className="rounded-md bg-gray-400/40 flex p-2 gap-1 mb-8">
      <BsInfoCircle size={20} />
      <p className="text-sm text-left">{text}</p>
    </div>
  );
};
