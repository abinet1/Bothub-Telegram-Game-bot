import { useState } from 'react';
import colors from '../../themes/colors';

interface IDropdownProps {
    variant?: "primary" | "secondary" | "custom";
    size?: "sm" | "md" | "lg";
    placeholder: string;
    options: {label: string, value: string, icon?: React.ReactNode}[];
    selected?: {label: string, value: string, icon?: React.ReactNode};
    onSetSelected: (selected: {label: string, value: string, icon?: React.ReactNode}) => void;
}

const Dropdown = (props: IDropdownProps) => {
    const { options, variant='primary', size='sm', placeholder, selected, onSetSelected } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div 
            className="relative inline-block text-left"
            style={{
                width: size==='lg' && '369px' || size==='md'&& '311px'||'285px',
                height: size==='lg' && '66px' || size==='md'&& '58px'||'49px',
                borderRadius: '10px',
                borderBottomRightRadius: isOpen ? '0' : '10px',
                borderBottomLeftRadius: isOpen ? '0' : '10px',
                background: variant=='primary'&&
                    `linear-gradient(to right, ${colors.primary}, ${colors.dark}, ${colors.primary})`||
                    variant=='secondary'&&
                    `linear-gradient(to right, ${colors.secondary}, ${colors.dark}, ${colors.secondary})`||
                    `linear-gradient(to right, ${colors.background}, ${colors.dark}, ${colors.background})`
            }}
        >
            <button
                type="button"
                className="inline-flex justify-between w-full items-center px-4"
                id="dropdownMenuButton1"
                data-dropdown-toggle="dropdownMenuButton1"
                onClick={toggleDropdown}
                style={{
                    height: size==='lg' && '66px' || size==='md'&& '58px'||'49px',
                }}
            >
                {selected?
                    <>
                        <span className={`
                            text-white 
                            font-bold 
                            text-md 
                            ${variant=='primary'&&
                                'hover:text-primary Click:text-primary'||
                            variant=='secondary'&&'hover:text-secondary Click:text-secondary'||
                            'hover:text-background Click:text-background'}
                        `}
                        >
                            {selected.label}
                        </span> 
                        <span className={`pt-7 w-6 text-white font-bold text-md`}>
                            {selected.icon}
                        </span>
                    </>:
                    <>
                        <span className={`text-white font-bold text-md 
                            ${variant=='primary'&&'hover:text-primary Click:text-primary'||
                            variant=='secondary'&&'hover:text-secondary Click:text-secondary'||
                            'hover:text-background Click:text-background'}`}
                        >
                            {placeholder}
                        </span> 
                        <span className={`text-white font-bold text-md`}>
                            {!isOpen ? `▼` : `▲`}
                        </span>
                    </>
                }
            </button>
            <div
                id="dropdownMenuButton1"
                style={{
                    width: size==='lg' && '369px' || size==='md'&& '311px'||'285px',
                    maxHeight: '358px',
                    background: variant=='primary'&&
                        `linear-gradient(to right, ${colors.primaryshade['700']}, ${colors.primary}, ${colors.primaryshade['700']}`||
                        variant=='secondary'&&
                        `linear-gradient(to right, ${colors.secondaryshade['700']}, ${colors.secondary}, ${colors.secondaryshade['700']}`||
                        `linear-gradient(to right, ${colors.backgroundshade['700']}, ${colors.background}, ${colors.backgroundshade['700']})`
                }}
                className={`z-10 absolute right-0 mt-0 w-48 origin-top-right rounded-b-md bg-white shadow-lg ring-1 ring-black ring-opacity-5  ${isOpen ? "block" : "hidden"}`}
            >
                {options.map((option, index) => (
                    <div 
                        key={index}
                        className={`flex px-4 py-2 justify-between 
                            ${index!==options.length-1 && 'border-b border-backgroundshade-400'} 
                            text-white text-sm ${variant=='primary'&&'hover:text-primary Click:text-primary'||
                            variant=='secondary'&&'hover:text-secondary Click:text-secondary'||
                            'hover:text-background Click:text-background'} 
                            font-bold`
                        }
                        onClick={() => {
                            toggleDropdown();
                            onSetSelected(option);
                        }}
                    >
                        {option.label}
                        <div className='h-1'>
                            {option.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
