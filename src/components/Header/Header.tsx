import { HeaderContainer, PlaceItem, ShopButton } from "./styles";
import logoCoffee from '../../assets/coffe-logo.svg';

import { useTheme } from "styled-components";
import { MapPin, ShoppingCart } from "phosphor-react";

export default function Header() {
  const theme = useTheme();

  return (
    <HeaderContainer>
        <img src={logoCoffee} />

        <section>
            <PlaceItem>
                <MapPin size={22} color={theme.purple} weight="fill"/>
                <span>Porto Alegre, RS</span>
            </PlaceItem>
            <ShopButton>
              <ShoppingCart size={22} weight="fill"/>
            </ShopButton>
        </section>
    </HeaderContainer>
    
  )
}
