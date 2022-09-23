import React from 'react';
import { useState } from 'react';
import { ABI } from "./ContractABI.js";
import { ethers } from "ethers";
import { useNavigate } from 'react-router-dom';

function ReadAreaRejected() {

    const navigate = useNavigate();
    
    const arr = ["apple", "orange", "grapes", "berry"];

    const rejectedProposals = (arr) => {
        return arr.map((words, index) => <li key={index}>{words}</li>);
    }



    return (
    <div>
        <h4>Rejected Proposals: </h4>
        <ul>{rejectedProposals(arr)}</ul> 
        <br />
        <button className='button-56' onClick={ () => navigate("/")}>Homepage</button>

    </div>
    )
}

export default ReadAreaRejected;
