import React from "react";

interface IInputFieldProps {
    variant?: 'primary'|'secondary'|'custom', 
    size?: 'sm'|'md'|'lg', 
    palceholder?: string,
    type?: React.HTMLInputTypeAttribute,
    leftIcon?: React.ReactNode,
    rightIcon?: React.ReactNode,
}

const InputField = (props: IInputFieldProps) => {
    const {
        palceholder='Enter text',
        type='text',
        leftIcon,
        rightIcon,
    } = props;

    return (
        <div className="relative flex w-full items-center">
            {leftIcon?
                <span className="z-10 h-full leading-normal font-normal absolute text-center absolute rounded text-lg items-center justify-center py-3 pl-2">
                    {leftIcon}
                </span>:null
            }
            <input type={type} placeholder={palceholder} className={`border-2 border-backgroundshade-700 border-solid text-white bg-darkshade-800 rounded-[12px] text-base w-full h-[50px] bg-darkshade-800 ${leftIcon?'pl-10': 'pl-2'} ${rightIcon?'pr-10':'pr-2'}`}/>
            {rightIcon && 
                <span className="right-2 z-10 h-full leading-normal font-normal absolute text-center absolute rounded text-lg items-center  justify-center py-3 pl-2">
                    {rightIcon}
                </span>
            }
        </div>
    )
}

export default InputField;
