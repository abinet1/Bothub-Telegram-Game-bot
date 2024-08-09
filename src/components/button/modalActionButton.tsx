import colors from '../../themes/colors';

const ModalActionButton = ({variant='custom', size='sm', text='Confirm'}: {variant?: 'primary'|'secondary'|'custom', size?: 'sm'|'md'|'lg', text: string}) => {
    return (
        <button 
            style={{
                width: size==='lg' && '369px' || size==='md'&& '311px'||'285px',
                height: size==='lg' && '66px' || size==='md'&& '58px'||'49px',
                borderRadius: '5px',
                background: variant=='primary'&&
                    `linear-gradient(to right, ${colors.primary}, ${colors.dark}, ${colors.primary})`||
                    variant=='secondary'&&
                    `linear-gradient(to right, ${colors.secondary}, ${colors.dark}, ${colors.secondary})`||
                    `linear-gradient(to right, ${colors.background}, ${colors.dark}, ${colors.background})`
            }}
        >
            <text className={`text-white font-bold text-2xl 
                ${variant=='primary'&&'hover:text-primary Click:text-primary'||
                variant=='secondary'&&'hover:text-secondary Click:text-secondary'||
                'hover:text-background Click:text-background'}`}>
                {text}
            </text>
        </button>
    )
}

export default ModalActionButton;
