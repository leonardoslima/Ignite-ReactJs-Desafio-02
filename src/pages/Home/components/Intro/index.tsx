import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  SectionOne,
} from './styles'

import introImg from '../../../../assets/intro-img.png'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export function Intro() {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <SectionOne>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </SectionOne>

          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconBg={colors['base-text']}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              iconBg={colors['brand-yellow']}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconBg={colors['brand-purple']}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>

        <img src={introImg} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
