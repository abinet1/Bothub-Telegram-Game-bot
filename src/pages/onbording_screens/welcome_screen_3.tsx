import React from 'react'
import fighterJet from '../../images/fighterJet.png'
import { Button, Modal } from '../../components';
import OnbordingScreenWraper from './onbording_screen_wraper';
import { WelcomeScreensProps } from './welcome_screen_2';

function WelcomeScreenThree(props: WelcomeScreensProps) {
  const { nextScreen } = props;
  const[isOpen, setIsOpen] = React.useState(false);
  return (
    <OnbordingScreenWraper bgImage={fighterJet}>
    
      <div className="absolute z-10 inset-0 flex flex-col justify-evenly">
        <div className="flex h-[25vh] flex-col items-center justify-end text-secondary">
          <h1 className='text-sm' style={{fontWeight: '500'}}>Welcome to the</h1>
          <h1 className={`text-2xl font-bold`} >Lucidia Alliance</h1>
        </div>
        
        <div className="h-[15vh] text-white px-7 font-semibold ">
          <p>Welcome to Lucidia! Your gateway to earning tokens and exploring exciting in-game assets.<br />
          Choose an option to get started:</p>
        </div>
        <div className="flex flex-col h-[20vh] items-center justify-center gap-3">
          <Button
            size='sm'
            placeholder='Proceed with Tutorial'
            detail='(Earn 10,000 Tokens Bonus)'
            variant='custom' 
            onClick={nextScreen}         
          />
          <Button
            size='sm'
            placeholder='Skip'
            detail='(No Bonus)'
            variant='secondary'
            onClick={()=>{setIsOpen(true)}}          
          />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={()=>{setIsOpen(false)}}/>
    </OnbordingScreenWraper>
  );
}

export default WelcomeScreenThree;
