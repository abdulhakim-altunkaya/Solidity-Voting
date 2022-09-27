import React from 'react';
import { BrowserRouter as Router, Route, Routes } from  "react-router-dom";
import WADetails from './WADetails';
import WAVote from './WAVote';
import WABecomeMember from './WABecomeMember';
import WAMakeProposal from './WAMakeProposal';
import WAChooseMain from './WAChooseMain';
import WACloseVoting from './WACloseVoting';


function WriteArea() {
  return (
    <div className='WriteArea'>

        <Router>
            <Routes>
              <Route path="/" element={ <WADetails /> } />
              <Route path="/vote" element={ <WAVote /> }/>
              <Route path="/member" element={ <WABecomeMember /> }/>
              <Route path="/submit" element={ <WAMakeProposal /> }/>
              <Route path="/choose" element={ <WAChooseMain /> } />
              <Route path="/close" element={ <WACloseVoting /> } />
            </Routes>
        </Router>
    </div>
  )
}

export default WriteArea;