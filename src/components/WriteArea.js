import React from 'react';
import { BrowserRouter as Router, Route, Routes } from  "react-router-dom";
import WADetails from './WADetails';
import WAVote from './WAVote';


function WriteArea() {
  return (
    <div className='WriteArea'>
        <Router>
            <Routes>
              <Route path="/" element={ <WADetails /> } />
              <Route path="/vote" element={ <WAVote /> }/>
            </Routes>
        </Router>
    </div>
  )
}

export default WriteArea;