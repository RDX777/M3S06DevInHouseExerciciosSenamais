import React from 'react';

function Label({ labelTitle, labelText }) {
  return (
    <div className='borda-div'>
      <label className="observation-section">{labelTitle}</label>
      <br />
      <label>{labelText}</label>
    </div >
  )
    ;
}

export default Label;