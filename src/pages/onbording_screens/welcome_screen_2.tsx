import React from 'react'
import fighterJet from '../../images/fighterJet.png'
import { Button, Dropdown } from '../../components';
import {
  JapanFlagIcon,
  MexicoFlagIcon,
  ScotlandFlagIcon,
  SpainFlagIcon,
  CanadaFlagIcon,
} from '../../icons';
import OnbordingScreenWraper from './onbording_screen_wraper';
// import { useSearchParams } from 'react-router-dom';
// import { makeCall } from '../../api/makeCall';

export interface WelcomeScreensProps {
  nextScreen: (selectedvalue: {label: string, value: string, icon?: React.ReactNode} | undefined) => void;
}
function WelcomeScreenTwo(props: WelcomeScreensProps) {
  const { nextScreen } = props;
  const [selected, setSelected] = React.useState<{label: string, value: string, icon?: React.ReactNode} | undefined>(undefined);

  return (
    <OnbordingScreenWraper bgImage={fighterJet}>
    
      <div className="absolute z-10 inset-0 flex flex-col items-center justify-evenly text-white">
        <div className="flex h-[75vh] flex-col items-center justify-center text-white">
          <h1 className='text-xl font-bold' >Please select your country:</h1>
          <h1 className={`text-gray-300 font-bold text-sm`} >You can change this later in the settings</h1>
          <Dropdown 
            selected={selected}
            onSetSelected={setSelected}
            placeholder='Choose country' 
            variant='custom'
            size='sm'
            options={[
              {
                'label': 'English',
                'value': 'English',
                'icon': <JapanFlagIcon width={45} height={45} />,
              },{
                'label': 'Japan',
                'value': 'Japan',
                'icon': <JapanFlagIcon width={45} height={45} />
              },{
                'label': 'Spen',
                'value': 'Spen',
                'icon': <SpainFlagIcon  width={45} height={45}/>
              },{
                'label': 'Mexico',
                'value': 'Mexico',
                'icon': <MexicoFlagIcon  width={45} height={45}/>
              },{
                'label': 'Scotland',
                'value': 'Scotland',
                'icon': <ScotlandFlagIcon  width={45} height={45}/>
              },
            ]}
          />
        </div>
        <div className="flex h-[10vh] items-center justify-center gap-3">
        <Button
          size='sm'
          placeholder='Confirm'
          variant='primary' 
          onClick={()=>{
            nextScreen(selected);
          }}         
        />
        </div>
      </div>
    </OnbordingScreenWraper>
  );
}

export default WelcomeScreenTwo;
