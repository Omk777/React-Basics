/* eslint-disable no-unused-vars */
import { useState } from "react";

const Use=()=>{
    const [state,setState]=useState('state 1')

    return(
        <div className="container">
            <div
            
            className="btn-container flex justify-center mt-9 rounded-lg gap-2 items-center">
                <button className="btn-container rounded-lg p-2" style={{backgroundColor:'blue'}}>
                    State 1
                </button>
                <button >
                    State 2
                </button>
                <button >
                    State 3
                </button>
            </div>
        </div>
    )
}

export default Use