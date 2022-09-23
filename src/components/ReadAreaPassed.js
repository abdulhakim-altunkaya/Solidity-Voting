import React from 'react';
import { useState } from 'react';
import { ABI } from "./ContractABI.js";
import { ethers } from "ethers";
import { useNavigate } from 'react-router-dom';

function ReadAreaPassed() {

    const navigate = useNavigate();

    let[passedProposals, setPassedProposals] = useState("");


    return (
    <div>
        <h4>Passed Proposals:</h4>
        <p>{passedProposals}</p>
        <button className='button-56' onClick={ () => navigate("/") }>Homepage</button>
    </div>
    )

}

export default ReadAreaPassed;