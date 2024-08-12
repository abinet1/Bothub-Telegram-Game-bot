import React from 'react'

interface IOnbordingScreenWraperProps {
    children: React.ReactNode;
    bgImage: string;
}
function OnbordingScreenWraper(props: IOnbordingScreenWraperProps) {
    const { children, bgImage } = props;
    

    return (
        <div
            className='w-screen h-screen relative overflow-hidden'
        >
            {children}
            <div
                className=" w-full h-full bg-cover bg-center  absolute"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(119, 0, 155, 0.3), rgba(65, 0, 60, 0.9)), url(${bgImage})`
                }}
            />
        </div>
    );
}

export default OnbordingScreenWraper;
