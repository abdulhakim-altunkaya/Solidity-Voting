import React from 'react';
import { useState } from 'react';
import {ABI} from "./ContractABI.js";
import {CONTRACT_ADDRESS} from "./ContractAddress.js";
import { ethers } from 'ethers';


function CheckMembership({account}) {


    let [membershipStatus, setMembershipStatus] = useState("");
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

    const checkStatus = async () => {
        connectContract();
        const txResponse = await contract.membershipStatus(account);
        if(txResponse === true) {
            setMembershipStatus("yes you are");
        } else {
            setMembershipStatus("no you are not member yet");
        }

    }

    return (
        <div>
            <button className='button-56' onClick={checkStatus}>Check to see if you are a Member</button>
            <p>{membershipStatus}</p>
        </div>
    )
}

export default CheckMembership