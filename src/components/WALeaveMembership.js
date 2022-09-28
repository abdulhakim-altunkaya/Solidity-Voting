import React from 'react'
import { ABI } from './ContractABI';
import { CONTRACT_ADDRESS} from "./ContractAddress";
import { ethers } from "ethers";

function WALeaveMembership() {
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
    
    const leave = async () => {
        connectContract();
        const txResponse = await contract.leaveMembership();
        await txResponse.wait();
    }

  return (
    <div>
        <button className='button-56 blackButton' onClick={leave}>Leave Membership</button>
    </div>
  )
}

export default WALeaveMembership