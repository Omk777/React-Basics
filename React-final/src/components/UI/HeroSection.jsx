import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function HeroSection() {
  return (
    <div>
        <main className='hero-section main'>
                    <div className='container grid grid-two-cols'>
                        <div className="hero-content">
                            <h1 className='heading-xl'>
                                Explore the World,one Country at a Time.
                            </h1>
                            <p className='paragraph'>
                                Discover the history,culture ,and beauty of every nation.Sort ,search and filter through counteries to find the details you want.
                            </p>
                            <button className='btn btn-darken btn-inline bg-white-box'>
                                Start Exploring <FaArrowRightLong/>
                            </button>
                        </div>
        
                        <div className="hero-image">
                            <img src="https://images.pexels.com/photos/34605473/pexels-photo-34605473.jpeg" className='banner-image' alt="" />
                        </div>
                    </div>
                </main>
    </div>
  )
}

export default HeroSection