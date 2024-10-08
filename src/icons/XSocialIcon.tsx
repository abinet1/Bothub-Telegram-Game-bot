import { IconProps } from ".";


const XSocialIcon: React.FC<IconProps> = ({ width="97", height="59", className = "", fill="none" }) => {

    return (
        <svg width={width} height={height} className = {className} fill={fill} viewBox="0 0 86 76" xmlns="http://www.w3.org/2000/svg">
            <path d="M67.7286 0H80.9152L52.1053 32.1966L86 76H59.4618L38.6785 49.43L14.8923 76H1.6985L32.5152 41.5612L0 0.0035036H27.2118L45.9992 24.2893L67.7286 0ZM63.1025 68.2854H70.4089L23.2415 7.31167H15.4012L63.1025 68.2854Z" fill="white"/>
        </svg>
    );
}

export default XSocialIcon;
