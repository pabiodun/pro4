import React from 'react'
import './Page.css'
import Sidebar from '../Sidebar'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';



function InitialCr() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  

 

  return (
    <div className="main">      
       <Sidebar />
       <Header />
        <div className='dash-cont'>
            <div className='icr-main'>
              <h6>INITIATE CREDIT REQUEST</h6>            
           </div>
       <div className='form-icr'>
       <p style={{color:'black', fontSize:'10px', marginLeft:'45px',  marginTop:'18px'}}>Request Number</p>
       <FormControl sx={{ m: -10, minWidth: 150, mt: 5 }}  variant="outlined">
       <TextField          
          id=""
          label="*"
          defaultValue=""
          size="small" 
          height="20"
          minWidth="100"
        />
        
      </FormControl>
       {/* <label style={{marginLeft:'50px', marginTop:'18px', justifyContent:'space-evenly'}}>
            <p style={{color:'black', fontSize:'10px'}}>Request Number</p>
            <input name="Request Number" style={{width:'180px', height:'35px'}}/>
          </label> */}

          <p style={{color:'black', fontSize:'10px', marginLeft:'105px', marginTop:'18px'}}>Request Type </p>
      <FormControl sx={{ m: -8, minWidth: 180, mt: 5 }} size="small" height="20">
        <InputLabel id="demo-simple-select-label" style={{}}></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          
        >
          <Link to='/initiatecr1' style={{textDecoration:'none', color:'black'}}>
          <MenuItem value={10} style={{fontSize:'9px'}}>Fresh Corperate Credits Workflow</MenuItem></Link>
          <MenuItem value={20} style={{fontSize:'9px'}}>Renewal of Corperate Credits Workflow</MenuItem>
          <MenuItem value={30} style={{fontSize:'9px'}}>Contigent Liabilities Workflow</MenuItem>
          <MenuItem value={30} style={{fontSize:'9px'}}>Cash-backed Workflow</MenuItem>
        </Select>
      </FormControl>
    
          {/* <div style={{marginLeft:'30px', marginTop:'20px'}}>
          <p style={{color:'black', fontSize:'10px'}}>Request Type </p>
          <Dropdown title='' className='dropdown1'>
            <Dropdown.Item as='a' href='/initiatecr1' style={{}}>
            Fresh Corperate Credits Workflow
            </Dropdown.Item>
            <Dropdown.Item as='a' href=''>
            Renewal of Corperate Credits Workflow
            </Dropdown.Item>
          </Dropdown>
          </div> */}
          {/* <label style={{marginLeft:'30px', marginTop:'20px'}}>
         <p style={{color:'black', fontSize:'10px'}}>Request Type</p>
           <select name="Request Type" style={{width:'180px'}}>
               <option value=""></option>
               <option value="Fresh Corperate Credits Workflow">Fresh Corperate Credits Workflow</option>
               <option value="Renewal of Corperate Credits Workflow">Renewal of Corperate Credits Workflow</option>
               <option value="Contigent Liabilities Workflow">Contigent Liabilities Workflow</option>
               <option value="Cash-backed Workflow">Cash-backed Workflow</option>
           </select>
         </label>
          */}
            </div>
    </div>
    </div>
  )
}

export default InitialCr
