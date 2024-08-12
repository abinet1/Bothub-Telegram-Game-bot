import React from 'react';
import { SmallActionButton } from '../../components/button';
import { NextIcon } from '../../icons';
import progressImage from '../../images/progressImage.png';
import onbordingImage from '../../images/onbordingImage.png';
import onbordingImage_1 from '../../images/onbordingImage_1.png';
import onbordingImage_2 from '../../images/onbordingImage_2.png';
import onbordingImage_3 from '../../images/onbordingImage_3.png';
import { Modal } from '../../components';

function TutorialScreens() {

    const tutorialScreens = [
        {
            'image': onbordingImage,
            'header': 'Tap and earn coins', 
            'subtitle': 'You can use boosters and tricky strategies.'
        },{
            'image': onbordingImage_1,
            'header': 'Upgrade your exchandge', 
            'subtitle': 'Use cards to boost your passive income.'
        },{
            'image': onbordingImage_2,
            'header': 'Invite friends and get bonuses together', 
            'subtitle': 'You and your friend will both receive coins.'
        },{
            'image': onbordingImage_3,
            'header': 'Use coins to get an airdrop at token listing', 
            'subtitle': 'Don`t forget to invite your friends. Good luck!.'
        }
    ]
    const [progress, setProgress] = React.useState<number>(0);
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    return (
        <div
            className='w-screen h-screen flex flex-col justify-between relative'
            style={{
                backgroundImage: 'linear-gradient(to bottom, #010D1D, #220039)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                paddingBottom: '10px'
            }}
        >
                <div className="flex flex-col gap-3 pt-20 px-5 items-center text-center text-secondary">
                    <h1 className={`text-2xl font-bold`} >{tutorialScreens[progress].header}</h1>
                    <h1 className='text-md text-white'>{tutorialScreens[progress].subtitle}</h1>
                </div>
                <div 
                    className={`
                        flex 
                        flex-col 
                        rounded-[40px] 
                        overflow-hidden
                        items-center 
                        mx-[30px] 
                        justify-center 
                        gap-3 
                        shadow-gradient
                        h-[670px]
                    `}
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, #21003A, #28014e)',
                    }}
                >
                    <div className={`rounded-[25px] m-3 overflow-hidden h-[700px]`}>
                        <img 
                            src={tutorialScreens[progress].image} 
                            alt="tutorial"
                        />
                    </div>
                </div>
                <div 
                    className={`
                        flex 
                        w-full 
                        flex-col 
                        absolute
                        bottom-0 
                        items-center 
                        justify-center 
                        ${
                            progress === 0 ? 
                                'h-[242px]':
                            progress === 3? 
                                'h-[149px]':
                                'h-[109px]'} 
                    `}
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, rgba(41, 3, 87, 0) 0%, rgba(37, 2, 72, 1) 25%, rgba(34, 0, 57, 1)100%)'
                    }}
                >
                    {progress === 0 &&
                    <h1 className='text-white text-2xl font-bold'>Bite the alien!</h1>}
                    {progress === 0 &&
                        <img 
                            src={progressImage} 
                            alt="progress" 
                            className='rounded-full mb-5 bg-transparent w-[270px] h-[79px]'
                        />
                    }
                    <div className='flex w-[100%] justify-evenly items-center'>
                        {progress!==3 && <SmallActionButton placeholder='Skip All' onClick={()=>{setIsOpen(priv=>!priv)}} variant='default' />}
                        <div className='flex gap-5 w-[50%] pl-[5%]'>
                            <div className={`w-[15px] h-[15px] rounded-full ${progress===0? 'bg-[#7700FF]':'bg-[#3A037D]'}`}></div>
                            <div className={`w-[15px] h-[15px] rounded-full ${progress===1? 'bg-[#7700FF]':'bg-[#3A037D]'}`}></div>
                            <div className={`w-[15px] h-[15px] rounded-full ${progress===2? 'bg-[#7700FF]':'bg-[#3A037D]'}`}></div>
                            <div className={`w-[15px] h-[15px] rounded-full ${progress===3? 'bg-[#7700FF]':'bg-[#3A037D]'}`}></div>
                        </div>
                        
                        {progress!==3 && 
                            <div onClick={()=>setProgress(priv => priv>=3 ? 0 :priv+1)} className='w-[50px] h-[50px] flex justify-center items-center rounded-2xl bg-background'>
                                <NextIcon width='30' height='30' />
                            </div>
                        }
                    </div>
                    {progress===3 && <SmallActionButton onClick={()=>setProgress(priv => priv>=3 ? 0 :priv+1)} placeholder='Play' variant='default' style={{width: '381px', marginTop: '25px'}} />}

                </div>
                <Modal isOpen={isOpen} onClose={()=>{setIsOpen(false)}} />
        </div>
    );
}

export default TutorialScreens;
