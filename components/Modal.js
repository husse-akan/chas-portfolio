import { useState } from "react";

function Modal({ children, showModal, setShowModal }) {
  const handleClose = () => setShowModal(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black/50 z-20 transition-opacity duration-300 ${
        showModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleClose}
    >
      <div
        className="bg-white p-6 rounded-md m-auto mt-20 max-w-sm shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent background click from closing
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
