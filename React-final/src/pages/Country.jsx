import React, { useState, useTransition } from 'react'
import { useEffect } from 'react'
import { getCountrydata } from '../api/postApi'
// import { data } from 'react-router-dom'
import CountryCard from '../components/Layout/CountryCard'
import SearchFilter from '../components/UI/SearchFilter'
function Country() {
  const [isPending,startTransition]=useTransition()

  const [countries,setCountries]=useState([])

  const [search,setSearch]=useState()
  const [filter,setFilter]=useState('all')

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

const searchCountry=(Country)=>{
  if(search){
    return Country.name.common.toLowerCase().includes(search.toLowerCase())
  }return Country
}

const filterRegion=(Country)=>{
  if(filter==='all')return Country;
  return Country.region===filter
}


const filterCountries= countries.filter((Country)=>searchCountry(Country) && filterRegion(Country));

  return (
    <div>
      <section className='country-section'>
        <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}/>
          <ul className='grid grid-four-cols'>
            {
              filterCountries.map((Currcountry,index)=>{
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