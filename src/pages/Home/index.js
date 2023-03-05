import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProdutoContext } from "../../contexts/produtos/ProdutosContext";

import Menu from "../../components/Menu";
const Home = () => {
  const { produtos } = useContext(ProdutoContext)

  const navigate = useNavigate()

  return (
    <div>
      <Menu />

      <div className="main-container">
        <div className="products-list">
          {produtos.map((product) => (
            <div data-testid="product-card" className="card" onClick={() => navigate('/details', { state: product })} key={product.id}  >
              <div className="card-content" datatest-id="card-product">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <span>{(product.priceFormatted)}</span>
              </div>
              <img
                alt={product.name}
                src={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
