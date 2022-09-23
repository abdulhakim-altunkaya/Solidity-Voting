import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ethers } from "ethers";
import {CONTRACT_ADDRESS} from "./ContractAddress";
import {ABI} from "./ContractABI";

function ReadAreaWaiting() {
    const navigate = useNavigate();
    let[waitingProposals, setWaitingProposals] = useState("");

    let contract;
    let signer;
    const CONTRACT_ABI = ABI;
    const ADDRESS = CONTRACT_ADDRESS;

    return (
        <div>
            <h3>Waiting Proposals:</h3>
            {waitingProposals}
            <br />
            <button className="button-56" onClick={ () => navigate("/")}>Homepage</button>
        </div>
    )
}

export default ReadAreaWaiting;