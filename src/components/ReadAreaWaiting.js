import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ReadAreaWaiting() {
    const navigate = useNavigate();
    let[waitingProposals, setWaitingProposals] = useState("");

    return (
        <div>
            <h3>Waiting Proposals:</h3>
            {waitingProposals}
            <br />
            <button className="button-56" onClick={ () => navigate("/")}>Homepage</button>
        </div>
    )
}

export default ReadAreaWaiting;