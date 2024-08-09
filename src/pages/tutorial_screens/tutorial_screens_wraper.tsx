import React from 'react'
import onbordingImage from '../../images/onbordingImage.png';
import colors from '../../themes/colors';

function TutorialScreens() {
   
    return (
        <div
            className='w-screen h-screen'
            style={{
                backgroundImage: 'linear-gradient(to bottom, #010D1D, #220039)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
           <div className="absolute inset-0 flex flex-col justify-between gap-20">
                <div className="flex flex-col gap-5 pt-20 items-center  text-secondary">
                    <h1 className={`text-2xl font-bold`} >Tap and earn coins</h1>
                    <h1 className='text-sm text-white'>You can use boosters and tricky strategies</h1>
                </div>
                <div className="flex flex-col items-center px-[40px] justify-center gap-3" >
                    <img src={onbordingImage} width={'287px'} alt="tutorial" style={{borderRadius: '40px', border: `6px solid #051B43`}}/>
                </div>
            </div> 
        </div>
    );
}

export default TutorialScreens;
