import React from 'react'
import WAMainProposal from './WAMainProposal';
import WABecomeMember from "./WABecomeMember";
import WAMakeProposal from './WAMakeProposal';
import WAChooseMain from './WAChooseMain';


function WriteArea() {
  return (
    <div className='WriteArea'>
      <WAMainProposal/>
      <WABecomeMember />
      <WAMakeProposal/>
      <WAChooseMain/>
    </div>
  )
}

export default WriteArea