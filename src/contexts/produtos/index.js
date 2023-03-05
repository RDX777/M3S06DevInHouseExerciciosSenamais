import { createContext } from "react";

export const ProdutoContext = createContext([]);

export function ProdutoProvider({ children }) {

  return (
    <ProdutoContext.Provider
      value={{}}>
      {children}
    </ProdutoContext.Provider>
  )
}