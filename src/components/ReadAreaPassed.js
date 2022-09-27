import React from 'react';
import { useState } from 'react';
import { ABI } from "./ContractABI.js";
import { CONTRACT_ADDRESS } from './ContractAddress.js';
import { ethers } from "ethers";
import { useNavigate } from 'react-router-dom';

function ReadAreaPassed() {

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

    const navigate = useNavigate();

    let listProposals = [];
    const getArray = async () => {
        connectContract();
        const txResponse = await contract.getAllProPassed();
        listProposals = txResponse;
    }
    let[content, setContent] = useState("");
    const displayArray = async () => {
        await getArray();
        if(listProposals.length < 1) {
            setContent("No proposal has been submitted")
        } else {
            setContent(listProposals.map( word =>  <p key={word}> {word}</p> ) )
        }
    }




    return (
    <div>
        <button className='button-56' onClick={displayArray}>See Passed Proposals</button>
        <div style={{paddingTop:"20px", paddingBottom: "20px"}}><strong>Passed Proposals: </strong> {content}</div>
        <button className='button-56' onClick={ () => navigate("/") }>Homepage</button>
    </div>
    )

}

export default ReadAreaPassed;