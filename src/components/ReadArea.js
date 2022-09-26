import React from 'react';
import { BrowserRouter as Router, Route, Routes } from  "react-router-dom";
import ReadAreaDetails from './ReadAreaDetails';
import ReadAreaRejected from './ReadAreaRejected';
import ReadAreaPassed from "./ReadAreaPassed";
import ReadAreaWaiting from "./ReadAreaWaiting";
import { ABI } from "./ContractABI";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "./ContractAddress";

function ReadArea() {


  return (
    <div  className='ReadArea'>
        <Router>
            <Routes>
              <Route path="/" element={ <ReadAreaDetails /> } />
              <Route path="/rejected" element={ <ReadAreaRejected /> }/>
              <Route path="/passed" element={ <ReadAreaPassed /> } />
              <Route path="/proposals" element={ <ReadAreaWaiting/> } />
            </Routes>
        </Router>
    </div>
  )
}

export default ReadArea;