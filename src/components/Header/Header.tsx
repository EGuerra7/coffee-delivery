import { HeaderContainer, PlaceItem, ShopButton } from "./styles";
import logoCoffee from '../../assets/coffe-logo.svg';

import { useTheme } from "styled-components";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);
  const theme = useTheme();

  
  return (
    <HeaderContainer>
        <Link to="/">
          <img src={logoCoffee} />
        </Link>

        <section>
            <PlaceItem>
                <MapPin size={22} color={theme.purple} weight="fill"/>
                <span>Porto Alegre, RS</span>
            </PlaceItem>

            <Link to={'cart'}>
            <ShopButton>
              <ShoppingCart  size={22} weight="fill"/>
              {cart.length > 0 ? <span >{ cart.length }</span> : null}
            </ShopButton>
            </Link>
        </section>
    </HeaderContainer>
    
  )
}
