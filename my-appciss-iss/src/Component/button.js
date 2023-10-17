
import React from 'react';
import '../CSS/button.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from '../PHP/index.php';


function button(){
  return(

    <BrowserRouter>
    <Routes>
   
      
      <Route path='../PHP/index.php' element={<Index/>} />

    </Routes>
    
    </BrowserRouter>
  );

}export default button;