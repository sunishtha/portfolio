import React,{useState} from 'react'
import './Navbar.css'
import {AiOutlineMenu} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'


const Navbar = () => {
  const [clicks,setClick]=useState(false)
const [showCross,setShowCross]=useState(false)

  const handleClick=()=>{
    setClick(!clicks);
    setShowCross(!showCross)
  }
  const handleCross=()=>{
    setClick(!clicks);
    setShowCross(!showCross)
  }
  return (
    <div className='nav'>
    <div className='navbar-container'>
      <div className='navbar-heading'>
         <h2>Portfolio</h2>
        
          <div className='nav-menu'>
             {!showCross ?
            <AiOutlineMenu
          onClick={handleClick}
          size={'30px'} />:
           <ImCross 
           onClick={handleCross}
           size={'22px'} />
             }
           </div>
      </div>
     {!clicks ?
<div className='navbar-items'>
    <p>Home</p>
       <p>Skills</p>
       <p>Portfolio</p>
       <p>Contact</p>
     </div>     
     :
     <div className='navbar-items-col'>
       <p>Home</p>
       <p>Skills</p>
       <p>Portfolio</p>
       <p>Contact</p>
     </div> }
    </div></div>
  )
}

export default Navbar
