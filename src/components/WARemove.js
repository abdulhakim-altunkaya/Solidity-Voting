import React from 'react';
import { useState } from 'react';
import { ABI } from "./ContractABI";
import { CONTRACT_ADDRESS } from "./ContractAddress";
import { ethers } from "ethers";
import { useNavigate } from 'react-router-dom';

function WARemove() {
    const navigate = useNavigate();
    let[someText, setSomeText] = useState("Owner of the Contract can remove anybody from Membership by entering their Wallet Address")

    let[inputValue, setInputValue] = useState("");
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

    const remove = async () => {
        await connectContract();
        if(inputValue.charAt(1) !== "x") {
            alert("address type is invalid. Check what you entered inside input area again. ")
        } else {
            const txResponse = await contract.removeMember(inputValue);
            await txResponse.wait();
            setSomeText(`${inputValue} successfully removed`);
        }

    }
    return (
        <div>
            <button className='button-56' onClick={remove}>Remove Membership</button>
            <p>{someText}</p>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} 
            placeholder="enter wallet address here"/>
            <br />
            <br />
            <button className='button-56' onClick={ () => navigate("/") }>Homepage</button>
        </div>
    )

}

export default WARemove