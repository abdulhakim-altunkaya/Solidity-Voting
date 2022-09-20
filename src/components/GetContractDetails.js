import React from 'react';
import { ABI } from "./ContractABI.js";
import { useState } from 'react';
import { ethers } from "ethers";

function GetContractDetails() {
  let[stockholmAddress, setStockholmAddress] = useState("");
  let[stockholmOwner, setStockholmOwner] = useState("");
  let contract;
  let signer;

  const connectContract = async () => {
    const Address = "0xb5dd0dFEEC4C94eA3f9573018aB009DEb497Ba28";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(ABI, Address, signer);
  }

  const getData = async () => {
    connectContract();
    const txResponse = await contract.getDetails();
    console.log(txResponse)
  }

  return (
    <div>
      <button className='button-56' onClick={getData}> See Contract Details</button>
      <p>Stockholm City Contract Address: {stockholmAddress}</p>
      <p>Contract Administrator ("Owner") Address: {stockholmOwner}</p>
    </div>
  )
}

export default GetContractDetails