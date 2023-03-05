import React, { useContext, useState, useEffect } from "react";
import { FaCartPlus, FaTeamspeak, FaJediOrder } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart/CartContext";
import { ProdutoContext } from "../../contexts/produtos/ProdutosContext";

import Input from '../Input'

const Menu = () => {

  const navigate = useNavigate()

  const { cart } = useContext(CartContext)
  const { produtos, procuraProduto } = useContext(ProdutoContext)

  const [showInput, setShowInput] = useState(true);
  const location = window.location.pathname;

  useEffect(() => {
    setShowInput(location === '/');
  }, [location]);

  const [text, setText] = useState('')

  const handleChangeSearchInput = (e) => setText(procuraProduto(e.target.value))

  return (

    <header className="menu">
      <div className="menu-content">
        <h1 onClick={() => navigate('/')}>Sushi Lab</h1>
        {showInput && (
          <div style={{ width: "35%" }}>
            <Input
              value={text}
              onChange={handleChangeSearchInput}
              placeholder="O que deseja ?"
              name="text"
            />
          </div>
        )}
        <ul>
          <li onClick={() => navigate('/cart')} data-testid="cart-link">
            <FaCartPlus color="#fff" />&nbsp;
            Carrinho - {cart.length}
          </li>
          <li onClick={() => navigate('/faleconosco')}>
            | <FaTeamspeak color="#fff" />&nbsp;
            Fale Conosco
          </li>
          <li onClick={() => navigate('/meuspedidos')}>
            | <FaJediOrder color="#fff" />&nbsp;
            Meus Pedidos
          </li>
        </ul>
      </div>
    </header >

  );
};

export default Menu;
