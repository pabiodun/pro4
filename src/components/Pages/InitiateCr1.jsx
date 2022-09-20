import React from 'react'
import './Page.css'
import Sidebar from '../Sidebar'
import Header from '../Header/Header'
import Form from '../Task/Form'

function InitiateCr1() {
  return (
    <div className="main">      
       <Sidebar />
       <Header />
        <div className='dash-cont'>
            <div className='icr-main'>
              <h6>INITIATE CREDIT REQUEST</h6>            
           </div>
       <div className='form-icrx'>
        <div className='form-1'>
       <label style={{marginLeft:'50px', marginTop:'20px', justifyContent:'space-evenly'}}>
            <p style={{color:'black', fontSize:'10px'}}>Branch Code</p>
            <input name="branch code" style={{width:'180px'}}/>
          </label>
          <label style={{marginLeft:'30px', marginTop:'20px'}}>
          <p style={{color:'black', fontSize:'10px'}}>Branch Name</p>
            <input name="branch name" style={{width:'200px'}}/>
         </label>
         <label style={{marginLeft:'2rem', marginTop:'20px'}}>
            <p style={{color:'black', fontSize:'10px'}}>Zone Name</p>
            <input name="zone name" style={{width:'280px'}}/>
          </label>
            </div>
            <div className='form-2'>
          <label style={{marginLeft:'0px', marginTop:'100px'}}>
            <p style={{color:'black', fontSize:'10px'}}>Area</p>
            <input name="area" style={{width:'180px'}}/>
          </label>
          </div>
          <div className='form-3'>
       <label style={{marginLeft:'574px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Customer ID</p>
            <input name="customerid" style={{width:'180px'}}/>
          </label>
          <button style={{height:'30px', marginTop:'32px',
          marginLeft:'2rem', width:'100px', 
          borderRadius:'20px', backgroundColor:'red', 
          color:'#fff', borderColor:'red', 
          fontSize:'12px', fontWeight:'bold'}}>SEARCH</button>
          </div>
          <div className='form-4'>
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Request Number</p>
            <input name="request number" style={{width:'170px'}}/>
          </label>
                      
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Request Type</p>
            <input name="request type" style={{width:'170px'}}/>
          </label>
          <label style={{marginLeft:'25px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Loan Type</p>
            <select name="loan type" style={{width:'170px', height:'28px'}}>
               <option value=""></option>
               <option value="commercial loan">Commercial Loan</option>
               <option value="cooperate loan">Cooperate Loan</option>
               <option value="agric loan">Agric Loan</option>
              
           </select>
          </label>
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Liability ID</p>
            <input name="liability id" style={{width:'170px'}}/>
          </label>
       </div>
       <div className='form-5'>
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>BVN</p>
            <input name="bvn" style={{width:'170px'}}/>
          </label>
                      
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>TIN</p>
            <input name="tin" style={{width:'170px'}}/>
          </label>
          <label style={{marginLeft:'25px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>SIC Code</p>
            <select name="sic code" style={{width:'170px', height:'28px'}}>
               <option value=""></option>
               <option value="commercial loan">Commercial Loan</option>
               <option value="cooperate loan">Cooperate Loan</option>
               <option value="agric loan">Agric Loan</option>
              
           </select>
          </label>
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Annual Review Date</p>
            <input type='date' name="annual review date" style={{width:'170px'}}/>
          </label>          
       </div>
       <p style={{color:'black', fontSize:'12px', marginTop:'455px', marginLeft:'-745px'}}>FACILITY DETAILS</p>
       <div className='form-6'>
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Name</p>
            <input name="name" style={{width:'170px'}}/>
          </label>
                      
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Type</p>
            <select name="type" style={{width:'90px', height:'28px'}}>
               <option value=""></option>
               <option value="new">New</option>
               <option value="renewal">Renewal</option>
                             
           </select>
          </label>
          <label style={{marginLeft:'25px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Currency</p>
            <select name="currency" style={{width:'170px', height:'28px'}}>
               <option value=""></option>
               <option value="ngn">NGN</option>
               <option value="usd">USD</option>
               <option value="cad">CAD</option>
               <option value="gbp">GBP</option>
               <option value="ghs">GHS</option>
           </select>
          </label>
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>SIC Code</p>
            <input name="sic code" style={{width:'250px'}}/>
          </label>          
       </div>
       <div className='form-7'>
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Current Limit (NGN)</p>
            <input name="current limit" style={{width:'140px'}}/>
          </label>
                      
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Current Exposure (NGN)</p>
            <input name="current exposure" style={{width:'140px', height:'28px'}}/>
          </label>
          <label style={{marginLeft:'25px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>New Increase/Decrease (+/-) (NGN)</p>
            <input name="new increase/decrease" style={{width:'250px', height:'28px'}}/>
          </label>
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Proposed Limit (NGN)</p>
            <input name="proposed limit" style={{width:'150px'}}/>
          </label>          
       </div>
       <div className='form-8'>
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>E&S Rating</p>
            <input name="current limit" style={{width:'120px'}}/>
          </label>
       </div>
       <p style={{color:'black', fontSize:'12px', marginTop:'800px', marginLeft:'-120px'}}>COLLATERAL DETAILS</p>
       <div className='form-9'>
       <Form />
       </div>
      
       {/* <div className='form-9'>
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Category</p>
            <select name="category" style={{width:'150px', height:'28px'}}>
               <option value=""></option>
               <option value="lease/sale">Lease/Sale Agreement</option>
               <option value="domiciliation">Domiciliation Of Proceeds</option>
               <option value="cooperate guarantee">Cooperate Guarantee</option>
               <option value="gbp">GBP</option>
               <option value="ghs">GHS</option>
           </select>           
          </label>
                      
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Type</p>
            <select name="type" style={{width:'90px', height:'28px'}}>
               <option value=""></option>
               <option value="new">New</option>
               <option value="renewal">Renewal</option>
                             
           </select>
          </label>
          <label style={{marginLeft:'25px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>OMV (NGN)</p>
            <input name="omv" style={{width:'90px'}}/>
          </label>
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>FSV (NGN)</p>
            <input name="fsv" style={{width:'90px'}}/>
          </label> 
          <label style={{marginLeft:'20px', marginTop:''}}>
            <p style={{color:'black', fontSize:'10px'}}>Status</p>
            <input name="status" style={{width:'170px'}}/>
          </label>           
       </div>
       <button style={{height:'35px', marginTop:'58rem',
          marginLeft:'-31rem', width:'150px', 
          borderRadius:'20px', backgroundColor:'red', 
          color:'#fff', borderColor:'red', 
          fontSize:'12px', fontWeight:'bold'}}>PREVIOUS</button>

           <button style={{height:'35px', marginTop:'58rem',
          marginLeft:'1rem', width:'150px', 
          borderRadius:'20px', backgroundColor:'red', 
          color:'#fff', borderColor:'red', 
          fontSize:'12px', fontWeight:'bold'}}>NEXT</button> */}
        </div> 
       
     </div>
    </div>
  )
}

export default InitiateCr1
