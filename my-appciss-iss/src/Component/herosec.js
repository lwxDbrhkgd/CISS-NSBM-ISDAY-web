import React from 'react'
import '../CSS/herosec.css'
import teamimg from '../Assets/team.jpg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function herosec() {
  return (
    <>
  
    <div className='groupimg'>
      <img src={teamimg} className='teamimg' alt='teamimg'/>
      
      

    </div>

    <div className='rectangle'>

      </div>
      <div className='container container-flex'>
      <div className='head'>
      Information Systems Day 
      ' 23
    </div>
  </div>              


   
    </>
  )
}
