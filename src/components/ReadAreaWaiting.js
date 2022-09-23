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

    const waitingPro = async () => {
        connectContract();
        const txResponse = await contract.getAllPro();
        console.log(txResponse);
    }
    



    return (
        <div>
            <h3>Waiting Proposals:</h3>
            <button onClick={waitingPro} className="button-56" >Some data</button>
            <br />
            <button className="button-56" onClick={ () => navigate("/")}>Homepage</button>
        </div>
    )
}

export default ReadAreaWaiting;