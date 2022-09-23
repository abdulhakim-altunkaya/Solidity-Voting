import React from 'react';
import { useState } from 'react';
import {ABI} from "./ContractABI.js";
import { CONTRACT_ADDRESS } from './ContractAddress.js';
import {ethers } from "ethers";

function WAMainProposal() {
    let[mainProposal, setMainProposal] = useState("");

    let contract;
    let signer;
    const CONTRACT_ABI = ABI;
    const ADDRESS = CONTRACT_ADDRESS;

    const connectContract = async () => {
        const ABI = CONTRACT_ABI;
        const Address = ADDRESS;
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner;
        contract = new ethers.Contract(ABI, Address, signer);
    }

    const getMainProposal = async () => {
        connectContract();
        const txResponse = await contract.mainProposal();
        setMainProposal(txResponse);
    }
  return (
    <div>
        <button className='button-56' onClick={getMainProposal}>See Main Proposal</button>
        <p>Main Proposal is: {mainProposal}</p>
    </div>
  )
}

export default WAMainProposal