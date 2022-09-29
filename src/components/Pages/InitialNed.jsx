import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header/Header'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import TextEditor from './TextEditor';


function InitialNed() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="">      
       <Sidebar />
       <Header />
    <div className='dash-cont2'>
      <div className='icr-main'>
    <h6 style={{marginTop:''}}>Initiate Non-Expense</h6>
    </div>
    <div className='form-icrx2'>
        <div>
        <p style={{color:'black', fontSize:'10px',  marginLeft:'50px', marginTop:'30px'}}>Document Number</p>
        <FormControl sx={{ m: 6, minWidth: 180, mt: -1 }}  variant="outlined">
       <TextField          
          id=""
          label="*"
          defaultValue=""
          size="small" 
          height="20"
          minWidth="100"
        />
        </FormControl>
       {/* <label style={{marginLeft:'50px', marginTop:'20px', justifyContent:'space-evenly'}}>
            <p style={{color:'black', fontSize:'10px'}}>Document Number</p>
            <input name="document number" style={{width:'180px'}}/>
          </label> */}
          
          <p style={{color:'black', fontSize:'10px', marginLeft:'297px', marginTop:'-110px'}}>Document Type</p>
          <FormControl sx={{ m: 37, minWidth: 180, mt: -1 }} size="small" height="20">
        <InputLabel id="demo-simple-select-label" style={{}}></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          
        >
          <MenuItem ></MenuItem>
          <MenuItem value={10} style={{fontSize:'9px'}}>Fresh Corperate Credits Workflow</MenuItem>
          <MenuItem value={20} style={{fontSize:'9px'}}>Renewal of Corperate Credits Workflow</MenuItem>
          <MenuItem value={30} style={{fontSize:'9px'}}>Contigent Liabilities Workflow</MenuItem>
          <MenuItem value={30} style={{fontSize:'9px'}}>Cash-backed Workflow</MenuItem>
        </Select>
      </FormControl>
      <p style={{color:'black', fontSize:'10px', marginTop:'-360px', marginLeft:'500px'}}>Title</p>
      <FormControl sx={{ m: 62, minWidth: 300, mt: -1 }}  variant="outlined">
       <TextField          
          id="demo-simple-select"
          label="*"
          defaultValue=""
          size="small" 
          height="20"
          minWidth="100"
        />
        </FormControl>
          {/* <label style={{marginLeft:'30px', marginTop:'20px'}}>
           <p style={{color:'black', fontSize:'10px'}}>Document Type</p>
           <select name="document type" style={{width:'180px', height:'28px'}}>
               <option value=""></option>
               <option value="fresh corperate credits workflow">Fresh Corperate Credits Workflow</option>
               <option value="renewal of corperate credits workflow">Renewal of Corperate Credits Workflow</option>
               <option value="contigent liabilities workflow">Contigent Liabilities Workflow</option>
               <option value="cash-backed workflow">Cash-backed Workflow</option>
           </select>
         </label> */}
         {/* <label style={{marginLeft:'-230px', marginTop:'-10px'}}>
            <p style={{color:'black', fontSize:'10px'}}>Title</p>
            <input name="title" style={{width:'300px'}}/>
          </label> */}
          </div>
          <div className='form-2'>
          <label style={{marginLeft:'-520px', marginTop:'110px'}}>
            <p style={{color:'black', fontSize:'10px'}}>Department</p>
            
             <select name="department" style={{width:'180px', height:'28px'}}>
               <option value=""></option>
               <option value="frontend">Front End</option>
               <option value="ui/ux">UI/UX</option>
               <option value="software">Software</option>
               <option value="backend">Back End</option>
               <option value="devops">DevOps</option>
           </select>
          </label>
          <label style={{marginLeft:'30px', marginTop:'110px'}}>
            <p style={{color:'black', fontSize:'10px'}}>Description</p>
            <input name="description" style={{width:'300px'}}/>
          </label>
          <label style={{marginLeft:'35px', marginTop:'110px'}}>
          <p style={{color:'black', fontSize:'10px'}}>Reviewers</p>
            
            <select name="reviewers" style={{width:'180px', height:'28px'}}>
              <option value=""></option>
              <option value="tolu">Tolu Davids</option>
              <option value="cyril">Cyril Ebeleme</option>
              <option value="bode">Mr Bode</option>
              <option value="kenny">Kenny Ogunsanya</option>
              <option value="wale">Mr Wale</option>
          </select>
          </label>
       </div>
       <div className='form-3'>
       <label style={{marginLeft:'25px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Approval</p>
            <input name="approval" style={{width:'180px'}}/>
          </label>
          <label style={{marginLeft:'30px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Comments</p>
            <input name="comments" style={{width:'300px'}}/>
          </label>          
       </div>
       <h6 style={{marginTop:'280px', marginLeft:'-510px', fontWeight:'bold', fontSize:'14px'}}>Supporting Documents</h6>
       <div className='sup-doc' style={{marginLeft:'-155px'}}>
          Document Name
          <input name="" style={{width:'14rem', marginLeft:'20px', height:'35px'}}/>
         <div style={{backgroundColor:'#fff', height:'35px', width:'13rem', marginLeft:'23rem', 
                      borderRadius:'5px', marginTop:'-35px'}}>
                     <input type="file" 
                     style={{marginTop:'6px', marginLeft:'18px'}}
                     />
         </div>
          
         </div>         
         <TextEditor />
        </div>
        <div style={{marginTop:'-170px'}}>
         <button style={{height:'40px',
          marginLeft:'22rem', width:'150px', 
          borderRadius:'20px', backgroundColor:'red', 
          color:'#fff', borderColor:'red', 
          fontSize:'12px', fontWeight:'bold'}}>CREATE</button>
       
         </div>
      </div>
     </div>
  )
}

export default InitialNed
