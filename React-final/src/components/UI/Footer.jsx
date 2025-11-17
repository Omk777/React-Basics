import React from 'react'
import footerContact from '../../api/footerApi.json'

function Footer() {
  return (
    <div>
        <footer className='footer-section'>
            <div className='container grid grid-three-cols'>
              {
                footerContact.map((curr,index)=>{
                  return (
                  <div className='footer-contact' key={index}>
                    <div className='icon'>{curr.icon}</div>
                    <div className='footer-contact-text'>
                      <p>{curr.title}</p>
                      <p>{curr.details}</p>
                    </div>
                  </div>
                  )
                })
              }

            </div>
        </footer>
    </div>
  )
}

export default Footer