import React from 'react';
import tbird from './tbird.png';
import home from './home.png';
import notif from './notif.png';
import msg from './msg.png';

import './Navbar.css';

const Navbar = () => {
    return(
    <div className='Nav-shadow'>
       <div className='container'>
       <div className='Nav'>
        
            <div className='Nav-links'>
                <ul className='Nav-ul'>
                    <li><span> <img id='navimage1' alt='' src={home} /> </span> <a href='#home'> Home </a></li>
                    <li><span> <img id='navimage1' alt='' src={notif} /> </span> <a href='#home'> Notifications </a></li>
                    <li><span> <img id='navimage1' alt='' src={msg} /> </span> <a href='#home'> Messages </a></li>
                </ul>
            </div>
            
            <div className='Nav-img'>

            <img id='navimage' alt='' src={tbird} />

            </div>
            
            <div className='Nav-input'>
                <input className='Nav-search' placeholder='search twitter' type='search'></input>
                <button>Tweet</button>
            </div>
         </div>
      </div>    
    </div>
    )
}





export default Navbar;