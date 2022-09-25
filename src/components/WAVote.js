import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ABI } from "./ContractABI";
import { CONTRACT_ADDRESS } from "./ContractAddress";
import { ethers } from "ethers";

function WAVote() {
    const navigate = useNavigate();


    //get main proposal for display purposes
    let[proposal, setProposal] = useState("");
    
    //connect to contract block
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



    //cast your vote
    const votingYes = async () => {
        connectContract();
        console.log(contract.address);
    }
    const votingNo = async () => {
        connectContract();
        const txResponse = await contract.mainProposal();
        setProposal(txResponse);
    }



  return (
    <div>
        <p>Main Proposal: {proposal}</p>
        <button className='button-56' onClick={votingYes}>Yes</button>
        <button className='button-56' onClick={votingNo}>No</button>
        <br />
        <button className='button-56' onClick={ () => navigate("/") }>Homepage</button>
    </div>
  )
}

export default WAVote