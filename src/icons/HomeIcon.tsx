import { IconProps } from ".";


const HomeIcon: React.FC<IconProps> = ({ width="97", height="59", className = "", fill="none" }) => {

    return (
        <svg width={width} height={height} className = {className} fill={fill} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9976 0.364258L7.10852 6.43036V0.626734H2.34692V10.0953V27.0736V29.9997H10.3621V15.8698H19.7592V29.9997H27.6484V9.90574L14.9976 0.364258Z" fill="#0ED4FF"/>
            <path d="M14.9976 11.5345C16.516 11.5345 17.7469 10.3006 17.7469 8.77846C17.7469 7.25636 16.516 6.02246 14.9976 6.02246C13.4792 6.02246 12.2483 7.25636 12.2483 8.77846C12.2483 10.3006 13.4792 11.5345 14.9976 11.5345Z" fill="#C0FF0E"/>
            <path d="M15.5794 0.452042L14.9976 0L14.4157 0.452042L0 11.5927L0.43155 12.1614L14.9976 0.904083L29.5636 12.1614L30 11.5927L15.5794 0.452042Z" fill="#C0FF0E"/>
        </svg>
    );
}

export default HomeIcon;