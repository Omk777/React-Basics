import React from 'react'

const About = () => {

    const list=["Apple","Banana","Grapes"]
  return (
    <div>
      <h1>
        {
        
        list.map((c,index)=>{
            return <li key={index}>
                {c}
            </li>
        })
        
        
        }
      </h1>
    </div>
  )
}

export default About