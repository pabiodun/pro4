import React, { useState } from 'react'
import Form from "react-bootstrap/Form"
import logo1 from '../../images/logo1.png'
import Button from "react-bootstrap/Button";
import ptbpaul from '../../images/ptbpaul.png'
import { Link } from 'react-router-dom'
import './Login.css'

function Create() {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [name, setName] = useState("");
  
    function validateForm() {
  
      return email.length > 0 && password.length > 0;
  
    }
  
    function handleSubmit(event) {
  
      event.preventDefault();
    }

  return (
    <div>
      <img src={logo1}
             className="img"
             alt="avatar"
             style={{paddingTop:'8rem', marginLeft:'8rem'}}
           />
             <div className="Login">
                <Form onSubmit={handleSubmit} className='form-group'>

                <Form.Group size="lg" controlId="name" style={{marginBottom:'20px'}}> 

            <Form.Label>NAME</Form.Label>

            <Form.Control

            autoFocus

            type="name"

            value={name}

            onChange={(e) => setName(e.target.value)}

            />

            </Form.Group>

                <Form.Group size="lg" controlId="email" style={{marginBottom:'15px'}}> 

                        <Form.Label>EMAIL</Form.Label>

                        <Form.Control

                        autoFocus

                        type="email"

                        value={email}

                        onChange={(e) => setEmail(e.target.value)}

                        />

</Form.Group>

<Form.Group size="lg" controlId="password" >

<Form.Label>PASSWORD</Form.Label>

<Form.Control

  type="password"

  value={password}

  onChange={(e) => setPassword(e.target.value)}

/>
<input type="checkbox" name="remember" value="Remember" 
style={{marginTop:'12px'}}/><p  style={{marginLeft:'20px', fontSize:'10px', color:'gray', marginTop:'-21px'}}>Remember Me</p>
<p style={{display:'flex', marginLeft:'200px', fontSize:'10px', color:'gray', marginTop:'-32px'}}>Forgot Password?
<p style={{marginTop:'-4px', padding:'4px', fontSize:'10px'}}>Click Here?</p>
</p>
</Form.Group>

<Link to='/'>
<Button style={{
    backgroundColor:'red', borderColor:'red', width:'10rem', fontSize:'10px', borderRadius:'20px', borderWidth:'3px'
}} block size="lg" type="submit" disabled={!validateForm()}>

SIGN UP
</Button>
</Link>
<Link to='/login'>
<Button style={{
    backgroundColor:'#fff', color:'red', borderColor:'red', 
    width:'10rem', fontSize:'10px', borderRadius:'20px', borderWidth:'2px', marginLeft:'32px'
}} 
block size="lg" type="submit" disabled={!validateForm()}>

LOGIN
</Button>
</Link>
</Form>
                
 </div>
        <div className=''>
            <img src={ptbpaul}
             className="img"
             alt="avatar"
             style={{marginLeft:'45rem', marginTop:'-620px', height:'100vh', position:'fixed'}}
           />
        </div>
    </div>
  )
}

export default Create
