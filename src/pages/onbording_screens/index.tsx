import React from 'react';
import WelcomeScreen from './welcome_screen_1';
import WelcomeScreenTwo from './welcome_screen_2';
import WelcomeScreenThree from './welcome_screen_3';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { makeCall } from '../../api/makeCall';

function OnbordingScreen() {
    const [searchParams] = useSearchParams();
    const username = searchParams.get('username');
    const navigate = useNavigate();

    const [selected, setSelected] = React.useState<number>(0);
    const [country, setCountry] = React.useState<string>('');

    React.useEffect(() => {
        const checkUser = async () => {
            if(username){
                const response = await makeCall(`/check-user/${username}`, 'GET');
                if(response?.exists){
                    navigate('/home');
                }else{
                    setSelected(1);
                }
            }
        }
        checkUser();

    },[navigate, username]);

    const handleNext = () => { 
        setSelected(priv=> priv + 1);
    }

    return (
        selected === 0 && <WelcomeScreen />||
        selected === 1 && <WelcomeScreenTwo nextScreen={handleNext} />||
        selected === 2 && <WelcomeScreenThree nextScreen={handleNext} />||
        <></>
    );
}

export default OnbordingScreen;
