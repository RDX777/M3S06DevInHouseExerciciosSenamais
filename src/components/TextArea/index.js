import React from 'react';

// import { Container } from './styles';

function TextArea({ label, name }) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <textarea
        className="textarea"
        name={name}
        placeholder="Digite sua mensagem aqui..."
      />
    </div>
  )
    ;
}

export default TextArea;