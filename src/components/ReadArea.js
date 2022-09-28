import React from 'react';
import { BrowserRouter as Router, Route, Routes } from  "react-router-dom";
import ReadAreaDetails from './ReadAreaDetails';
import ReadAreaRejected from './ReadAreaRejected';
import ReadAreaPassed from "./ReadAreaPassed";
import ReadAreaWaiting from "./ReadAreaWaiting";
import ReadAreaStruct from './ReadAreaStruct';


function ReadArea() {


  return (
    <div  className='ReadArea'>
        <Router>
            <Routes>
              <Route path="/" element={ <ReadAreaDetails /> } />
              <Route path="/rejected" element={ <ReadAreaRejected /> }/>
              <Route path="/passed" element={ <ReadAreaPassed /> } />
              <Route path="/proposals" element={ <ReadAreaWaiting/> } />
              <Route path="/details" element={ <ReadAreaStruct /> } />
            </Routes>
        </Router>
    </div>
  )
}

export default ReadArea;