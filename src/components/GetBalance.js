import React from 'react'
import { useState } from 'react';
import {ABI} from "./ContractABI.js";
import {ethers } from "ethers";


function GetBalance() {

  let[votingBalance, setVotingBalance] = useState("");
  let contract;
  let signer;
  const CONTRACT_ABI = ABI;

  const connectContract = async () => {
    const Address = "0xb5dd0dFEEC4C94eA3f9573018aB009DEb497Ba28";
    const ABI = CONTRACT_ABI;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(Address, ABI, signer);
  }

  const getBalance = async () => {
    connectContract();
    const txResponse = await contract.getBalance();
    setVotingBalance(`${txResponse} Matic`);
  }
  return (
    <div>
      <button className='button-56' onClick={getBalance}> Voting System Current Balance</button>
      <p>Voting System balance is: {votingBalance}</p>
    </div>
  )
}

export default GetBalance;