import React from 'react';
import { BrowserRouter as Router, Route, Routes } from  "react-router-dom";
import ReadAreaDetails from './ReadAreaDetails';
import ReadAreaRejected from './ReadAreaRejected';
import ReadAreaPassed from "./ReadAreaPassed";

function ReadArea() {
  return (
    <div  className='ReadArea'>
        <Router>
            <Routes>
              <Route path="/" element={<ReadAreaDetails />}/>
              <Route path="/rejected" element={<ReadAreaRejected />}/>
              <Route path="/passed" element={<ReadAreaPassed />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default ReadArea;