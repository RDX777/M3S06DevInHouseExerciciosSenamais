import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { CartContext } from '../../contexts/cart/CartContext'
import { mockCart } from '../../mocks/cart.mock'
import MeusPedidos from '.';

const makeSut = () => render(
  <CartContext.Provider value={{ cart: mockCart }}>
    <MeusPedidos />
  </CartContext.Provider>, { wrapper: BrowserRouter })

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('MeusPedidos', () => {

  it('Deve renderizar o menu com os principais elementos', () => {
    makeSut()

    expect(screen.getByText(/Nome/i)).toBeInTheDocument()
    expect(screen.getByText(/Contato/i)).toBeInTheDocument()
    expect(screen.getByText(/Endereço Cliente/i)).toBeInTheDocument()
    expect(screen.getByText(/Lista de produtos/i)).toBeInTheDocument()

  })

})