import { Clock, CurrencyDollar, MapPin } from '@phosphor-icons/react'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'
import { useTheme } from 'styled-components'

import confirmedOrderIllustration from '../../assets/confirmed-order.svg'

export function OrderConfirmedPage() {
  const { colors } = useTheme()

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h4>Agora é só aguardar que logo o café chegará até você</h4>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <p>
                Entrega em <strong>Rua João Daniel Martinelli</strong>, 102
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            }
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow-dark']}
            text={
              <p>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </p>
            }
          />
        </OrderDetailsContainer>

        <img src={confirmedOrderIllustration} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}
