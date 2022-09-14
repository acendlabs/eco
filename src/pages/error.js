import React from 'react'
import { Link } from 'react-router-dom';
import angrygirl from '../images/angrygirl.png';

function Error() {
  return (
    <div className='md:container'> 
      <h2 className='text-center p-5 font-medium text-lgmd:font-semi-bold md:text-xl lg:text-2xl lg:font-bold'>Page Unavaible </h2>
      <div className="md:flex md:gap-20 lg:gap-44">
        <div>
          <img className='h-32 ml-[37%]  md:h-44 lg:h-80' src={angrygirl} alt="" />
        </div>
        <div className='lg:mt-20'>
          <p className='text-center md:text-justify pt-5 md:text-xl lg:text-2xl'>...oops there is no page here</p>
        <p className='text-center md:mt-5 md:text-xl lg:text-2xl '><Link className='text-green-600 hover:underline' to='/'>Click here</Link> to go back to the homepage </p>
        </div>
        
      </div>
      
    </div>
    
  )
}

export default Error;