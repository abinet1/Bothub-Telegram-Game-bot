import React, { useState } from 'react';
import colors from '../../themes/colors';
// import colors from "../../themes/colors";

const Dropdown = (props: {
    variant?: "primary" | "secondary" | "custom";
    size?: "sm" | "md" | "lg";
    text: string;
    options: {label: string, value: string}[];
}) => {
    const { options, variant='custom', size='sm', text } = props;
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
                className="inline-flex justify-between w-full px-2 items-center"
                id="dropdownMenuButton1"
                data-dropdown-toggle="dropdownMenuButton1"
                onClick={toggleDropdown}
                style={{
                    height: size==='lg' && '66px' || size==='md'&& '58px'||'49px',
                }}
            >
                <text className={`text-white font-bold text-2xl 
                    ${variant=='primary'&&'hover:text-primary Click:text-primary'||
                    variant=='secondary'&&'hover:text-secondary Click:text-secondary'||
                    'hover:text-background Click:text-background'}`}
                >
                    {text}
                </text> 
                <text className={`text-white font-bold text-2xl`}>
                    {!isOpen ? `▼` : `▲`}
                </text>
            </button>
            <div
                id="dropdownMenuButton1"
                // className="relative inline-block text-left"
                style={{
                    width: size==='lg' && '369px' || size==='md'&& '311px'||'285px',
                    maxHeight: '358px',
                    borderBottomRightRadius: isOpen ? '0' : '10px',
                    borderBottomLeftRadius: isOpen ? '0' : '10px',
                }}
                className={`z-10 absolute right-0 mt-0 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 ${isOpen ? "block" : "hidden"}`}
            >
                <div className="py-1">
                    {options.map((option) => (
                        <div 
                            style={{
                                width: size==='lg' && '369px' || size==='md'&& '311px'||'285px',
                                background: variant=='primary'&&
                                `linear-gradient(to right, ${colors.primaryshade['900']}, ${colors.primary}, ${colors.primaryshade['900']}`||
                                variant=='secondary'&&
                                `linear-gradient(to right, ${colors.secondaryshade['900']}, ${colors.secondary}, ${colors.secondaryshade['900']}`||
                                `linear-gradient(to right, ${colors.backgroundshade['900']}, ${colors.background}, ${colors.backgroundshade['900']})`
                            }}
                            // ${variant=='primary'&&'hover:text-primary Click:text-primary'||
                            // variant=='secondary'&&'hover:text-secondary Click:text-secondary'||
                            // 'hover:text-background Click:text-background'}
                            className={`w-full block px-4 py-2 
                                bg-gradient-to-r from-dark via-${variant} to-dark`
                            }
                        >
                            <a
                                href="#"
                                className={` 
                                    text-white text-sm ${variant=='primary'&&'hover:text-primary Click:text-primary'||
                                    variant=='secondary'&&'hover:text-secondary Click:text-secondary'||
                                    'hover:text-background Click:text-background'}`
                                }
                            >
                                {option.label}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
