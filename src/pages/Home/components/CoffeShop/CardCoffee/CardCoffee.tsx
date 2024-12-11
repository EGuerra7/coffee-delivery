import { CardCoffeeContainer, CoffeeTypes, CoffeeValues, CoffeInfos } from "./styles";
import ExpressCup from '../../../../../assets/CoffesCup/expresso.svg';
import InputNumber from "../../../../../components/InputNumber/InputNumber";
import { ShoppingCart } from "phosphor-react";

export default function CardCoffee() {
  return (
    <CardCoffeeContainer>
        <main>
            <div>
                <img src={ExpressCup} />
                <CoffeeTypes>
                    <span>TRADICIONAL</span>
                    <span>COM LEITE</span>
                </CoffeeTypes>
            </div>
            <CoffeInfos>
                <h3>Expresso Tradicional</h3>
                <p>O tradicional café feito com água quente e grãos moídos</p>
            </CoffeInfos>
            <CoffeeValues>
                <span className="value"> R$ <b>9,90</b></span>
                <InputNumber />
                <button className="shop_btn">
                    <ShoppingCart size={22} weight="fill"/>
                </button>
            </CoffeeValues>
        </main>
    </CardCoffeeContainer>
  )
}
