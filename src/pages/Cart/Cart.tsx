import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { AdressContainer, CartContainer, HeadingAdress, HeadingPayment, InfoContainer, PaymentContainer } from "./styles";
import { useTheme } from "styled-components";

export default function Cart() {
  const theme = useTheme();

  return (
    <CartContainer>
      
      <InfoContainer>
        <h2>Complete o seu Pedido</h2>
          <form>  
            <AdressContainer>
            
              <HeadingAdress>
                <h3>
                  <MapPinLine size={22} color={theme["yellow-dark"]}/>
                  Endereço de Entrega
                </h3>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </HeadingAdress>
                <input type="text" placeholder="CEP" />
                <input type="text" placeholder="Rua" />
                <input type="number" placeholder="number" />
                <input type="text" placeholder="Complemento" />
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
            </AdressContainer>

            <PaymentContainer>
              <HeadingPayment>
                <h3>
                  <CurrencyDollar size={22} color={theme["purple"]}/>
                  Pagamento
                </h3>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </HeadingPayment>
            </PaymentContainer>
          </form>
      </InfoContainer>
      

      <InfoContainer>
        <h2>Cafés selecionados</h2>

      </InfoContainer>
    </CartContainer>
  )
}
