import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 8.25rem;
  height: 2.875rem;

  border-radius: 6px;
  padding: 12px 8px;

  background: ${(props) => props.theme.colors['brand-yellow']};
`
