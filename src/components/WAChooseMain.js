import React from 'react'
import { useState } from 'react'
import { ethers } from "ethers";
import { ABI } from "./ContractABI";
import { CONTRACT_ADDRESS } from "./ContractAddress";

function WAChooseMain() {

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

    let [inputValue, setInputValue] = useState("");
    let [message, setMessage] = useState("Choose Main Proposal by Index Number (Only Owner can choose)")
    const chooseMain = async () => {
        connectContract();
        const txArray = await contract.getAllPro();
        if(inputValue === ""  || inputValue >= txArray.length ) {
            alert( `Do not leave input empty: 0 <= index <${txArray.length}`);
        }  else {
            await contract.chooseMainProposal(inputValue);
            setMessage("Success, main proposal choosen. You can now see it by clicking on See Main Proposal Button")
        }
    }
    return (
        <div>
            <br />
            <button className='button-56 redButton' onClick={chooseMain}>Choose Main Proposal (Only Owner)</button>
            <p>{message}</p>
            <input type="number" value={inputValue} onChange={ e => setInputValue(e.target.value) } required />
        </div>
    )
}

export default WAChooseMain