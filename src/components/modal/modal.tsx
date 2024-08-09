import React from "react";
import { CloseIcon } from "../../icons";
import InputField from "../inputField";
import { Button, SmallActionButton } from "../button";
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
            <div className="relative">
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
                    maxWidth: size==='sm'?'290px':'395px',
                    borderRadius: '30px',
                    width: '100%',
                    maxHeight: '626px',
                    minHeight: '200px',
                    backgroundImage: 'linear-gradient(to bottom, #010D1C, #220039)'
                }}
              >
                {header && (
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
                )}
                <div className="py-3 flex flex-col text-center gap-3">
                  <p className={`text-white font-bold text-md`}>
                    If you skip the tutorial now you will lose the reward
                  </p>
                  <p className={`text-white text-sm`}>
                    Skip tutorial?
                  </p>
                </div>
                <div className="flex justify-between ">
                  <SmallActionButton 
                    variant='success'
                    placeholder='Yes'
                    onClick={()=>{onClose()}}
                  />
                  <SmallActionButton 
                    variant='danger'
                    placeholder='No'
                    onClick={()=>{onClose()}}
                  />
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
