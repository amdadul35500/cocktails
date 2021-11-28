import React from 'react';
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom';

const Nabvar = () => {
    return (
        <>
           <nav className="navbar">
               <div className='nav-center'>
                   <NavLink to="/" >
                   <img src={logo} alt='cocktail db logo' className='logo' />
                   </NavLink>
                   
                   <ul className='nav-links'>
                       <li>
                            <NavLink to="/"  className={(navInfo)=> (navInfo.isActive ? "visibleColor" : "") } >
                                home
                            </NavLink>
                       </li>
                       <li>
                            <NavLink to="/about"  className={(navInfo)=> (navInfo.isActive ? "visibleColor" : "") }>
                                about
                            </NavLink>
                       </li>
                   </ul>
               </div>
           </nav>
        </>
    )
}

export default Nabvar;
