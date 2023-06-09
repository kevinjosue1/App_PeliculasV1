import React from 'react'
import '../styles/navbar.css'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-list'> 
        <li className='navbar-item'>
            <a href='../pages/Inicio.js'>Inicio</a>
        </li>
        <li className='navbar-item'>
            <a href='../pages/Acerca.js'>Acerca</a>
        </li>
        <li className='navbar-item'>
            <a href='../pages/Contacto.js'>Contacto</a>
        </li>
        </ul>
    </nav>
  )
}

export default Navbar