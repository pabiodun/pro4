import React from 'react'
import Chart from 'react-apexcharts'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'



function DashCharts() {
  return (
    <div className='dash-chart'>
      <div>
        <Chart
        type="bar"
        width={320}
        height={280}
        series={[
            {
                name:'Approved',
                data:[100, 450, 650, 750, 900],
                color:'#009900'
            },
            {
                name:'Pending',
                data:[150, 250, 400, 350, 550],
                color:'#FF9900'
            },
            {
                name:'Returned',
                data:[350, 150, 450, 250, 150],
                color:'#999966'
            },
            {
                name:'Rejected',
                data:[250, 450, 500, 750, 650],
                color:'#FF3300'
            }
        ]}
        options={{
                // colors:"#009900"
                chart: {
                    background: '#fff',                    
                },
                theme:{
                    mode:''
                },
                xaxis:{
                    tickplacement:'',
                    categories:['Jan', 'Feb', 'Mar', 'Apr', 'May']
                },
                title:{
                    text:'Documents Chart',
                    style:{fontSize:'12px'}
                    
                },

        }}
        
        >
            
        </Chart>
        </div>
        <div className='pie-div'>
        <Chart
        type="pie"
        width={250}
        height={200}
        series={[250, 350, 150, 50]}
        
        options={{
            labels:['Approved', 'Pending', 'Returned', 'Rejected'],
            chart: {
                background: '#fff',
                borderRadius: '10px'

            },
        title:{
                text:'Report Summary',
                style:{fontSize:'12px', paddingTop:'20px'}
            },
             
            colors:['#009900', '#FF9900', '#999966', '#FF3300'],
            
        }}
        >
            
        </Chart>
        
        kkkk
      </div>
      <div className="btn-div">
        <h6 style={{fontSize:'12px', fontWeight:'bolder', paddingTop:'1px'}}>Quick Links</h6>
      
        <Link to='/initiatecredit' style={{ textDecoration:'none'}}><Button variant="secondary" style={{fontSize:'13px'}}>
        Initiate Credit Request
      </Button></Link>
      <br/>
      <br/>
      <Button variant="secondary" style={{fontSize:'12px'}}>
        Non-Expense Document
      </Button>
      <br/>
      <br/>
      <Button variant="secondary" style={{fontSize:'12px'}}>
        New Expense Document
      </Button>
      <br/>
      <br/>
      <Button variant="secondary" style={{fontSize:'13px', width:'155px'}}>
        My Reviews
      </Button>
    </div>
    </div>
  )
}

export default DashCharts
