import colors from '../../themes/colors';
interface ISmallActionButtonProps {
    variant?: 'success'|'danger',  
    placeholder: string,
    onClick?: () => void
}

const SmallActionButton = (props: ISmallActionButtonProps) => {
    const { variant='danger', placeholder, onClick } = props;

    return (
        <button 
            className={`text-white font-bold text-sm w-[70px] h-8 rounded-md  
                ${variant=='success'?
                    `
                        border-[3px]
                        border-solid
                        border-[#54FF38]
                        `:
                        `
                        border-[3px]
                        border-solid
                        border-[#FF3838]
                        Click:text-green`
                    }`}
            style={{
                background: variant==='success'?
                    `linear-gradient(to bottom, #011C07, #003902)`:
                    `linear-gradient(to bottom, #1C0101, #390000)`
            }}
            onClick={onClick}
        >
            {placeholder}
        </button>
    )
}

export default SmallActionButton;
