import colors from '../../themes/colors';
interface IButtonProps {
    variant?: 'primary'|'secondary'|'custom', 
    size?: 'sm'|'md'|'lg', 
    placeholder: string,
    detail?: string
    onClick?: () => void
}

const Button = (props: IButtonProps) => {
    const { variant='primary', size='md', placeholder, detail, onClick } = props;

    return (
        <button 
            style={{
                width: size==='lg' && '369px' || size==='md'&& '311px'||'285px',
                height: size==='lg' && '66px' || size==='md'&& '58px'||'49px',
                borderRadius: '10px',
                background: variant=='primary'&&
                    `linear-gradient(to right, ${colors.primary}, ${colors.dark}, ${colors.primary})`||
                    variant=='secondary'&&
                    `linear-gradient(to right, ${colors.secondary}, ${colors.dark}, ${colors.secondary})`||
                    `linear-gradient(to right, ${colors.background}, ${colors.dark}, ${colors.background})`
            }}
            className={`text-white font-bold text-md 
                ${variant=='primary'&&'hover:text-primary Click:text-primary'||
                variant=='secondary'&&'hover:text-secondary Click:text-secondary'||
                'hover:text-background Click:text-background'}`}
            onClick={onClick}
        >
            {placeholder}
            <h1 className={`text-white font-bold text-sm`}>
                {detail}
            </h1>
        </button>
    )
}

export default Button;
