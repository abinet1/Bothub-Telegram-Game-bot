import React from 'react';
import { ScoreProgressBar } from '../../components';
import { InPageModal } from '../../components/modal';
import { Button } from '../../components';
import PopU_Bonus_Background from '../../images/PopU_Bonus_Background.png';
import coin_image from '../../images/coin_image.png';
import alliance_smile from '../../images/alliance_smile.png';
import HomeScreensWrapper from './home_screens_wrapper';
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { setUpdate, UserState } from '../../redux';
import { useSelector } from 'react-redux';

function FirstTimeHomeScreens() {

    const [currentTab, setCurrentTab] = React.useState('tab_one');

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const addRank = () => {
        dispatch(setUpdate({ rank: 1, score: 999, }));
    };


    const stateScreens: {[key: string]: React.ReactNode} = {
        'tab_one': <InPageModal 
            onClose={()=>{}} 
            body={
                <div className='flex w-[100%] gap-5 pt-5 h-[100px] justify-center'>
                    <img 
                        src={coin_image} 
                        style={{
                            width: '41.95px',
                            height: '41.95px',
                            gap: '0px',
                            opacity: '0px',
                            rotate: '225.13deg',
                        }}
                        alt='coin' 
                    />
                    <h1 className='text-white text-3xl font-bold'>+999</h1>
                </div> 
            }
            size={'sm'} 
            header={false} 
            customStyle={{
                maxWidth: '340px', 
                backgroundImage: `url(${PopU_Bonus_Background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
            }}
            customAction={
                <Button 
                    onClick={()=>{
                        addRank();
                        setCurrentTab('tab_two');
                    }} 
                    placeholder={
                        <h1 className={`text-white font-bold text-2xl`}>
                            Receive a gift 
                        </h1>
                    }
                    variant='custom' 
                    customStyle={{
                        width: '281px', 
                    }} 
                />
            }
        />,
        'tab_two': <InPageModal 
            onClose={()=>{}} 
            body={
                <img 
                    src={alliance_smile}
                    style={{
                        width: '65px',
                        height: '121px',
                        alignSelf: 'center',
                    }}
                    alt='coin' 
                /> 
            }
            size={'sm'} 
            header={false} 
            customStyle={{
                maxWidth: '340px', 
                paddingTop: '0px',
                backgroundImage: `url(${PopU_Bonus_Background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
            }}
            customAction={
                <Button 
                    onClick={()=>{
                        navigate('/home');
                    }} 
                    placeholder={
                        <h1 className={`text-white font-bold text-xl`}>
                            Start defense 
                        </h1>
                    }
                    variant='custom'
                    customStyle={{
                        marginTop: '20px', 
                        width: '281px',
                        height: '45px', 
                    }} 
                />
            }
        />,
    }

    const user = useSelector((state: {user: UserState}) => state.user?.user);
    
    
    return (
        <HomeScreensWrapper bottomBar={false} topBar={false}>
            <h1 className='text-white text-2xl font-bold text-center'>{user.username}</h1>
            <div className='w-[342px] py-[50px]'>
                <ScoreProgressBar level={1} size='sm' totalScore={999} currentScore={555} />
            </div>

            <div className='text-center py-[50px]'>
                <h1 className='text-white text-sm font-bold'>
                    {currentTab==='tab_one'?
                        'Pick up a present from':
                        'Tap to start'
                    }</h1>
                {currentTab!=='tab_two'&&<h1 className='text-secondary text-sm font-bold'>username</h1>}
                <span className={`text-background font-bold text-2xl `}>
                    ▼
                </span>
            </div>
            {stateScreens[currentTab]}
        </HomeScreensWrapper>
    );
}

export default FirstTimeHomeScreens;
