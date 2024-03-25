import React, {  useEffect, useState } from 'react';
import { validatorFun } from './validator';


function Contactform() {
   const [message,setMessage]=useState([])






    const [userDetail, setUserDetails] = useState({
        name: "",
        email: "",
        number: "",
        message: ""
    })
    const handleData = (e) => {
        
        setUserDetails({ ...userDetail, [e.target.name]: e.target.value });

    }
    const handleSubmit = (e) => {
        let errmessage=validatorFun(userDetail.email,userDetail.number);
        setMessage(errmessage)
        e.preventDefault();
        console.log(message);
        console.log(userDetail);
        if(message)return;

    }
   
    return (
        <>

            <form onSubmit={handleSubmit}>

                <input type="text"
                    name='name'
                    placeholder='Enter Your Name'
                    value={userDetail.name}
                    onChange={handleData} />
                <br />
                <input type="text"
                    name='email'
                    placeholder='Enter Your Email'
                    value={userDetail.email}
                    onChange={handleData} />
                <br />
                <input type='text'
                    name='number'
                    value={userDetail.number}
                    placeholder='enter your number'
                    onChange={handleData} />
                <br />
                <textarea
                    name='message'
                    value={userDetail.message}
                    placeholder='enter your message' onChange={handleData} />
                <br />

                <button type='submit'>Submit</button>



            </form>
            

        </>
    )
}

export default Contactform;
