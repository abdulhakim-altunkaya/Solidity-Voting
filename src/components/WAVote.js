import React from 'react'

function WAVote() {
    let[proposal, setProposal] = useState("");
    const voteYes = async () => {
        console.log("yes");
    }
    const voteNo = async () => {
        console.log("yes");
    }
  return (
    <div>
        <p>{proposal}</p>
        <button className='button-56' onClick={voteYes}>Yes</button>
        <button className='button-56' onClick={voteNo}>No</button>
        <br />
        <button className='button-56'>Homepage</button>
    </div>
  )
}

export default WAVote