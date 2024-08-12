import React from 'react';
import WelcomeScreen from './welcome_screen_1';
import WelcomeScreenTwo from './welcome_screen_2';
import WelcomeScreenThree from './welcome_screen_3';

import {  useDispatch } from 'react-redux';
import { setUpdate, setUser } from '../../redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

function OnbordingScreen() {

    const navigate = useNavigate();
    
    const [selected, setSelected] = React.useState<number>(0);
    const onConfirm = (selectedvalue: {
        label: string;
        value: string;
        icon?: React.ReactNode;
    } | undefined) => {
        if(selectedvalue){
            dispatch(setUpdate({ location: selectedvalue }));
            setSelected(2);
        }
    }

    const handleNext = () => { 
        navigate('/firstlog');
    }

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const username = searchParams.get('username');
    

    React.useEffect(() => {
        const checkUser = async () => {
            if(username){
                addUser(username);
                setSelected(1);
            }
        }
        checkUser();

    },[username]);

  
    const addUser = (username: string) => {
        dispatch(setUser({ username: username }));

    };

    

    return (
        selected === 0 && <WelcomeScreen />||
        selected === 1 && <WelcomeScreenTwo nextScreen={onConfirm} />||
        selected === 2 && <WelcomeScreenThree nextScreen={handleNext} />||
        <></>
    );
}

export default OnbordingScreen;
