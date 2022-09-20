import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header/Header'

  
function InitialEd() {
  
  return (
    <div className="main">      
       <Sidebar />
       <Header />
    <div className='dash-cont'>
            <div className='icr-main'>
              <h6>INITIATE EXPENSE</h6>            
           </div>
       <div className='form-icr'>
        <div>
       <label style={{marginLeft:'50px', marginTop:'20px', justifyContent:'space-evenly'}}>
            <p style={{color:'black', fontSize:'10px'}}>Document Number</p>
            <input name="Document Number" style={{width:'180px'}}/>
          </label>
          <label style={{marginLeft:'30px', marginTop:'20px'}}>
           <p style={{color:'black', fontSize:'10px'}}>Expense Type</p>
           <select name="Expense Type" style={{width:'180px', height:'28px'}}>
               <option value=""></option>
               <option value="Fresh Corperate Credits Workflow">Fresh Corperate Credits Workflow</option>
               <option value="Renewal of Corperate Credits Workflow">Renewal of Corperate Credits Workflow</option>
               <option value="Contigent Liabilities Workflow">Contigent Liabilities Workflow</option>
               <option value="Cash-backed Workflow">Cash-backed Workflow</option>
           </select>
         </label>
         <label style={{marginLeft:'35px', marginTop:'20px'}}>
            <p style={{color:'black', fontSize:'10px'}}>Title</p>
            <input name="Title" style={{width:'300px'}}/>
          </label>
          </div>
         <div className='form-2'>
          <label style={{marginLeft:'10px', marginTop:'100px'}}>
            <p style={{color:'black', fontSize:'10px'}}>Bank</p>
            
             <select name="Bank" style={{width:'180px', height:'28px'}}>
               <option value=""></option>
               <option value="First Bank">First Bank</option>
               <option value="Guaranty Trust Bank">Guaranty Trust Bank</option>
               <option value="Union Bank">Union Bank</option>
               <option value="fcmb">FCMB</option>
               <option value="Zenit Bank">Zenit Bank</option>
           </select>
          </label>
          <label style={{marginLeft:'30px', marginTop:'100px'}}>
            <p style={{color:'black', fontSize:'10px'}}>Account Number</p>
            <input name="Account Number" style={{width:'180px'}}/>
          </label>
          <label style={{marginLeft:'35px', marginTop:'100px'}}>
            <p style={{color:'black', fontSize:'10px'}}>Account Name</p>
            <input name="Account Name" style={{width:'300px'}}/>
          </label>
       </div>
       <div className='form-3'>
       <label style={{marginLeft:'30px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Subtotal</p>
            <input name="Subtotal" style={{width:'180px'}}/>
          </label>
          <label style={{marginLeft:'30px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Final Amount</p>
            <input name="Final Amount" style={{width:'180px'}}/>
          </label>
          <label style={{marginLeft:'35px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Description</p>
            <input name="Description" style={{width:'300px'}}/>
          </label>
       </div>
       <div className='form-4'>
          <label style={{marginLeft:'30px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Reviewers</p>
            
             <select name="reviewers" style={{width:'180px', height:'28px'}}>
               <option value=""></option>
               <option value="paul abiodun">Paul Abiodun</option>
               <option value="sandra olusola">Sandra Olusola</option>
               <option value="ogunsakin olusola">Ogunsakin Olusola</option>
               <option value="omiyale cecilia">Omiyale Cecilia</option>
               <option value="cyril ebeleme">Cyril Ebeleme</option>
           </select>
          </label>
          <label style={{marginLeft:'30px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Approval</p>
            <input name="Approval" style={{width:'180px'}}/>
          </label>
          <label style={{marginLeft:'35px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Comments</p>
            <input name="Comments" style={{width:'300px'}}/>
          </label>
       </div>
       
       <h6 style={{marginTop:'360px', marginLeft:'-725px', fontWeight:'bold', fontSize:'14px'}}>Supporting Documents</h6>
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
         <button style={{height:'40px', marginTop:'500px',
          marginLeft:'-25rem', width:'150px', 
          borderRadius:'20px', backgroundColor:'red', 
          color:'#fff', borderColor:'red', 
          fontSize:'12px', fontWeight:'bold'}}>CREATE</button>
       </div>
    </div>
    </div>
  )
}

export default InitialEd
