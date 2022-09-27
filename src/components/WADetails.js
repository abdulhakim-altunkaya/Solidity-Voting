import React from 'react';
import WAMainProposal from './WAMainProposal';
import { useNavigate } from 'react-router-dom';


function WADetails() {
    const navigate = useNavigate();
    

    return (
        <div>
            <WAMainProposal/>
            <button className='button-56' onClick={ () => navigate("/vote") }>Vote for Proposal</button>
            <br />
            <button className='button-56' onClick={ () => navigate("/member") }>Become Member</button>
            <br />
            <button className='button-56' onClick={ () => navigate("/submit") }>Submit Proposal</button>
            <br />
            <button className='button-56 redButton' onClick={ () => navigate("/choose") }>Choose Proposal (Only Owner)</button>
            <br />
            <button className='button-56 redButton' onClick={ () => navigate("/close") }>Close Voting (Only Owner)</button>
        </div>
    )
}

export default WADetails