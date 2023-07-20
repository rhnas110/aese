import { Heading } from "../Heading";

import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";

import { getWidth } from "../../../utils";

Modal.setAppElement("#root");

const width = getWidth();
const centerModal = {
  content: {
    width: width < 640 ? "90%" : width < 768 ? "65%" : "40%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

export const MyModal = ({ isOpen, isClose, header, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      style={centerModal}
      contentLabel="Modal"
    >
      <ModalHeader closeModal={isClose} text={header} />
      <ModalBody body={children} />
    </Modal>
  );
};

const ModalHeader = ({ closeModal, text }) => {
  return (
    <div className="flex items-center justify-between px-2 mb-6">
      <Heading text={text} size={1} className="font-medium text-2xl mx-auto" />
      <i
        onClick={closeModal}
        className="cursor-pointer hover:bg-gray-100 p-1 rounded"
      >
        <AiOutlineClose size={20} />
      </i>
    </div>
  );
};

const ModalBody = ({ body }) => {
  return <div className="px-2">{body}</div>;
};
