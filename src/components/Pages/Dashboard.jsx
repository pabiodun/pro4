import React from 'react'
import './Page.css'
import Cards from './Cards'
import DashCharts from './DashCharts'
import Sidebar from '../Sidebar'
import Header from '../Header/Header'




function Dashboard() {
  return (
    <div className="main">
    <Sidebar />
    <Header />
    <div className='dash-cont'>
        <div className='dash-main'>
            <h6>DASHBOARD</h6>            
        </div>
        <div className='div-cards'>
            <Cards />                
            <DashCharts />
       </div>
       </div>
    </div>
   
  )
}

export default Dashboard
