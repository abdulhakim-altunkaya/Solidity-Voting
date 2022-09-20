import React from 'react'
import { useState } from 'react';
import GetBalance from "./GetBalance.js";
import GetContractDetails from "./GetContractDetails.js";
import GetPassedProposals from "./GetPassedProposals.js";
import GetRejectedProposals from './GetRejectedProposals.js';

function ReadArea() {

  const {ethereum} = window;
  let [account, setAccount] =  useState("");
  const connectMetamask = async () => {
    if(window.ethereum !== "undefined") {
      const accounts = await ethereum.request({ method: "eth_requestAccounts"});
      setAccount(accounts[0]);
    } else {
      setAccount("Please install metamask my good sir");
    }
  }
  return (
    <div className='ReadArea'>
        <div id='contentPart'>
            <button className='button-56' onClick={connectMetamask}> Connect to Metamask </button>
            <p>Your Account is: {account}</p>
            <GetBalance/>
            <GetContractDetails />
            <GetPassedProposals />
            <GetRejectedProposals />
        </div>
        <div id='footnotePart'>
            Completed on 20 September 2022, A. Altunkaya
        </div>

    </div>
  )
}

export default ReadArea