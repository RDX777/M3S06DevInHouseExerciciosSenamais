import React from 'react';

function List({ labelTitle, itens }) {
  return (
    <div className='borda-div'>
      <label>{labelTitle}</label>
      <br />
      <ul>

        {itens.map((item) => (
          <li>{item.name} - {item.quantity} x</li>
        ))}

      </ul>
    </div>
  )
    ;
}

export default List;