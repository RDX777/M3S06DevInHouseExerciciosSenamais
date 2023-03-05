import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { CartProvider } from './contexts/cart/CartContext';
import { ProdutoProvider } from './contexts/produtos/ProdutosContext';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ProdutoProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </ProdutoProvider>
    </BrowserRouter >
  );
}

export default App;
