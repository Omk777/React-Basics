import React, { useState, useTransition } from 'react'
import { useEffect } from 'react'
import { getCountrydata } from '../api/postApi'
// import { data } from 'react-router-dom'
import CountryCard from '../components/Layout/CountryCard'
function Country() {
  const [isPending,startTransition]=useTransition()

  const [countries,setCountries]=useState([])
useEffect(()=>{
    startTransition(async()=>{
      const res=await getCountrydata();
      console.log(res);
      setCountries(res.data)
      
    })

// const res=  await  fetch ("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")
// const data=res.json()
},[])

if(isPending) return <h1>Loading...</h1>

  return (
    <div>
      <section className='country-section'>
          <ul className='grid grid-four-cols'>
            {
              countries.map((Currcountry,index)=>{
                return(
                    <CountryCard  Country={Currcountry} key={index}/>
                )
              })
            }
          </ul>
      </section>
    </div>
  )
}

export default Country