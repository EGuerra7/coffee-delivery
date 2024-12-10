import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { HomeContainer, IntroItens, IntroSection } from "./styles";
import { useTheme } from "styled-components";

export default function Home() {
  const theme = useTheme();

  return (
    <HomeContainer>
      <IntroSection>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
        </div>
        <IntroItens>
          <div>
            <span>
              <ShoppingCart weight="fill" color={theme.white}/>
              Compra simples e segura
            </span>
            <span>
              <Package weight="fill" color={theme.white}/>
              Embalagem mantém o café intacto
            </span>
          </div>
          <div>
            <span>
              <Timer weight="fill" color={theme.white}/>
              Entrega rápida e rastreada
            </span>
            <span>
              <Coffee  weight="fill" color={theme.white}/>
              O café chega fresquinho até você
            </span>
          </div>
        </IntroItens>
      </IntroSection>
    </HomeContainer>
  )
}
