import React from 'react';
import { useState } from 'react';
import { ABI } from "./ContractABI.js";
import { CONTRACT_ADDRESS } from "./ContractAddress";
import { ethers } from "ethers";
import { useNavigate } from 'react-router-dom';

function XXReserveMap() {

    const navigate = useNavigate();

    const CONTRACT_ABI = ABI;
    const ADDRESS = CONTRACT_ADDRESS;
    let signer;
    let contract;

    const connectContract = async () => {
        const Address = ADDRESS;
        const ABI = CONTRACT_ABI;
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        contract = new ethers.Contract(Address, ABI, signer);
    }
    
    const arr = ["apple", "orange", "grapes", "berry"];

    const rejectedProposals = (arr) => {
        connectContract();
        return arr.map((words, index) => <li key={index}>{words}</li>);
    }

    
    let listProposals = [];
    const getArray = async () => {
        connectContract();
        const txResponse = await contract.getAllProRejected();
        listProposals = txResponse;
    }
    let[content, setContent] = useState("");
    const displayArray = async () => {
        await getArray();
        setContent(listProposals.map(proposal => <li key={proposal}> <span>{proposal}</span> </li>));
    }

    return (
    <div>
        <button onClick={displayArray}>See Rejected Proposals</button>
        <h4>Rejected Proposals: </h4>
        <ul>{rejectedProposals(arr)}</ul> 
        <ul>{content}</ul>
        <br />
        <button className='button-56' onClick={ () => navigate("/")}>Homepage</button>

    </div>
    )
}

export default XXReserveMap;
