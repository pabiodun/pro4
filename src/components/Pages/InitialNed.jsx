import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header/Header'


function InitialNed() {
  return (
    <div className="main">      
       <Sidebar />
       <Header />
    <div className='dash-cont'>
      <div className='icr-main'>
    <h6>Initiate Non-Expense</h6>
    </div>
    <div className='form-icr'>
        <div>
       <label style={{marginLeft:'50px', marginTop:'20px', justifyContent:'space-evenly'}}>
            <p style={{color:'black', fontSize:'10px'}}>Document Number</p>
            <input name="document number" style={{width:'180px'}}/>
          </label>
          <label style={{marginLeft:'30px', marginTop:'20px'}}>
           <p style={{color:'black', fontSize:'10px'}}>Document Type</p>
           <select name="document type" style={{width:'180px', height:'28px'}}>
               <option value=""></option>
               <option value="fresh corperate credits workflow">Fresh Corperate Credits Workflow</option>
               <option value="renewal of corperate credits workflow">Renewal of Corperate Credits Workflow</option>
               <option value="contigent liabilities workflow">Contigent Liabilities Workflow</option>
               <option value="cash-backed workflow">Cash-backed Workflow</option>
           </select>
         </label>
         <label style={{marginLeft:'35px', marginTop:'20px'}}>
            <p style={{color:'black', fontSize:'10px'}}>Title</p>
            <input name="title" style={{width:'300px'}}/>
          </label>
          </div>
          <div className='form-2'>
          <label style={{marginLeft:'10px', marginTop:'100px'}}>
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
          <label style={{marginLeft:'30px', marginTop:'100px'}}>
            <p style={{color:'black', fontSize:'10px'}}>Description</p>
            <input name="description" style={{width:'300px'}}/>
          </label>
          <label style={{marginLeft:'35px', marginTop:'100px'}}>
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
       <label style={{marginLeft:'30px', marginTop:''}}>
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
         <p style={{marginTop:'410px', marginLeft:'-720px', 
          fontSize:'12px', color:'black'}}>Content</p>

         <button style={{height:'40px', marginTop:'500px',
          marginLeft:'15rem', width:'150px', 
          borderRadius:'20px', backgroundColor:'red', 
          color:'#fff', borderColor:'red', 
          fontSize:'12px', fontWeight:'bold'}}>CREATE</button>
       
         </div>
      </div>
     </div>
  )
}

export default InitialNed
