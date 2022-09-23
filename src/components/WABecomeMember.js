import React from 'react'
import { ABI } from './ContractABI';
import { CONTRACT_ADDRESS } from "./ContractAddress";
import { ethers } from "ethers";
import { useState } from 'react';
/* global BigInt */

function WABecomeMember() {
  let contract;
  const ADDRESS = CONTRACT_ADDRESS;
  const CONTRACT_ABI = ABI;
  let signer;

  let [inputValue, setInputValue] = useState("");


  const connectContract = async () => {
    const Address = ADDRESS;
    const ABI = CONTRACT_ABI;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(Address, ABI, signer);
  }

  const becomeMember = async () => {
    connectContract();
    let finalAmount = BigInt(inputValue*(10**18));
    const txResponse = await contract.becomeMember({value: finalAmount});
    await txResponse.wait();
  }

  return (
    <div>
        <button className='button-56' onClick={becomeMember}>Become a Member</button>
        <p>To become a member you need to pay at least 1 Matic to the contract</p>
        <input type="number" 
            value = {inputValue}
            placeholder='enter Matic amount.(Minimum is 1)'
            onChange={e => setInputValue(e.target.value) }/>
    </div>
  )
}

export default WABecomeMember