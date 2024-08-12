import React from "react";
import { useSelector } from 'react-redux';
import { UserState, setUpdate } from "../../../redux";
import {  useDispatch } from 'react-redux';

export const useHomeScreen = () => {
    const level: {
        [key: number]: {min: number, max: number}
    }= {
        1: {min: 0, max: 1010},
        2: {min: 1010, max: 10000},
        3: {min: 10000, max: 100000},
        4: {min: 100000, max: 1000000},
        5: {min: 1000000, max: 10000000},
        6: {min: 10000000, max: 100000000},
    }

    const user = useSelector((state: {user: UserState}) => state.user?.user);
    const totalCoins = level[user?.rank||1]?.max;
    const [coinCount, setCoinCount] = React.useState<number>(user?.score || 1);
    const dispatch = useDispatch();

    const getProgress = React.useCallback(()=>{
        if(coinCount === totalCoins){
            dispatch(setUpdate({rank: (user?.rank||1) +1, score: coinCount}));
        }
        return (coinCount / totalCoins) * 100;

    }, [coinCount, dispatch, totalCoins, user?.rank])

    
    
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        setCoinCount(coinCount+1);
        const char = document.createElement("span");
        char.textContent = "+2";
        char.className =
            "absolute z-[10000] text-white font-bold move-up";

        // Position the character at the click point
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        char.style.left = `${x}px`;
        char.style.top = `${y}px`;

        // Append the character to the button
        event.currentTarget.appendChild(char);

        // Remove the character after the animation ends
        setTimeout(() => {
        char.remove();
        }, 800);
    };

    return {coinCount, totalCoins, getProgress, handleClick, user};
};