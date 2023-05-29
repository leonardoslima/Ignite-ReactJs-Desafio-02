import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  h4 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes['title-title-xs']};
  }
`

export const DetailsContainer = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;

  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div p:nth-child(1) {
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  }
`

export const TotalDiv = styled.div`
  > p {
    font-size: ${({ theme }) => theme.textSizes['title-title-s']} !important;
    font-weight: 700;
    line-height: 1.625;
  }
`
