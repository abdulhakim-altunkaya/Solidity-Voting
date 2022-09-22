import React from 'react';
import { BrowserRouter as Router, Route, Switch } from  "react-router-dom";
import ReadArea from './ReadArea';
import GetRejectedProposals from './GetRejectedProposals';
import GetPassedProposals from "./GetPassedProposals";

function ReadAreaMain() {
  return (
    <div>
        <Router>
            <Switch>
            <Route exact path="/"><ReadArea /></Route>
            <Route exact path="/rejected"><GetRejectedProposals /></Route>
            <Route exact path="/passed"><GetPassedProposals /></Route>
            </Switch>
        </Router>
    </div>
  )
}

export default ReadAreaMain