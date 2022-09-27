import React from 'react'
import {ethers} from "ethers";
import {ABI} from "./ContractABI";
import {CONTRACT_ADDRESS} from "./ContractAddress";
import { useState } from 'react';

function WACloseVoting() {
    let contract;
    let signer;
    const CONTRACT_ABI = ABI;
    const ADDRESS = CONTRACT_ADDRESS;

    const connectContract = async () => {
        const ABI = CONTRACT_ABI;
        const Address = ADDRESS;
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        contract = new ethers.Contract(Address, ABI, signer);
    }

    let[inputValue, setInputValue] = useState("");
    const closeVotingSession = async () => {
        connectContract();
        const txResponse = await contract.closeVoting(inputValue);
        await txResponse.wait();
        await contract.resetTable();
    }


  return (
    <div style={{backgroundColor:"lightsalmon", paddingLeft: "5px"}}>
        <br />
        <button className='button-56 redButton' onClick={closeVotingSession}> CLOSE VOTING (only Owner can click)</button>
        <input type="number" value={inputValue} 
        onChange={e => setInputValue(e.target.value)} 
        placeholder="enter an id number for closing proposal" />
    </div>
  )
}

export default WACloseVoting