import React from "react";
import { InPageModal } from "./";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg";
  header?: boolean;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, size = "sm", header=false} = props;
  return (
    <>
      {isOpen ? (
        <>
          <div
            className="
                justify-center 
                items-center 
                flex 
                overflow-x-hidden 
                overflow-y-auto 
                fixed 
                inset-0 z-50 
                outline-none 
                focus:outline-none
                h-screen
                w-screen
            "
          >
            <InPageModal onClose={onClose} size={size} header={header}/>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-backgroundshade-700"></div>
        </>
      ) : null}
    </>
  );
};
