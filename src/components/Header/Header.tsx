import { HeaderContainer } from "./styles";
import logoCoffee from '../../assets/coffe-logo.svg';
import { MapPin } from "phosphor-react";

export default function Header() {
  return (
    <HeaderContainer>
        <img src={logoCoffee} />

        <section>
            <div>
                <MapPin size={22}/>
                <span>Porto Alegre, RS</span>
            </div>
        </section>
    </HeaderContainer>
    
  )
}
