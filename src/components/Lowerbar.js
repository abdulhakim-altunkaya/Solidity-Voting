import React from 'react'

import WriteArea from "./WriteArea.js";
import ReadAreaMain from './ReadAreaMain.js';

function Lowerbar() {
  return (
    <div id='lowerbar'>
      <ReadAreaMain />
      <WriteArea />
    </div>
  )
}

export default Lowerbar