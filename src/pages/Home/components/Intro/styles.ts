import styled from 'styled-components'

import introBackgroundImg from '../../../../assets/intro-background.png'

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme.colors['base-white']} 0%,
      ${theme.colors['base-background']} 100%
    )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const SectionOne = styled.section`
  h1 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes['title-title-xl']};
    color: ${({ theme }) => theme.colors['base-title']};
    margin-bottom: 1rem;
  }

  span {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`
export const BenefitsContainer = styled.div`
  width: 100%;
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
`
