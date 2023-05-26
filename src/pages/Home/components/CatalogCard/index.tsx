import { ShoppingCart } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../components/QuantityInput'
import {
  AddCartWrapper,
  CardFooter,
  CatalogCardContainer,
  Description,
  Name,
  Tags,
} from './styles'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CatalogCard({ coffee }: CoffeeProps) {
  return (
    <CatalogCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <p>R$</p>
          <h4>{coffee.price}</h4>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={() => {}}
            onDecrease={() => {}}
            quantity={2}
            size="medium"
          />
          <button onClick={() => {}}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CatalogCardContainer>
  )
}
