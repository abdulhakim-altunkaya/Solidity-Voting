import React from 'react';
import { useState } from 'react';
import { ABI } from "./ContractABI.js";
import { ethers } from "ethers";

function GetPassedProposals() {

    let[passedProposals, setPassedProposals] = useState("");

    const getPassedProposals = async () => {
        return;
    }

    return (
    <div>
        <button className='button-56' onClick={getPassedProposals}>See Passed Proposals</button>
        <p>Passed Proposals: {passedProposals}</p>
    </div>
    )

}

export default GetPassedProposals;