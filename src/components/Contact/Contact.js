import React,{useState} from 'react'
import './Contact.css'
import {IoMdDoneAll} from 'react-icons/io'

const Contact = () => {
  const [updateContact,setUpdateContact]=useState(false)
const handleSubmit=()=>{
  setUpdateContact(!updateContact)
}

  return (
    <div className='contact-container'>
      <h2>Contact Page</h2>
      {
        !updateContact ? 
     
      <div className='contact-section'>

        <div className='contact-name'>Name:
          <input type='text' placeholder='Name...' required />
        </div>

        <div className='contact-email'>Email:   <input type='email' placeholder='Email..' required />
        </div>

        <div className='contact-message'>Message: <textarea name="message" rows="7"  placeholder='Write message here...' cols="40"></textarea>
        </div>

        <div className='contact-submit'><button  
        onClick={handleSubmit}
        >Submit</button></div>
      </div> :

      <div className='submit'>
       <h3>Your response has been submitted !</h3>
       <span><IoMdDoneAll color='	#00FF00' size={'25px'}/></span>
      </div>
      }
    </div>
  )
}

export default Contact
