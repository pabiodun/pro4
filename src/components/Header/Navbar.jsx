import React from 'react'
import './Navbar.css'
import { Nav, NavDropdown } from 'react-bootstrap'

function Navbar() {
  return (
    <div className='navigation'>
     
        
            <nav className='nav-menu'>
                <ul>
                    <li>Branch Code:
                        <p>EUps</p>
                    </li>
                    <li>Branch Name:
                    <p>PTB Victoria Island</p>
                    </li>
                    <li>User Role:
                    <p>RM</p>
                    </li>
                </ul>
                
            </nav>
        <nav className='div-icon'> 
            <i class="bi bi-bell-fill"></i>
        </nav>
        
        <Nav>
            <NavDropdown title="User Name">

            </NavDropdown>
        </Nav>
         
    
    </div>
  )
}

export default Navbar
