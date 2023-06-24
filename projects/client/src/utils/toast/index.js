import { toast } from "react-toastify";

const toastSetting = {
  position: "top-right",
  autoClose: 3500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const toastError = (message) => {
  return toast.error(message, toastSetting);
};

export const toastSuccess = (message) => {
  return toast.success(message, toastSetting);
};

export const toastInfo = (message) => {
  return toast.info(message, toastSetting);
};
