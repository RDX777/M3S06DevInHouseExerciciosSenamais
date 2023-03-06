import Label from '../../components/Label';
import List from '../../components/List';

function Pedido({ pedido }) {

  return (
    <div className='main-container'>
      <div>

        <Label
          labelTitle="Nome:"
          labelText={pedido.name}
        />

        <Label
          labelTitle="Contato:"
          labelText={pedido.contact}
        />

        <Label
          labelTitle="Endereço Cliente:"
          labelText={pedido.address}
        />

        <List
          labelTitle="Lista de produtos"
          itens={pedido.cart}
        />
      </div>
    </div>
  );
}

export default Pedido;