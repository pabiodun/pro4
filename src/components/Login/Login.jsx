import React, { useState, useEffect, useHistory } from 'react'
import Form from "react-bootstrap/Form"
import logo1 from '../../images/logo1.png'
import Button from "react-bootstrap/Button";
import ptbpaul from '../../images/ptbpaul.png'
import { Link } from 'react-router-dom'
import './Login.css'
import { loginUser } from "../../api";
import { useLocation, Navigate } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  })

  const [userData, setUserData] = useState("")
//   const state = useState();
// useState(() => {
//   if (localStorage.getItem('user name')) {
//     state.push('/')
//   }
// }, [])

  const location = useLocation();

  const pageLocation = location.pathname;

  console.log(pageLocation, "pageLocation")



  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  }

  const handleUserLogin = async () => {
    const body = data;
    const response = await loginUser(body);

    console.log(response, "response")

    if (response && response.data) {
      setUserData(response.data.signedToken);

    } else {
    }
  }
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserLogin();
  }

  console.log(data, "data")

  return (
    <div>
      
      <img src={logo1}
        className="img"
        alt="avatar"
        style={{ paddingTop: '8rem', marginLeft: '8rem' }}
      />
      <div className="Login">
        <Form onSubmit={handleSubmit} className='form-group'>
          <Form.Group size="lg" controlId="email" style={{ marginBottom: '20px', fontSize:'14px' }}>

            <Form.Label>USERNAME</Form.Label>

            <Form.Control

              autoFocus
              type="text"
              name="username"
              value={data.username}

              onChange={handleChange}

            />

          </Form.Group>

          <Form.Group size="lg" controlId="password" style={{fontSize:'14px'}}>

            <Form.Label>PASSWORD</Form.Label>

            <Form.Control

              type="password"
              name="password"
              value={data.password}

              onChange={handleChange}

            />

            <input type="checkbox" name="remember" value="Remember"
              style={{ marginTop: '12px' }} /><p style={{ marginLeft: '20px', fontSize: '10px', color: 'gray', marginTop: '-21px' }}>Remember Me</p>
            <p style={{ display: 'flex', marginLeft: '200px', fontSize: '10px', color: 'gray', marginTop: '-32px' }}>Forgot Password?
              <p style={{ marginTop: '-4px', padding: '4px', fontSize: '10px' }}>Click Here?</p>
            </p>
          </Form.Group>
            <Button style={{
              backgroundColor: 'red', borderColor: 'red', width: '10rem', fontSize: '10px', borderRadius: '20px', borderWidth: '3px'
            }} block size="lg" type="submit" onClick={handleSubmit}>

              LOGIN

            </Button>
          <Link to='/'>
            <Button style={{
              backgroundColor: '#fff', color: 'red', borderColor: 'red',
              width: '10rem', fontSize: '10px', borderRadius: '20px', borderWidth: '2px', marginLeft: '32px'
            }}
              block size="lg" type="submit" disabled={!validateForm()}>

              CREATE ACCOUNT
            </Button>
          </Link>
        </Form>

      </div>
      <div className=''>
        <img src={ptbpaul}
          className="img"
          alt="avatar"
          style={{ marginLeft: '45rem', marginTop: '-535px', height: '100vh' }}
        />
      </div>
    </div>
  )
}

export default Login