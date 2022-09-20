import React from 'react';
import { useState } from 'react';
import { ABI } from "./ContractABI.js";
import { ethers } from "ethers";

function GetRejectedProposals() {
    let[rejectedProposals, setRejectedProposals] = useState("");

    const getRejectedProposals = async () => {
        return;
    }

    return (
    <div>
        <button className='button-56' onClick={getRejectedProposals}>See Rejected Proposals</button>
        <p>Rejected Proposals: {rejectedProposals}</p>
    </div>
    )
}

export default GetRejectedProposals;