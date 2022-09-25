import React from 'react';
import WAMainProposal from './WAMainProposal';
import WABecomeMember from "./WABecomeMember";
import WAMakeProposal from './WAMakeProposal';
import WAChooseMain from './WAChooseMain';
import { useNavigate } from 'react-router-dom';

function WADetails() {
    const navigate = useNavigate();

    return (
        <div>
            <WAMainProposal/>
            <WABecomeMember />
            <WAMakeProposal/>
            <WAChooseMain/>
            <br />
            <button className='button-56' onClick={ () => navigate("/vote") }>Vote for Proposal</button>
        </div>
    )
}

export default WADetails