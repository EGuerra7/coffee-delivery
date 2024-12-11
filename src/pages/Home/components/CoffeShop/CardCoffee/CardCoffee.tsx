import { CardCoffeeContainer } from "./styles";
import ExpressCup from '../../../../../assets/CoffesCup/expresso.svg';

export default function CardCoffee() {
  return (
    <CardCoffeeContainer>
        <main>
            <img src={ExpressCup} />
        </main>
    </CardCoffeeContainer>
  )
}
