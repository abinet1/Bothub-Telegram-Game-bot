import React from "react";
import { CloseIcon } from "../../icons";
import { SmallActionButton } from "../button";
interface IInPageModalProps {
  onClose: () => void;
  size?: "sm" | "md" | "lg";
  header?: boolean;
  body?: React.ReactNode;
  customAction?: React.ReactNode;
  customStyle?: React.CSSProperties;
}

export const InPageModal: React.FC<IInPageModalProps> = (props) => {
  const { onClose, size = "sm", header=false, customAction, customStyle={}, body} = props;
  return (
    <div className="relative">
      <div
        className="
            border-0  
            shadow-lg 
            relative 
            flex 
            flex-col 
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
            backgroundImage: 'linear-gradient(to bottom, #010D1C, #220039)',
            ...customStyle
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
        {body?
          body:
          <div className="py-3 flex flex-col text-center gap-3">
            <p className={`text-white font-bold text-md`}>
              If you skip the tutorial now you will lose the reward
            </p>
            <p className={`text-white text-sm`}>
              Skip tutorial?
            </p>
          </div>
        }
        {customAction?
          customAction:
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
        }
      </div>
    </div>
  );
};
