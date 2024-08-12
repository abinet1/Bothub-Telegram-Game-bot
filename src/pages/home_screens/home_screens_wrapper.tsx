import React from 'react';
import { BottomNav, TopNavBar } from '../../components';
import { GunIcon, HomeIcon, MissionIcon, TroopsIcon } from '../../icons';
interface IHomeScreensWrapperProps{
    children: React.ReactNode;
    topBar?: boolean;
    bottomBar?: boolean;
}

function HomeScreensWrapper(props: IHomeScreensWrapperProps) {
    const { children, topBar=true, bottomBar=true } = props

    const [activeBottomTab, setActiveBottomTab] = React.useState(0);
    
    return (
        <div
            className='w-[100%] h-screen flex items-center flex-col justify-between'
            style={{
                backgroundImage: `linear-gradient(to bottom, #010D1D, #220039)`
            }}
        >
            {topBar&&
                <TopNavBar 
                    onCancelAction={()=>{}}
                    onManuAction={()=>{}}
                />
            }
            <div className='bg-red h-[100%] w-[100%] flex items-center flex-col justify-center'>
                {children}
            </div>
            {bottomBar&&
                <BottomNav
                    activeTab={activeBottomTab}
                    tabs={[
                        {
                            label: <text>Home</text>,
                            icon: <HomeIcon width='30px' height='30px' />,
                            onClickAction: ()=>{
                                setActiveBottomTab(0)
                            }
                        },
                        {
                            label: <text>Defense</text>,
                            icon: <GunIcon width='30px' height='30px' />,
                            onClickAction: ()=>{
                                setActiveBottomTab(1)
                            }
                        },
                        {
                            label: <text>Missions</text>,
                            icon: <MissionIcon width='30px' height='30px' />,
                            onClickAction: ()=>{
                                setActiveBottomTab(2)
                            }
                        },
                        {
                            label: <text>Troops</text>,
                            icon: <TroopsIcon width='30px' height='30px' />,
                            onClickAction: ()=>{
                                setActiveBottomTab(3)
                            }
                        },
                    ]}
                />
            }
        </div>
    );
}

export default HomeScreensWrapper;
