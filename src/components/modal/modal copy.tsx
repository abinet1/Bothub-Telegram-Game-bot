import React from "react";
import { CloseIcon } from "../../icons";
import InputField from "../inputField";
import { Button } from "../button";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  // children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div
                className="
                    border-0  
                    shadow-lg 
                    relative 
                    flex 
                    flex-col 
                    bg-white 
                    outline-none 
                    focus:outline-none
                    p-8
                "
                style={{
                    maxWidth: '395px',
                    borderRadius: '30px',
                    width: '100%',
                    maxHeight: '626px',
                    minHeight: '391px',
                    backgroundImage: 'linear-gradient(180deg, #010D1C 0%, #220039 100%)'
                }}
              >
                <div className="flex items-start justify-between">
                    <text className={`text-white font-bold text-2xl`}>
                        user name
                    </text>
                    <button
                    className="pt-2"
                        onClick={onClose}
                    >
                        <CloseIcon width="24" height="24"/>
                    </button>
                </div>
                <div className="py-10 flex flex-col gap-10">
                    <div>
                        <p className={`text-white font-bold text-[18px]`}>
                            Do you want to change your name?
                        </p>
                        <p className={`text-[#555899] font-bold text-1xl`}>
                            Do you want to change your name?
                        </p>
                    </div>
                    <InputField />
                </div>
                <div className="flex items-center justify-end">
                  <Button placeholder="Save" size="md"/>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-backgroundshade-700"></div>
        </>
      ) : null}
    </>
  );
};
