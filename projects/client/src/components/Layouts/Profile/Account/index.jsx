import { MdNavigateNext } from "react-icons/md";

import { Paragraph } from "../../../Elements/Paragraph";

import { censor } from "../../../../utils";
import { toastInfo } from "../../../../utils/toast";

import { AccountProfile } from "./AccountProfile";

export const Account = ({ userInformation }) => {
  return (
    <div className="px-2 overflow-y-auto scroll py-2">
      <AccountProfile userInformation={userInformation} />
      <hr className="border rounded mb-4" />
      <div>
        <Paragraph
          text="Account security"
          className="font-bold text-lg mb-4 px-2"
        />
        <div
          className="flex justify-between mb-3 px-2 rounded-md hover:py-2 duration-500 hover:bg-gray-200 cursor-pointer"
          onClick={() => toastInfo("This feature is not available yet")}
        >
          <Paragraph text="Email" />
          <div className="flex items-center text-gray-400">
            <Paragraph text={censor(userInformation?.email, 3)} />
            <i>
              <MdNavigateNext size={25} />
            </i>
          </div>
        </div>
        <div
          className="mb-4 px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer"
          onClick={() => toastInfo("This feature is not available yet")}
        >
          <div className="flex justify-between items-center">
            <Paragraph text="Password" />
            <i>
              <MdNavigateNext size={25} className="text-gray-400" />
            </i>
          </div>
          <Paragraph
            text="Don't tell your password to others."
            className="text-gray-400 text-sm"
          />
        </div>
      </div>
      <hr className="border rounded mb-4" />
      <div>
        <Paragraph text="Support" className="font-bold text-lg mb-4 px-2" />
        <div
          className="mb-4 px-2 py-1 rounded-md hover:py-2 duration-500 hover:bg-gray-200 cursor-pointer"
          onClick={() => toastInfo("This feature is not available yet")}
        >
          <div className="flex justify-between items-center">
            <Paragraph text="Log out of all devices" />
            <i>
              <MdNavigateNext size={25} className="text-gray-400" />
            </i>
          </div>
        </div>
        <div
          className="mb-4  px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 group cursor-pointer"
          onClick={() => toastInfo("This feature is not available yet")}
        >
          <div className="flex justify-between items-center">
            <Paragraph
              text="Delete my account"
              className="text-red-400 font-medium group-hover:text-red-500"
            />
            <i>
              <MdNavigateNext size={25} className="text-gray-400" />
            </i>
          </div>
          <Paragraph
            text="Permanently delete the account and remove access from all workspaces."
            className="text-gray-400 text-sm"
          />
        </div>
      </div>
    </div>
  );
};
