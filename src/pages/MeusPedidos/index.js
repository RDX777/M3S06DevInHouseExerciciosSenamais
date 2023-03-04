import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import Pedido from '../../components/Pedido';
import api from '../../services/api';

function MeusPedidos() {

  const [meusPedidos, setMeusPedidos] = useState([{
    name: '',
    contact: '',
    address: '',
    cart: [],
  }])

  useEffect(() => {
    api.get('/orders')
      .then((response) => {
        setMeusPedidos(response.data.map((item) => {
          return {
            ...item,
            item
          }
        }))
      })
      .catch(() => alert('Houve um erro ao buscar os produtos :('))
  }, [])


  return (
    <div>
      <Menu />
      <div>
        {meusPedidos.map((pedido) => (
          <div>
            <Pedido
              pedido={pedido}
            />
            <hr />
          </div>
        ))}
      </div>

    </div>
  );
}

export default MeusPedidos;