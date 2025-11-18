import React from 'react'


function SearchFilter({search,setSearch,filter,setFilter}) {
    const handleInputChange=(e)=>{
        e.preventDefault()
        setSearch(e.target.value)
    }

    const handleSelectChange=(e)=>{
        e.preventDefault()
        setFilter(e.target.value)
    }
  return (
    <div>
        <section className='section-searchFilter container '>
            <input type="text"  placeholder='search' value={search} onChange={handleInputChange} className="w-full px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
            <div>
                <select className="select-section" value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            </div>
        </section>
    </div>
    
  )
}

export default SearchFilter