import React, { useTransition, useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getCountryInddata } from '../api/postApi';

function CountryDetails() {
    const {id}=useParams()
    console.log(id);
    
    // eslint-disable-next-line no-unused-vars
    const [isPending,startTransition]=useTransition()
    
     
      const [country,setCountry]=useState(null)
    useEffect(()=>{
        startTransition(async()=>{
          const res=await getCountryInddata(id);
          console.log(res);
          setCountry(res.data[0])
          
        })
    
    // const res=  await  fetch ("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")
    // const data=res.json()
    },[id])
    
  if (!country) return <h1>Loading...</h1>;

  return (
    <div>
       <section className='card country-details-card container'>
        <div className='container-card bg-white-box'>
           <div className="country-image grid grid-two-cols">
            <img src={country.flags.svg} alt="" className='flag' />
            <div className="country-content">
                <p className='card-title'>
                    {country.name.official}
                </p>
                <div className="infoContainer">
                    <p>
                      <span className="card-description"> Native Names:</span>
                      {Object.keys(country.name.nativeName)
                        .map((key) => country.name.nativeName[key].common)
                        .join(", ")}
                    </p>
                    <p>
                  <span className="card-description"> Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {country.capital}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
                </div>
            </div>
           </div>
           <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
        </div>
       </section>
    </div>
  )
}

export default CountryDetails