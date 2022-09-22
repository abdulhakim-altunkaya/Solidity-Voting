import React from 'react';
import { useState } from 'react';
import { ABI } from "./ContractABI.js";
import { ethers } from "ethers";
import { useNavigate } from 'react-router-dom';

function ReadAreaPassed() {

    const navigate = useNavigate();

    let[passedProposals, setPassedProposals] = useState("");

    const getPassedProposals = async () => {
        return;
    }

    return (
    <div>
        <button className='button-56' onClick={getPassedProposals}>See Passed Proposals</button>
        <p>Passed Proposals: {passedProposals}</p>
        <button className='button-56' onClick={ () => navigate("/") }>Homepage</button>
    </div>
    )

}

export default ReadAreaPassed;