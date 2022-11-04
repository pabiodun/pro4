import React, { useState } from "react";
import { Grid, Typography, TextField } from "@mui/material";
import Dashboard from '../../components/Pages/Dashboard'
import logo1 from '../../images/logo1.png'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { baseUrl } from "../../api/api"
import { Link } from 'react-router-dom'
import axios from "axios";
import './Login.css'
import ptbpaul from '../../images/ptbpaul.png'


const Login1 = () => {
  const [data, setData] = useState({
    emailOrUserName: "",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const [userData, setUserData] = useState({});

  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  //   const handleChange = (e) => {
  //     setData({
  //       ...data,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const UserLogin = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/user/UserAccess/Authenticate`,
        data
      );
      console.log(response);
      setMsg("");
      setUserData(response.data.data)
      setShow(true);
      clearFields();
    } catch (err) {
      console.log(err);
      setMsg(err.response.data.responseMessage);
    } finally {
    }
  };

  const validateSchema = () => {
    const error = {};
    const { emailOrUserName, password } = data;

    if (emailOrUserName === "") {
      error.emailOrUserName = "This field is required";
    }

    if (password === "") {
      error.password = "This field is required";
    }
    return error;
  };

  const clearFields = () => {
    setData({
      emailOrUserName: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorList = validateSchema();
    setErrors(errorList);
    if (Object.keys(errorList).length > 0) return;
    setErrors({});
    UserLogin();
  };

  console.log(data);
  return (

    <div>
      
      <img src={logo1}
        className="img"
        alt="avatar"
        style={{ paddingTop: '8rem', marginLeft: '8rem' }}
      />
      <div className="Login">
      {!show && (
        <Form onSubmit={handleSubmit} className='form-group'>
          <Form.Group size="lg" controlId="email" style={{ marginBottom: '20px', fontSize:'14px' }}>

            <Form.Label>USERNAME</Form.Label>

            <Form.Control

            name="emailOrUserName"
            type="text"
            onChange={handleChange}
            value={data.emailOrUserName}
            error={errors.emailOrUserName ? true : false}

            />
 
            {errors && errors.emailOrUserName && (
             <Typography sx={{ color: "red", fontSize: "0.8em" }}>
              {errors.emailOrUserName}
            </Typography>
          )}
          </Form.Group>

          <Form.Group size="lg" controlId="password" style={{fontSize:'14px'}}>

            <Form.Label>PASSWORD</Form.Label>

            <Form.Control

            name="password"
            type=""
            onChange={handleChange}
            value={data.password}
            error={errors.password ? true : false}
         />
         {errors && errors.password && (
           <Typography sx={{ color: "red", fontSize: "0.8em" }}>
             {errors.password}
           </Typography>
         )}

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
              block size="lg" type="submit" >

              CREATE ACCOUNT
            </Button>
          </Link>
        </Form>
      )}
      {msg && (
        <Grid>
          <Typography sx={{ color: "red", fontSize: "0.8em" }}>
            {msg}
          </Typography>
        </Grid>
      )}

      {/* {show && <Dashboard userData={userData}   />} */}
      </div>
      <div className=''>
        <img src={ptbpaul}
          className="img"
          alt="avatar"
          style={{ marginLeft: '45rem', marginTop: '-535px', height: '100vh' }}
        />
        </div>
         {show && <Dashboard userData={userData}  />}
      
      
    </div>
    // <div>
    //   {!show && (
    //     <Grid
    //       container
    //       spacing={2}
    //       sx={{ justifyContent: "center", alignItems: "end" }}
    //     >
    //       <Grid item>
    //         <label>Username</label>
    //         <br />
    //         <TextField
    //           name="emailOrUserName"
    //           type="text"
    //           onChange={handleChange}
    //           value={data.emailOrUserName}
    //           error={errors.emailOrUserName ? true : false}
    //         />
    //         {errors && errors.emailOrUserName && (
    //           <Typography sx={{ color: "red", fontSize: "0.8em" }}>
    //             {errors.emailOrUserName}
    //           </Typography>
    //         )}
    //       </Grid>

    //       <Grid item>
    //         <label>Password</label>
    //         <br />
    //         <TextField
    //           name="password"
    //           type="text"
    //           onChange={handleChange}
    //           value={data.password}
    //           error={errors.password ? true : false}
    //         />
    //         {errors && errors.password && (
    //           <Typography sx={{ color: "red", fontSize: "0.8em" }}>
    //             {errors.password}
    //           </Typography>
    //         )}
    //       </Grid>

    //       <Grid>
    //         <Button type="submit" onClick={handleSubmit} variant="contained">
    //           LOGIN
    //         </Button>
    //       </Grid>
    //     </Grid>
    //   )}
    //   {msg && (
    //     <Grid>
    //       <Typography sx={{ color: "red", fontSize: "0.8em" }}>
    //         {msg}
    //       </Typography>
    //     </Grid>
    //   )}

    //   {show && <HomePage userData={userData}   />}
    // </div>
  );
};

export default Login1;