import React from 'react'
import { useState } from 'react'
import { ethers } from "ethers";
import { ABI } from "./ContractABI";
import { CONTRACT_ADDRESS } from "./ContractAddress";
import { useNavigate } from 'react-router-dom';

function WAChooseMain() {
    const navigate = useNavigate();

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
            alert( `Input number must be between: 0 <= number <${txArray.length}`);
        }  else {
            await contract.chooseMainProposal(inputValue);
            setMessage("Success, main proposal choosen. You can now see it by clicking on See Main Proposal Button")
        }
    }
    return (
        <div>
            <button className='button-56' onClick={chooseMain}>Choose Proposal (Only Owner)</button>
            <p>{message}</p>
            <input type="number" value={inputValue} onChange={ e => setInputValue(e.target.value) } required />
            <br />
            <br />
            <button className='button-56' onClick={ ()=> navigate("/")}>Homepage</button>
        </div>
    )
}

export default WAChooseMain