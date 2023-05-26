import { styled } from 'styled-components'

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  h4 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes['title-title-xs']};
  }
`

export const FormSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;

  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
`

export const SectionTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  h5 {
    font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
  }

  p {
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  }
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }
  .street {
    grid-column: span 3;
  }
  .complement {
    grid-column: span 2;
  }
`

export const FormInput = styled.input`
  padding: ${({ theme }) => theme.textSizes['components-button-s']};

  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid #e6e5e5;
  border-radius: 4px;

  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors['brand-yellow']};
  }
`

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`
