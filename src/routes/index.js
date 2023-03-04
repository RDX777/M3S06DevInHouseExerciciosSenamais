import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cart from '../pages/Cart';
import Details from '../pages/Details';
import FaleConosco from '../pages/FaleConosco';

import Home from '../pages/Home';
import MeusPedidos from '../pages/MeusPedidos';
import Order from '../pages/Order';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details" element={<Details />} />
      <Route path="cart" element={<Cart />} />
      <Route path="order" element={<Order />} />
      <Route path="faleconosco" element={<FaleConosco />} />
      <Route path="meuspedidos" element={<MeusPedidos />} />
      <Route path="*" element={<h1>Pagina não encontrada</h1>} />
    </Routes>
  );
}

export default AppRoutes;