import React, { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

import Input from '../Input'

const Menu = () => {

  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  const [text, setText] = useState('')

  const handleChangeSearchInput = (e) => setText(e.target.value)

  return (

    <header className="menu">
      <div className="menu-content">
        <h1 onClick={() => navigate('/')}>Sushi Lab</h1>

        <Input
          value={text}
          onChange={handleChangeSearchInput}
          placeholder="O que deseja ?"
          name="text"
        />

        <ul>
          <li onClick={() => navigate('/cart')} data-testid="cart-link">
            <FaCartPlus color="#fff" />
            | Carrinho - {cart.length} items
          </li>
          <li onClick={() => navigate('/faleconosco')}>
            | Fale Conosco
          </li>
          <li onClick={() => navigate('/meuspedidos')}>
            | Meus Pedidos
          </li>
        </ul>
      </div>
    </header>

  );
};

export default Menu;
