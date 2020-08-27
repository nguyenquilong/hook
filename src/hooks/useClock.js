
import { useEffect, useState } from 'react';


function FormatDate(date){
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}: ${minutes} : ${seconds}`
}

function useClock(props) {
    //const {timeString} = props
    const [timeString, setTimeString] = useState('')
    
    useEffect(()=>{
        const ClockInterval = setInterval(()=>{
            const now = new Date();
            const newTimeString = FormatDate(now);
            setTimeString(newTimeString)
        }, 1000);
        return() => {
            console.log('Clear interval')
            clearInterval(ClockInterval)
        }
    })
     return {timeString}
}

export default useClock;