import { AddressFormContainer, FormInput } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <FormInput placeholder="CEP" className="cep" />
      <FormInput placeholder="Rua" className="street" />
      <FormInput placeholder="Número" className="number" />
      <FormInput placeholder="Complemento" className="complement" />
      <FormInput placeholder="Bairro" />
      <FormInput placeholder="Cidade" />
      <FormInput placeholder="UF" />
    </AddressFormContainer>
  )
}
