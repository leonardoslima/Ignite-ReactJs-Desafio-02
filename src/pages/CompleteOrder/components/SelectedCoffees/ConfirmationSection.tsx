import { Button } from '../../../../components/Button'
import { ConfirmationSectionContainer, TotalDiv } from './styles'

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <p>Total de itens</p>
        <p>R$ R$ 29,70</p>
      </div>
      <div>
        <p>Entrega</p>
        <p>R$ R$ 3,50</p>
      </div>
      <TotalDiv>
        <p color="subtitle">Total</p>
        <p color="subtitle">R$ R$ 33,20</p>
      </TotalDiv>

      <Button text="Confirmar Pedido" type="submit" />
    </ConfirmationSectionContainer>
  )
}
