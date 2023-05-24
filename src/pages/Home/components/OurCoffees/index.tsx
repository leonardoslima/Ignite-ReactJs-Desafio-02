import { CatalogCard } from '../CatalogCard'
import { CoffeeList, OurCoffeesContainer } from './styles'
import { coffees } from '../../../../data/coffees'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <h4>Nossos cafés</h4>
      <CoffeeList>
        {coffees.map((coffees) => (
          <CatalogCard key={coffees.id} coffee={coffees} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
