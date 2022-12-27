import React from 'react';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(true)

  const changeMode = () =>{
    setToggle(!toggle)
    const navbar = document.querySelector('.nav-container');
    const input = document.querySelector('.input-country');
    const select = document.querySelector('.input-region');
     const link = document.querySelectorAll('.country-link');
    document.body.classList.toggle('dark-theme')
    navbar.classList.toggle('dark-theme')
    input.classList.toggle('dark-theme')
    select.classList.toggle('dark-theme')
    link.forEach(item =>  item.classList.toggle('dark-theme'))
    

  }
  return (  
    <>  
      <div className='nav-container'>
        <h4 className='nav-text'>Where in the world?</h4>
        <p className='mode'><i class="fas fa-moon"></i>{toggle? 'Dark Mode':'Light Mode'}<Switch  onClick={() =>changeMode()} /></p>
      </div>
      <hr/>
    </>

  )
}

export default Navbar
