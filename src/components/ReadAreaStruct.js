import React from 'react';
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "./ContractAddress";
import { ABI } from "./ContractABI";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ReadAreaStruct() {
    const navigate = useNavigate();

    let[inputValue, setInputValue] = useState("");

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

    let[name, setName] = useState("");
    let[yesVotes, setYesVotes] = useState("");
    let[noVotes, setNoVotes] = useState("");
    let[totalVotes, setTotalVotes] = useState("");
    const getStruct = async () => {
        await connectContract();
        const txResponse = await contract.getRecordStruct(inputValue);
        const novotes = await txResponse.noV.toNumber();
        const yesvotes = await txResponse.yesV.toNumber()
        setName(txResponse.proposalName);
        setNoVotes(novotes);
        setYesVotes(yesvotes);
        setTotalVotes(novotes+yesvotes);
    }



  return (
    <div>
        <button className='button-56' onClick={getStruct}>PREVIOUS PROPOSALS DETAILS</button>
        <br />
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='enter proposal id'/>
        <p>
            <strong>Proposal Name: </strong> {name}
            <br />
            <strong>Yes Votes: </strong> {yesVotes}
            <br />
            <strong>No Votes: </strong> {noVotes}
            <br />
            <strong>Total Votes: </strong> {totalVotes}
        
        
        
        </p>
        <br />
        <br />
        <button className='button-56' onClick={ ()=>navigate("/")}>Homepage</button>
    </div>
  )
}

export default ReadAreaStruct