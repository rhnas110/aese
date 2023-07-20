import { useLocation, useNavigate } from "react-router-dom";

import { toastInfo } from "../../../utils/toast";
import { sideProfile } from "../../../data/profile";

export const SideProfile = ({ nickname }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const profile = sideProfile({ nickname });

  return (
    <div className="rounded-lg bg-gray-100 overflow-hidden h-fit hidden md:block">
      {profile.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex items-center px-3 py-4 gap-2 hover:bg-gray-300 cursor-pointer ${
              index === profile.length - 1 ? "" : "border-b-2 border-b-gray-200"
            } ${location?.pathname === item.path ? "bg-gray-300" : ""}`}
            onClick={() => {
              if (item?.type) {
                navigate(item.path);
              } else {
                toastInfo("This feature is not available yet");
              }
            }}
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        );
      })}
    </div>
  );
};
