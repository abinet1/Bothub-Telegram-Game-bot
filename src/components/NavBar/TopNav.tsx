import React from 'react';
interface ITopNavBarProps {
    onManuAction:() => void, 
    onCancelAction: () => void,
    customStyle?: React.CSSProperties

}

export const TopNavBar = (props: ITopNavBarProps) => {
    const { onCancelAction, onManuAction, customStyle={} } = props;

    return (
        <div 
            className="
                flex 
                items-center 
                justify-between 
                gap-5 
                w-full 
                px-5 
                h-[63px] 
                text-white
                text-sm
                text-center
                font-bold
                bg-black
            "
            style={customStyle}
        >
            <text onClick={onCancelAction}>Cancel</text>
            <div className='flex flex-col '>
                <text>Lucidia Alliance</text>
                <text className='text-gray-600 font-normal'>bot</text>
            </div>
            <div onClick={onManuAction} className='flex items-center justify-center gap-[2px] rounded-full border-2 w-[27px] h-[27px]'>
                <div className='rounded-full bg-white h-1 w-1'></div>
                <div className='rounded-full bg-white h-1 w-1'></div>
                <div className='rounded-full bg-white h-1 w-1'></div>
            </div>
        </div>
    )
}
