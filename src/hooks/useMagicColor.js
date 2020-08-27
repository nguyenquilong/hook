import React, { useState, useEffect } from 'react';

function RandomNewColor() {
    
    return 'green'
}


function useMagicColor() {
    const [ color, setColor] = useState('transparent')
    
    useEffect(()=>{
        const colorInterval = setInterval(()=>{
        const newColor = RandomNewColor();
        setColor(newColor)

        },1000);
        return() => {
            clearInterval(colorInterval)
        }

    },[])


    return color;
}

export default useMagicColor;