import { styled } from 'styled-components'

export const OurCoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;

  h4 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes['title-title-l']};
    font-weight: 800;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`
