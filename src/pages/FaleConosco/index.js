import React from 'react';
import './FaleConosco.css';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Menu from '../../components/Menu'

function FaleConosco() {
  return (
    <div>

      <Menu />
      <div className="div1">
        <h2>Fale Conosco</h2>
        <div className="fale-conosco-flex">

          <div className="fale-conosco-div2">
            <form>

              <div class>
                <Input
                  name="nome"
                  label="Nome:"
                />

                <Input
                  name="email"
                  label="E-Mail:"
                />

                <TextArea
                  name="mensagem"
                  label="Mensagem:"
                />

                <button type="submit" className='alinhamento-button-centro'>Enviar</button>
              </div>
            </form>
          </div>
          <div className='alinhamento-div-titulo'>
            <p className="alinhamento-texto">Informações de Contato:</p>
            <p className="alinhamento-texto">Email: contato@exemplo.com</p>
            <p className="alinhamento-texto">Telefone: (11) 5555-5555</p>
            <p className="alinhamento-texto">WhatsApp: (11) 55555-5555</p>
            <p className="alinhamento-texto">Horário de Funcionamento: Seg-Sex, 9h-18h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaleConosco;
