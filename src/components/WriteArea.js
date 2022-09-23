import React from 'react'
import WAMainProposal from './WAMainProposal';
import WABecomeMember from "./WABecomeMember";
import WAMakeProposal from './WAMakeProposal';


function WriteArea() {
  return (
    <div className='WriteArea'>
      <WAMainProposal/>
      <WABecomeMember />
      <WAMakeProposal/>
    </div>
  )
}

export default WriteArea