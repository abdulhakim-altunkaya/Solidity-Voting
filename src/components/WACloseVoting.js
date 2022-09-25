import React from 'react'
import {ethers} from "ethers";
import {ABI} from "./ContractABI";
import {CONTRACT_ADDRESS} from "./ContractAddress";

function WACloseVoting() {
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
    let indexNumber = 1
    const closeVotingSession = async () => {
        connectContract();
        await contract.closeVoting(indexNumber);
        indexNumber++;
    }
  return (
    <div>
        <button className='button-56 redButton' onClick={closeVotingSession}> CLOSE VOTING (only Owner can click)</button>
    </div>
  )
}

export default WACloseVoting