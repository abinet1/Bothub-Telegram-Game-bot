import { IconProps } from ".";


const JapanFlagIcon: React.FC<IconProps> = ({ width="97", height="59", className = "", fill="none" }) => {

    return (
        <svg width={width} height={height} className = {className} fill={fill} viewBox="0 0 99 99" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#F5F5F5"/>
            <path d="M21.0008 29.3968C25.64 29.3968 29.4008 25.636 29.4008 20.9968C29.4008 16.3576 25.64 12.5968 21.0008 12.5968C16.3616 12.5968 12.6008 16.3576 12.6008 20.9968C12.6008 25.636 16.3616 29.3968 21.0008 29.3968Z" fill="#ED4C5C"/>
        </svg>
    );
}

export default JapanFlagIcon;

