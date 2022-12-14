import React from 'react';
import WAMainProposal from './WAMainProposal';
import WALeaveMembership from './WALeaveMembership';
import { useNavigate } from 'react-router-dom';
import WAWithdrawBalance from './WAWithdrawBalance';


function WADetails() {
    const navigate = useNavigate();
    

    return (
        <div>
            <WAMainProposal />
            <button className='button-56' onClick={ () => navigate("/vote") }>Vote for Proposal</button>
            <br />
            <button className='button-56' onClick={ () => navigate("/member") }>Become Member</button>
            <br />
            <button className='button-56' onClick={ () => navigate("/submit") }>Submit Proposal</button>
            <br />
            <button className='button-56 redButton' onClick={ () => navigate("/choose") }>Choose Proposal (Only Owner)</button>
            <br />
            <button className='button-56 redButton' onClick={ () => navigate("/close") }>Close Voting (Only Owner)</button>
            <br />
            <button className='button-56 redButton' onClick={ () => navigate("/remove") }>Remove Person (Only Owner)</button>
            <br />
            <WAWithdrawBalance />
            <br />
            <WALeaveMembership />
        </div>
    )
}

export default WADetails