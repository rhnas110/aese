import unknown from "../../../../assets/img/profile.jpg";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { VscUnverified } from "react-icons/vsc";
import { BiEditAlt } from "react-icons/bi";
import { Tooltip } from "react-tooltip";

import { Paragraph } from "../../../Elements/Paragraph";
import { censor, minimize } from "../../../../utils";

import { AccountProfileModal } from "./AccountProfileModal";
import { AccountPictureModal } from "./AccountPictureModal";

export const AccountProfile = ({ userInformation }) => {
  const [modalProfile, setModalProfile] = useState(false);
  const [modalPicture, setModalPicture] = useState(false);
  const [hideEmail, setHideEmail] = useState(true);
  function handleHideEmail() {
    setHideEmail(!hideEmail);
  }

  function openModalProfile() {
    setModalProfile(true);
  }

  function closeModalProfile() {
    setModalProfile(false);
  }

  function openModalPicture() {
    setModalPicture(true);
  }

  function closeModalPicture() {
    setModalPicture(false);
  }

  const profile = userInformation?.profile;
  return (
    <>
      <div className="md:flex items-center gap-4 mb-8 px-2 text-center md:text-start">
        <div className="md:w-36 w-32 mb-2 m-auto md:m-0 group relative">
          <div className="rounded-full overflow-hidden">
            <img
              src={
                profile?.picture
                  ? process.env.REACT_APP_SERVER_BASE_URL + profile?.picture
                  : unknown
              }
              alt="pp"
              className="aspect-square w-full h-full group-hover:scale-[1.15] duration-500"
            />
          </div>
          <i
            onClick={openModalPicture}
            className="active:scale-110 md:active:scale-100 md:active:w-full md:active:h-full md:active:top-0 md:active:left-0 absolute -top-1 right-0 w-10 h-10 border-b md:border-0 flex text-white md:top-11 md:left-11 md:hidden md:w-14 md:h-14 cursor-pointer md:group-hover:flex items-center justify-center rounded-full bg-black/50"
          >
            <BiEditAlt size={20} className="md:rotate-0 flipY" />
          </i>
        </div>
        <AccountPictureModal
          closeModal={closeModalPicture}
          modalIsOpen={modalPicture}
        />
        <div>
          <div className="flex gap-2 justify-center md:justify-normal items-center">
            <Paragraph
              text={minimize(profile?.nickname, 10)}
              className="font-bold text-xl"
            />
            <i
              data-tooltip-id="edit-badge"
              className="cursor-pointer"
              onClick={openModalProfile}
            >
              <BiEditAlt size={20} />
              <Tooltip
                id="edit-badge"
                content="Edit Profile"
                place={"right"}
                style={{
                  padding: "2px 8px",
                }}
              />
            </i>
          </div>
          <AccountProfileModal
            modalIsOpen={modalProfile}
            closeModal={closeModalProfile}
            profile={profile}
          />
          <div className="flex gap-2 justify-center md:justify-normal items-center">
            <Paragraph
              text={
                hideEmail
                  ? censor(userInformation?.email, 3)
                  : userInformation?.email
              }
              className="text-slate-400"
            />
            {userInformation?.verified ? (
              <i
                onClick={handleHideEmail}
                className="text-gray-600 cursor-pointer"
              >
                {hideEmail ? <FaEye size={25} /> : <FaEyeSlash size={25} />}
              </i>
            ) : (
              <i data-tooltip-id="verify-badge">
                <VscUnverified
                  size={25}
                  className="text-red-500 cursor-pointer"
                />
                <Tooltip
                  id="verify-badge"
                  content="Unverified"
                  place={"right"}
                  style={{
                    backgroundColor: "rgba(239, 68, 68,1)",
                    padding: "2px 8px",
                  }}
                />
              </i>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-4 px-2">
          <Paragraph text="Nickname" />
          <Paragraph
            text={minimize(profile?.nickname, 10)}
            className="text-gray-400"
          />
        </div>
        <div className="flex justify-between mb-4 px-2">
          <Paragraph text="Gender" />
          <Paragraph text={profile?.gender} className="text-gray-400" />
        </div>
        <div className="flex justify-between mb-4 px-2">
          <Paragraph text="Birthdate" />
          <Paragraph text={profile?.birthDate} className="text-gray-400" />
        </div>
      </div>
    </>
  );
};
