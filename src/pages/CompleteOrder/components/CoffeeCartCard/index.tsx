import { Trash } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../components/QuantityInput'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/americano.png`} alt="" />
        <div>
          <h5>Café Americano</h5>

          <ActionsContainer>
            <QuantityInput
              size="small"
              onIncrease={() => {}}
              onDecrease={() => {}}
              quantity={1}
            />
            <RemoveButton onClick={() => {}}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9,99</p>
    </CoffeeCartCardContainer>
  )
}
