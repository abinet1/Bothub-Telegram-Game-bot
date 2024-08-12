import React from 'react';
interface IBottomNavProps {
    tabs:{icon: React.ReactNode, label: string|React.ReactNode, onClickAction: () => void}[], 
    activeTab: number,
    customStyle?: React.CSSProperties

}

export const BottomNav = (props: IBottomNavProps) => {
    const { tabs, activeTab=1, customStyle={} } = props;

    return (
        <div 
            className="
                flex 
                items-center 
                justify-center 
                gap-5 
                w-full 
                px-5 
                h-[87px] 
                bg-gradient-to-b 
                from-dark 
                to-backgroundshade-800
                text-white
                text-sm
                font-bold
            "
            style={customStyle}
        >
            {tabs && tabs.map((item, index)=>(
                <div
                    onClick={item.onClickAction}
                    className={`flex flex-col items-center justify-center w-[74px] h-[74px] py-2 ${activeTab===index && 'rounded-md border-[3px] border-background text-secondary'}`}
                >
                    {item.icon}
                    {item.label}
                </div>
                )
            )}
        </div>
    )
}
