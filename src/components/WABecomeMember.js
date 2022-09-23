import React from 'react'

function WABecomeMember() {
  return (
    <div>
        <button className='button-56'>Become a Member</button>
        <p>To become a member you need to pay at least 1 Matic to the contract</p>
        <input type="number" 
            placeholder='enter Matic amount.(Minimum is 1)'/>
    </div>
  )
}

export default WABecomeMember