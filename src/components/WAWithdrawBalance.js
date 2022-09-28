import React from 'react';
import { ethers } from "ethers";
import { ABI } from "./ContractABI";
import { CONTRACT_ADDRESS } from "./ContractAddress";


function WAWithdrawBalance() {

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

    const withdrawAll = async () => {
        await connectContract();
        const txResponse = await contract.withdraw();
        await txResponse.wait();
    }

  return (
    <div>
        <button className='button-56 redButton' onClick={withdrawAll}>Withdraw System Balance (Only Owner)</button>
    </div>
  )
}

export default WAWithdrawBalance