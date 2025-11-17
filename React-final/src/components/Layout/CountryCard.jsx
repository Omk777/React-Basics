import React from 'react'
import { NavLink } from 'react-router-dom'
function CountryCard({Country}) {
  return (
   <li className='country-card card'>
        <div className='container-card bg-white-box h-100'>
                <img src={Country.flags.svg} alt="" />
                <div className="countryInfo">
                    <p className='card-title'>{Country.name.common}</p>
                   <p>
                     <span className='card-description'>
                        Population:
                    </span>
                    {Country.population.toLocaleString()}
                   </p>
                    <p>
                     <span className='card-description'>
                        Region:
                    </span>
                    {Country.region}
                   </p>
                    <p>
                     <span className='card-description'>
                        Capital:
                    </span>
                    {Country.capital[0]}
                   </p>
                   <NavLink to={`/country/${Country.name.common}`}>
                    <button>
                    Read More 
                   </button>
                   </NavLink>
                </div>
        </div>
   </li>
  )
}

export default CountryCard