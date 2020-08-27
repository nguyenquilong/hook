
import React, { useEffect, useState } from 'react';
import useClock from '../../hooks/useClock';

function Clock(props) {
    const {timeString} = useClock();
    return  <div> {timeString} </div>  
}

export default Clock;