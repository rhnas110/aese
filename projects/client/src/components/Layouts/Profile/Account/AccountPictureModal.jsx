import { useState } from "react";

import { MyModal } from "../../../Elements/Modal";
import { Button } from "../../../Elements/Button";
import { Paragraph } from "../../../Elements/Paragraph";

import { axiosPrivate } from "../../../../config/axios";
import { minimize } from "../../../../utils/string";
import {
  toastError,
  toastSuccess,
  toastWarning,
} from "../../../../utils/toast";

const styles = {
  dropContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "175px",
    borderRadius: "10px",
    border: "2px dashed #555",
    color: "#444",
    cursor: "pointer",
  },
};

export const AccountPictureModal = ({ modalIsOpen, closeModal }) => {
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSelectPicture = (e) => {
    setPicture(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      setLoading(true);
      if (!picture) {
        setLoading(false);
        return toastWarning("Select Picture First");
      }
      if (picture.size > 1024000) {
        setLoading(false);
        return toastWarning("Picture Size Too Large, maximum 1MB.");
      }
      const data = new FormData();
      data.append("picture", picture);

      const response = (
        await axiosPrivate.patch("/profile_picture", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
      ).data;
      if (response?.success) {
        toastSuccess(response?.message);
        setTimeout(() => {
          setPicture("");
          window.location.reload();
          setLoading(false);
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      toastError(error?.response?.data);
      setLoading(false);
    }
  };
  return (
    <MyModal
      isOpen={modalIsOpen}
      isClose={() => {
        closeModal();
        setPicture("");
      }}
      header="Edit Picture"
    >
      <div className="relative">
        <form encType="multipart/form-data">
          <label htmlFor="picture" style={styles.dropContainer}>
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              name="picture"
              id="picture"
              onChange={(e) => handleSelectPicture(e)}
              hidden={picture ? true : false}
              className="w-20 sm:w-full lg:w-auto"
            />
            {picture ? (
              <div hidden={picture ? false : true} mt={"2"}>
                <img
                  alt="profile_picture"
                  src={URL.createObjectURL(picture)}
                  className="h-[125px] m-auto aspect-auto"
                />

                <Paragraph
                  text={picture ? minimize(picture?.name, 33) : ""}
                  className="px-2"
                />
              </div>
            ) : null}
          </label>
        </form>
        <div className="flex gap-4 text-white">
          <Button
            className={`w-full py-2 my-6 bg-red-600 hover:bg-red-700 rounded-3xl font-semibold`}
            onClick={() => {
              closeModal();
              setPicture("");
            }}
            text="Cancel"
          />
          <Button
            className={`w-full py-2 my-6 bg-aese-900 hover:bg-aese-1000 rounded-3xl font-semibold ${
              loading && "cursor-not-allowed"
            }`}
            onClick={() => handleUpload()}
            text="Save"
            loading={loading}
            disabled={loading}
          />
        </div>
      </div>
    </MyModal>
  );
};
