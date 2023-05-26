import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import {
  CompleteOrderFormContainer,
  FormSectionContainer,
  SectionTitle,
} from './styles'
import { useTheme } from 'styled-components'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrderFormContainer>
      <h4>Complete seu pedido</h4>

      <FormSectionContainer>
        <SectionTitle>
          <MapPinLine size={22} color={colors['brand-yellow-dark']} />
          <span>
            <h5>Endereço de Entrega</h5>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </span>
        </SectionTitle>

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle>
          <CurrencyDollar size={22} color={colors['brand-purple']} />
          <span>
            <h5>Pagamento</h5>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </span>
        </SectionTitle>

        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
