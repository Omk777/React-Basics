import React from 'react'

function Contact() {
  const handleSubmit=(formData)=>{

      console.log(formData.entries());
      console.log(Object.fromEntries(formData.entries()));
      
      
  }
  return (
    <div>
      <section className='section-contact'>
        <h2 className='container-title'>
          Contact us
        </h2>
      <div className='contact-wrapper container'>
          <form action={handleSubmit}>
          <input type="text" required autoComplete='false' placeholder='Enter your name' name='username' className='form-control' />
          <input type="email" required autoComplete='false' placeholder='Enter your email' name='email' className='form-control' />
         <textarea name="message" rows="10" placeholder='Enter your message' autoComplete='false' className='form-control'></textarea>
         <button type='submit' value='send'>Send</button>
        </form>
      </div>
      </section>
    </div>
  )
}

export default Contact