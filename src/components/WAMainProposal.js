import React from 'react';
import { useState } from 'react';
import {ABI} from "./ContractABI.js";
import {ethers } from "ethers";

function WAMainProposal() {
    let[mainProposal, setMainProposal] = useState("");

    let contract;
    let signer;
    const CONTRACT_ABI = ABI;
    const connectContract = async () => {
        const ABI = CONTRACT_ABI;
        const Address = "0xb5dd0dFEEC4C94eA3f9573018aB009DEb497Ba28";
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