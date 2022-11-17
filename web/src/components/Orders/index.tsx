import { Container } from './styles'

import { OrdersBoard } from '../OrdersBoard'
import { Order } from '../../types/Order'

const orders: Order[] = [
  {
    _id: '6373ebbdf1072fa6771e0c90',
    table: '1',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668539325839-quatro-queijos.png',
          price: 40,
        },
        quantity: 2,
        _id: '6373ebbdf1072fa6771e0c91'
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1668540350040-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '6373ebbdf1072fa6771e0c92'
      }
    ]
  }
]

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={orders}
      />

      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />

      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />

    </Container>
  )
}