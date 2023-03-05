import { createContext, useEffect, useState } from "react";
import { priceFormat } from "../../utils/priceFormat";
import api from '../../services/api'

export const ProdutoContext = createContext({})

export const ProdutoProvider = ({ children }) => {

  const [produtos, setProdutos] = useState([]);

  function getAllProdutos() {
    api.get('/products')
      .then((response) => {
        setProdutos(response.data.map((item) => {
          return {
            ...item,
            priceFormatted: priceFormat(item.price)
          }
        }))
      })
      .catch(() => alert('Houve um erro ao buscar os produtos :('))
  }

  function procuraProduto(nomeProduto) {

    const encontrados = produtos.filter((produto) => {
      if (produto.name.toLowerCase().includes(nomeProduto.toLowerCase())) {
        return produto;
      }
    })

    if (!nomeProduto) {
      getAllProdutos()
    } else {
      setProdutos(encontrados)
    }

  }

  useEffect(() => {
    getAllProdutos()
  }, [])


  return (
    <ProdutoContext.Provider value={{
      produtos,
      procuraProduto,
    }}>
      {children}
    </ProdutoContext.Provider>
  )
}