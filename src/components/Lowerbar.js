import React from 'react'

import WriteArea from "./WriteArea.js";
import ReadArea from './ReadArea.js';

function Lowerbar() {
  return (
    <div id='lowerbar'>
      <ReadArea />
      <WriteArea />
    </div>
  )
}

export default Lowerbar