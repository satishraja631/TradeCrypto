import React from 'react'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <a className='navbar-logo' href='/'>
              TradeCrypto
            </a>

            <ul className='nav-menu'>
                <li className='nav-item'>
                    <a href='/' className='nav-links'>
                     Home
                    </a>
                </li>
            
                <li className='nav-item'>
                    <a href='/watchlist' className='nav-links'>
                     Watchlist
                    </a>
                </li>
                <li className='nav-item'>
                    <a href='/paper-trade' className='nav-links'>
                     Portfolio
                    </a>
                </li>
            </ul>

            
        </div>

    </nav>
  )
}

export default Navbar