import React from 'react'
import { useState } from 'react';
import {ABI} from "./ContractABI.js";
import {CONTRACT_ADDRESS} from "./ContractAddress.js";
import {ethers } from "ethers";


function GetBalance() {

  let[votingBalance, setVotingBalance] = useState("");
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

  const getBalance = async () => {
    connectContract();
    const txResponse = await contract.getBalance();
    let data = txResponse.toString();
    let data2 = data.slice(0, -18);
    setVotingBalance(`${data2} Matic`);
  }
  return (
    <div>
      <button className='button-56' onClick={getBalance}> Voting System Current Balance</button>
      <p>Voting System balance is: {votingBalance}</p>
    </div>
  )
}

export default GetBalance;