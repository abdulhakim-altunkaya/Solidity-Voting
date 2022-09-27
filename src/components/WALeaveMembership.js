import React from 'react'
import { ABI } from './ContractABI';
import { CONTRACT_ADDRESS} from "./ContractAddress";
import { ethers } from "ethers";
import { useState } from "react"
function WALeaveMembership() {
  return (
    <div>
        <button className='button-56' onClick={leaveMembership}>Leave Membership</button>
    </div>
  )
}

export default WALeaveMembership