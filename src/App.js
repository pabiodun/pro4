import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Header from './components/Header/Header';
import Dashboard from './components/Pages/Dashboard'
import WorkflowRequest from './components/Pages/WorkflowRequest'
import InitialCr from './components/Pages/InitialCr'
import InitialEd from './components/Pages/InitialEd'
import InitialNed from './components/Pages/InitialNed'
import Reports from './components/Pages/Reports'
import PendingReviews from './components/Pages/PendingReviews'
import Paul from './components/Pages/Paul'
import Login from './components/Login/Login';
import Create from './components/Login/Create';
import InitiateCr1 from './components/Pages/InitiateCr1';


function App() {
  
  return (
    <div className="main">      
       {/* <Sidebar />
       <Header /> */}
          
    <Routes>     
        <Route path="/" exact element={<Dashboard />} ></Route>
        <Route path="/workflow" element={<WorkflowRequest />} ></Route>
        <Route path="/initiatecredit" element={<InitialCr />} ></Route>
        <Route path="/initiateexpense" element={<InitialEd />} ></Route>
        <Route path="/initiatenonexpense" element={<InitialNed />} ></Route>
        <Route path="/pending" element={<PendingReviews />} ></Route>
        <Route path="/reports" element={<Reports />} ></Route>
        <Route path="/paul" element={<Paul />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/create" element={<Create />} ></Route>
        <Route path="/initiatecr1" element={<InitiateCr1 />} ></Route>
        
   </Routes>
  
    </div>
    
  );
}

export default App;
