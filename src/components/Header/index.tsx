import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

import logoCoffee from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} alt="" />
      </NavLink>

      <HeaderButtonsContainer>
        <HeaderButton variant={'yellow'}>
          <MapPin size={20} weight="fill" />
          Porto Alegre, RS
        </HeaderButton>

        <HeaderButton variant={'purple'}>
          <span>10</span>
          <ShoppingCart size={20} weight="fill" />
        </HeaderButton>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
