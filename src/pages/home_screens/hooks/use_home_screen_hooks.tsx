import React from "react";

export const useHomeScreen = () => {
    const totalCoins = 999;
    const [coinCount, setCoinCount] = React.useState<number>(200);

    const getProgress = React.useCallback(()=>{
        return (coinCount / totalCoins) * 100;
    }, [coinCount, totalCoins])
    
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

    return {coinCount, totalCoins, getProgress, handleClick};
};