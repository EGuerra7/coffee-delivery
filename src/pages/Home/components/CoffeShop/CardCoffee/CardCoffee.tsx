import { CardCoffeeContainer, CoffeeTypes, CoffeeValues, CoffeInfos } from "./styles";

import InputNumber from "../../../../../components/InputNumber/InputNumber";
import { ShoppingCart } from "phosphor-react";

export interface Coffee {
    ulrImage: string;
    types: string[];
    name: string;
    description: string;
    value: number;
}

export default function CardCoffee({ coffee }: { coffee: Coffee }) {
    const { ulrImage, types, name, description, value } = coffee;

    const formattedValue = value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      
  return (
    <CardCoffeeContainer>
        <main>
            <div>
                <img src={ulrImage} />
                <CoffeeTypes>
                    { types.map(type => {
                        return(
                            <span>{ type }</span>
                        )
                    }) }
                </CoffeeTypes>
            </div>
            <CoffeInfos>
                <h3>{ name }</h3>
                <p>{ description }</p>
            </CoffeInfos>
            <CoffeeValues>
                <span className="value"> R$ <b>{ formattedValue }</b></span>
                <InputNumber />
                <button className="shop_btn">
                    <ShoppingCart size={22} weight="fill"/>
                </button>
            </CoffeeValues>
        </main>
    </CardCoffeeContainer>
  )
}
