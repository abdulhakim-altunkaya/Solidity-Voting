import React from 'react';
import { BrowserRouter as Router, Route, Routes } from  "react-router-dom";
import ReadAreaDetails from './ReadAreaDetails';
import GetRejectedProposals from './GetRejectedProposals';
import GetPassedProposals from "./GetPassedProposals";

function ReadAreaMain() {
  return (
    <div  className='ReadArea'>
        <Router>
            <Routes>
              <Route path="/" element={<ReadAreaDetails />}/>
              <Route path="/rejected" element={<GetRejectedProposals />}/>
              <Route path="/passed" element={<GetPassedProposals />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default ReadAreaMain