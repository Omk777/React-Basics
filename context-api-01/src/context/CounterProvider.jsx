/* eslint-disable react-refresh/only-export-components */

import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';


export const CounterContext=createContext();

export const CounterProvider=({children})=>{

    const [count,setCount]=useState(0)

    return(
        <CounterContext.Provider value={{count,setCount}}>
            {children}
        </CounterContext.Provider>
    )
}