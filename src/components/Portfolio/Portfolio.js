import React from 'react'
import './Portfolio.css'
import cart from '../../images/cart.jpg'
import movie from '../../images/movie1.png'
import portfolio from '../../images/portfolio.png'


const Portfolio = () => {
  
  return (
    <div className='portfolio-container'>
      <h2>My Portfolio</h2>
   
    <div className='portfolio-section'>
     <div>
     <img  className='portfolio-img'  src={cart} alt='img'/>
     <h5>E-Commerce</h5>
     </div>
     <div>
     <img   className='portfolio-img' src={movie} alt='img'/>
     <h5>Movie Player</h5>

     </div>
     <div>
     <img  className='portfolio-img'  src={portfolio} alt='img'/>
     <h5>Portfolio</h5>

     </div>
  
    </div>
  </div>
  )
}

export default Portfolio
