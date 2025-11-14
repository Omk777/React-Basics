
import React, { useMemo } from 'react'
import { memo } from 'react';


const Child=(props)=>{
    const {counter,updateCount}=props;

    const childNumber=useMemo(()=>{
        let output=0;
        for(let i=0;i<500_000; i++){
        output++;
     }
     return output;
    },[])


    console.log('Child is rndering');

    return(
        <div>
            <h1>Child :{childNumber}{counter}</h1>
            <button onClick={updateCount}>Click to update</button>
        </div>
    )
    
}

export default memo(Child )