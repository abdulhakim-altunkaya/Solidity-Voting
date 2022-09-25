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
  let arrayRej = [];

  const CONTRACT_ABI = ABI;
  const ADDRESS = CONTRACT_ADDRESS;
  let contract;
  let signer;
  const connectContract = async () => {
    const ABI = CONTRACT_ABI;
    const Address = ADDRESS;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(Address, ABI, signer);
    console.log(contract.address);
    const txResponse = await contract.getAllProRejected();
    arrayRej = txResponse;
  }
  connectContract();

  return (
    <div  className='ReadArea'>
        <Router>
            <Routes>
              <Route path="/" element={ <ReadAreaDetails arrayRej={arrayRej} /> } />
              <Route path="/rejected" element={ <ReadAreaRejected /> }/>
              <Route path="/passed" element={ <ReadAreaPassed /> } />
              <Route path="/proposals" element={ <ReadAreaWaiting/> } />
            </Routes>
        </Router>
    </div>
  )
}

export default ReadArea;