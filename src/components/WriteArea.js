import React from 'react'
import WAMainProposal from './WAMainProposal';
import WABecomeMember from "./WABecomeMember";


function WriteArea() {
  return (
    <div className='WriteArea'>
      <WAMainProposal/>
      <WABecomeMember />
    </div>
  )
}

export default WriteArea