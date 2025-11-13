import React from 'react'
import { useEffect } from 'react'
function useNewDoctitle(count) {
  
    
         useEffect(()=>{
                document.title=`Count ${count}` 
            },[count])

  
}

export default useNewDoctitle