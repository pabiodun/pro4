import React from 'react'
import Card from 'react-bootstrap/Card';


function Cards() {
  return (
    <div className='card-div'>
      <Card 
      class=""
      border="" style={{backgroundColor:'white', 
      width: '11rem', height:'6rem', marginTop:'40px', 
      marginLeft:'50px', boxShadow:'1px 2px 15px rgba(0, 0, 0, 0.5)'}} >
       
        <Card.Body>
          <Card.Title style={{ color:'green', fontSize:'15px'}}>Approved
          <i class="bi bi-check-square-fill" style={{color:'green', marginLeft:'110px', fontSize:'25px'}}></i>
          </Card.Title>
          <Card.Text style={{ color:'black', fontSize:'20px', fontWeight:'5px', marginTop:'-30px'}}>
           10
           
          </Card.Text>          
        </Card.Body>
      </Card>
      <Card 
      class=""
      border="" style={{backgroundColor:'white', width: '11rem', height:'6rem', boxShadow:'1px 2px 15px rgba(0, 0, 0, 0.5)', marginTop:'-95px', marginLeft:'260px'}}>
       
        <Card.Body>
          <Card.Title style={{ color:'orange', fontSize:'15px'}}>Pending
          <i class="bi bi-file-earmark-ppt-fill"style={{marginLeft:'110px', fontSize:'25px'}}></i>
          </Card.Title>
          <Card.Text style={{ color:'black', fontSize:'20px', fontWeight:'5px', marginTop:'-30px'}}>
           15
           
          </Card.Text>          
        </Card.Body>
      </Card>
      <Card 
      class=""
      border="" style={{backgroundColor:'white', width: '11rem', height:'6rem', boxShadow:'1px 2px 15px rgba(0, 0, 0, 0.5)', marginTop:'-95px', marginLeft:'470px'}}>
       
        <Card.Body>
          <Card.Title style={{ color:'gray', fontSize:'15px'}}>Returned
          <i class="bi bi-arrow-left-square-fill" style={{color:'gray', marginLeft:'110px', fontSize:'25px'}}></i>
          </Card.Title>
          <Card.Text style={{ color:'black', fontSize:'20px', fontWeight:'5px', marginTop:'-30px'}}>
           5
           
          </Card.Text>          
        </Card.Body>
      </Card>
      <Card 
      class=""
      border="" style={{ backgroundColor:'white', width: '11rem', height:'6rem', boxShadow:'1px 2px 15px rgba(0, 0, 0, 0.5)', marginTop:'-95px', marginLeft:'680px'}}>
       
        <Card.Body>
          <Card.Title style={{ color:'red', fontSize:'15px'}}>Rejected
          <i class="bi bi-file-earmark-x-fill" style={{marginLeft:'110px', fontSize:'25px'}}></i>
          </Card.Title>
          <Card.Text style={{ color:'black', fontSize:'20px', fontWeight:'5px', marginTop:'-30px'}}>
           2
           
          </Card.Text>          
        </Card.Body>
      </Card>
      </div>
  )
}

export default Cards
