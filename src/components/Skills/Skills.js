import React from 'react'
import './Skills.css'
import {AiOutlineHtml5}  from 'react-icons/ai'
import {DiCss3}  from 'react-icons/di'
import {SiJavascript}  from 'react-icons/si'
import {FaReact} from 'react-icons/fa'

const Skills = () => {
  return (
    <div className='skill-container'>
     <div className='skill-header'><h2>My Skills</h2></div>
  <div className='skill-section'>
   <div className='skills'>
    <div><AiOutlineHtml5 size={'45px'}/></div>
    <div><h4>HTML </h4></div>
    <h6>Free resource that will help nderstand thecv  process andisei impro are of vquality.</h6>
    </div>

    <div className='skills'>
      <div><DiCss3 size={'45px'} /></div>
    <div><h4>CSS </h4></div>
   <h6>Free resource that will help nderstand thecv  process andisei impro are of vquality.</h6>
    </div>

    <div className='skills'>
      <div><SiJavascript size={'45px'} /></div>
    <div><h4>Javascript </h4></div>
    <h6>Free resource that will help nderstand thecv  process andisei impro are of vquality.</h6>
    </div>

    <div className='skills'>
      <div><FaReact size={'45px'}/></div>
    <div><h4>React </h4></div>
    <h6>Free resource that will help nderstand thecv  process andisei impro are of vquality.</h6>
    </div>
   


  </div>
</div>
  )
}

export default Skills
