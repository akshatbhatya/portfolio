import React from 'react'

function Contactform() {
    const handleSubmit=(e)=>{
        e.preventDefault()

    }
  return (
    <>

    <form onSubmit={handleSubmit}>

        <input type="text" placeholder='Enter Your Name'/>
        <br/>
        <input type="email" placeholder='Enter Your Email'/>
        <br/>
        <input type='text' placeholder='enter your number'/>
        <br/>
        <textarea placeholder='enter your message'/>
        <br/>

        <button type='submit'>Submit</button>



    </form>
      
    </>
  )
}

export default Contactform;
