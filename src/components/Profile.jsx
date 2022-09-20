import React from 'react'
import Paul from "../images/Paul.png";

function Profile() {
    return(
        <div>
          <img src={Paul}
             className="img"
             alt="avatar"
             style={{paddingTop:'20px', marginLeft:'30px'}}
           />
           <div>
            <h6 style={{marginLeft:'70px', fontSize:'15px'}}>PAUL ABIODUN</h6>
            <p style={{color:'#fff', marginLeft:'40px', marginTop:'-5px', fontWeight:'lighter'}}>P.abby@premiumtrustbank.com</p>
           </div>
        </div>
        
      )
}

export default Profile
