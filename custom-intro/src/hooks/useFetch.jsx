import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const[data,setData]=useState([])
    const [laoding,setLoading]=useState(true)
    const [error,setError]=useState(null)


    useEffect(()=>{
        if(!url) return;
        setLoading(true)

        fetch(url)
            .then((res)=>{
                if(!res.ok){
                    throw new Error("Network resonse was not ok");
                }
                return res.json();
            })
            .then((data)=> setData(data))
            .catch((err)=> setError(err.message))
            .finally(()=> setLoading(false))

    },[url])
 return {data,laoding,error}
}

export default useFetch