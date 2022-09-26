import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ethers } from "ethers";
import {CONTRACT_ADDRESS} from "./ContractAddress";
import {ABI} from "./ContractABI";

function ReadAreaWaiting() {
    const navigate = useNavigate();


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

    let listProposals = [];
    const getArray = async () => {
        connectContract();
        const txResponse = await contract.getAllPro();
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
            <button onClick={displayArray} className="button-56" >See Waiting Proposals</button>
            <br />
            <div><strong>Waiting Proposals: </strong>{content}</div>
            <br />
            <button className="button-56" onClick={ () => navigate("/")}>Homepage</button>
        </div>
    )
}

export default ReadAreaWaiting;