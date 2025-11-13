import { useState } from "react"


function useInput(intialV) {
    const [value,setValue]=useState(intialV)

    const reset=()=>{
        setValue(intialV)
    }
    const bind={
        value,
        onChange:e=>{
            setValue(e.target.value)
        }
    }
    return {value,bind,reset}
 
}

export default useInput