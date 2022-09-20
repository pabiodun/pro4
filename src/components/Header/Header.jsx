import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'
import { MDBContainer } from "mdb-react-ui-kit";
import logo1 from "../../images/logo1.png";




function Header() {
  
 
  return (
   
      <div className='navigation'>       
          <Link to='/' style={{ textDecoration:'none'}}><img src={logo1}
         className="img"
         alt="avatar"
         style={{paddingLeft:'40px'}}
       /></Link>
             <Navbar className='nav-menu'>  
                   
                <Nav>                 
                    
                 <ul>
                     <Link to='/branchcode' className='nav-link' style={{textDecoration:'none'}}><li>Branch Code:
                        <p>EUps</p>
                    </li></Link>
                       <Link to='/branchname' className='nav-link' style={{textDecoration:'none'}}> <li>Branch Name:
                        <p>PTB Victoria Island</p>
                        </li></Link>
                      <Link to='/user' className='nav-link' style={{textDecoration:'none'}}> <li>User Role:
                        <p>RM</p>
                    </li></Link>
                </ul>                
  
            </Nav>     
            
        </Navbar>
        
        <>
            
            <div className=''>
    <MDBContainer className="my-5 d-flex justify-content-center">
    <i class="bi bi-bell-fill" style={{color:'red', marginTop:'10px'}}></i>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        className="rounded-circle"
        alt="Avatar"
        font-sizes='10px'
        style={{marginTop:'-30px', paddingLeft:''}}
      />
    </MDBContainer>
           </div>
            <Nav className='nav-drop'>
            <NavDropdown title={
        <span className="" style={{color:'#000000'}}>{'User Name'}</span>
    } >
                <NavDropdown.Item className='log-drop'>
                    <i class="bi bi-box-arrow-right"></i>
                  Logout
                </NavDropdown.Item>
            </NavDropdown>
        </Nav> </>
    </div>
  )
}

export default Header
