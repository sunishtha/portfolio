import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import profile from '../../images/pic.png'
import {BsLinkedin,BsGithub} from 'react-icons/bs'

const Header = () => {
  return (
    <div className='header-container'>
        <Navbar/><br/>
      <div className='header-section'>
       <div className='header-content'>
        <h2>Hi, I am Sunishtha</h2>
        <h3>Frontend Developer</h3>
        <h5>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</h5>
        
        <button>Download CV</button>
        <div className='icons'>
          <a href="https://github.com/sunishtha"><BsGithub className='icon' size={'25px'}/></a>
          
          <a href="https://www.linkedin.com/in/sunishtha-sharnagat-b66b0421b">< BsLinkedin  className='icon' size={'25px'}/></a>
        </div>
        </div> 
        <div className='header-image'>
            <img src={profile} alt='profile' />
        </div> 

      </div>
    </div>
  )
}

export default Header
