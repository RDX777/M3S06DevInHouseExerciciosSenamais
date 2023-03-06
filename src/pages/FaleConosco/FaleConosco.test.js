import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { CartContext } from '../../contexts/cart/CartContext'
import { mockCart } from '../../mocks/cart.mock'
import FaleConosco from '.';

const makeSut = () => render(
  <CartContext.Provider value={{ cart: mockCart }}>
    <FaleConosco />
  </CartContext.Provider>, { wrapper: BrowserRouter })

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('FaleConosco', () => {

  it('Deve renderizar o menu com os principais elementos', () => {
    makeSut()

    expect(screen.getByText(/Nome/i)).toBeInTheDocument()
    expect(screen.getByText(/E-Mail/i)).toBeInTheDocument()
    expect(screen.getByText(/Contato Telefone/i)).toBeInTheDocument()
    expect(screen.getByText(/Mensagem/i)).toBeInTheDocument()
    expect(screen.getByText(/Enviar/i)).toBeInTheDocument()

  })

})