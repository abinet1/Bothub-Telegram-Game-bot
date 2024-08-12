import React from 'react';
import { ScoreProgressBar } from '../../components';
import alliance_smile from '../../images/alliance_smile.png';
import background_flower from '../../images/background_flower.png';
import HomeScreensWrapper from './home_screens_wrapper';
import { BoostIcon, CanadaFlagIcon, EnergyIcon } from '../../icons';
import colors from '../../themes/colors';
import './home_style/style.css';
import { useHomeScreen } from './hooks';

function HomeScreens() {

    const {totalCoins, coinCount, getProgress, handleClick, user } =  useHomeScreen();
    
    return (
        <HomeScreensWrapper bottomBar={true} topBar={true}>
            <div className='h-full w-full p-5'>
                
                <div className='flex w-full justify-between ' style={{ overflow: 'hidden'}}>
                    <h1 className='text-white text-xl font-bold text-center'>{user?.username}</h1>
                    <div className='mr-[-15px]'>
                        {
                            <text >
                                {user?.location?.icon}    
                            </text>||
                            <CanadaFlagIcon width={'75px'} height={'75px'}/> 
                        }
                    </div>
                </div>
                <text className='text-white text-sm font-bold'>
                    Your current level is displayed here, collect coins and increase your level
                </text>
                <div className='w-[352px] py-[20px]'>
                    <ScoreProgressBar 
                        level={user?.rank} 
                        size='sm' 
                        totalScore={totalCoins} 
                        currentScore={coinCount} 
                        bottomText={<text className="absolute text-sm font-semibold text-white mt-10 ml-[18%]"> To the next level</text>}
                    />
                </div>
                <div 
                    style={{
                        
                    }}
                    className='
                        text-center 
                        relative 
                        flex 
                        justify-center 
                        w-full
                        click-effect 
                        relative 
                        overflow-hidden 
                        transition-transform 
                        duration-50 
                        ease-in-out 
                        active:scale-95 
                        active:rotate-2
                    ' 
                    onClick={handleClick}
                >
                    <div className='absolute top-10 w-[90%]' style={{zIndex: '1'}}>
                        <img src={background_flower}/>
                    </div>
                    <div style={{zIndex: '1', width: '42%'}}>
                        <img src={alliance_smile} />
                    </div>
                </div>
                <div className='text-center text-white relative flex justify-between'>
                    <div className='absolute left-0' >
                        <div 
                            className='absolute top-4' 
                            style={{zIndex: 100}}
                        >
                            <EnergyIcon width={'100px'} height={'100px'}/>
                        </div>
                        <div
                            className='flex absolute top-10 left-8 w-[150px] h-[51px] rounded-full items-center'
                            style={{
                                backgroundImage: `linear-gradient(to right, ${colors.backgroundshade['700']} ${getProgress()}%, #1d0234 ${getProgress()!==100? getProgress()+30:getProgress()}%)`
                            }}
                        >
                            <text className="ml-[50px] text-md font-bold text-white"> {coinCount}/{totalCoins}</text>
                        </div>
                        <text
                            className='flex absolute top-[95px] left-8'
                        >Energy</text>
                    </div>
                    <div className='absolute left-[75%]'>
                        <div 
                            className='absolute top-4' 
                            style={{zIndex: 100}}
                        >
                            <BoostIcon width={'100px'} height={'100px'}/>
                        </div>
                        <text
                            className='flex absolute top-[95px] left-8'
                        >Boost</text>
                    </div>
                </div>
                
            </div>
        </HomeScreensWrapper>
    );
}

export default HomeScreens;
