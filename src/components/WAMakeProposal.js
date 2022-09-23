import React from 'react';
import { useState } from 'react';
import { ABI } from "./ContractABI";
import {CONTRACT_ADDRESS} from "./ContractAddress";
import {ethers} from "ethers";

function WAMakeProposal() {
  
  let[inputValue, setInputValue] = useState("");

  let contract;
  let signer;
  const CONTRACT_ABI = ABI;
  const ADDRESS = CONTRACT_ADDRESS;

  const connectContract = async () => {
    const Address = ADDRESS;
    const ABI = CONTRACT_ABI;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(Address, ABI, signer);
  }

  const makeProposal = async () => {
    connectContract();
    const txResponse = await contract.makeProposal(inputValue);
    await txResponse.wait();
  }

  return (
    <div>
        <br />
        <button className='button-56' onClick={makeProposal}>Make a Proposal</button>
        <p>To make a proposal you must be a member.</p>
        <input type="text" value={inputValue} 
        onChange={e => setInputValue(e.target.value)}
        placeholder="write your proposal"/>
    </div>
  )
}

export default WAMakeProposal;