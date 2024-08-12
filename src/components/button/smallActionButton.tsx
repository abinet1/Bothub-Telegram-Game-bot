interface ISmallActionButtonProps {
    variant?: 'success'|'danger'|'default',  
    placeholder: string,
    onClick?: () => void
    style?: React.CSSProperties
}

const SmallActionButton = (props: ISmallActionButtonProps) => {
    const { variant='danger', placeholder, onClick, style } = props;

    return (
        <button 
            className={`text-white font-bold  w-[70px] h-8 rounded-md  
                ${variant=='success'&&
                `
                    border-[3px]
                    border-solid
                    border-[#54FF38]
                    text-sm
                `
                ||variant=='danger'&&
                    `border-[3px]
                    border-solid
                    border-[#FF3838]
                    text-sm
                `
                ||variant=='default'&&
                    `
                    border-[3px]
                    border-solid
                    bg-background
                    border-background
                    Click:text-green
                    w-[125px]
                    h-[50px]
                    `
                }`}
            style={{
                background:`${ 
                    variant==='success'&&
                        'linear-gradient(to bottom, #011C07, #003902)'
                    ||variant==='danger'&&
                        'linear-gradient(to bottom, #1C0101, #390000)'
                }`,
                ...style

            }}
            onClick={onClick}
        >
            {placeholder}
        </button>
    )
}

export default SmallActionButton;
