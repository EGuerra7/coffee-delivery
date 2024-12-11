import CardCoffee from "./CardCoffee/CardCoffee";
import { CoffeContainer, CoffesSection } from "./styles";

export default function CoffeShop() {
  return (
    <CoffeContainer>
        <h1>Nossos cafés</h1>
        <CoffesSection>
            <CardCoffee />
        </CoffesSection>
    </CoffeContainer>
  )
}
