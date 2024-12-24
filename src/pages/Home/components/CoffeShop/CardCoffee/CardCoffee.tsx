import { CardCoffeeContainer, CoffeeTypes, CoffeeValues, CoffeInfos } from "./styles";
import InputNumber from "../../../../../components/InputNumber/InputNumber";
import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../../../contexts/CartContext";

export interface Coffee {
    id: number;
    ulrImage: string;
    types: string[];
    name: string;
    description: string;
    value: number;
}

export default function CardCoffee({ coffee }: { coffee: Coffee }) {
    const { addItem } = useContext(CartContext);
    const { ulrImage, types, name, description, value } = coffee;

    const formattedValue = value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      const [countAmount, setCountAmount] = useState(1);

      function handleMinusAcount() {
        if(countAmount > 1){
          setCountAmount(countAmount - 1);
        } 
          
      }
    
      function handlePlusAcount() {
        setCountAmount(countAmount + 1);
        }

    function handleAddItem(){
        addItem({ coffee: coffee, quantity: countAmount});
    }

    
      
  return (
    <CardCoffeeContainer>
        <main>
            <div>
                <img src={ulrImage} />
                <CoffeeTypes>
                    { types.map((type, index) => {
                        return(
                            <span key={index}>{ type }</span>
                        )
                    }) }
                </CoffeeTypes>
            </div>
            <CoffeInfos>
                <h3>{ name }</h3>
                <p>{ description }</p>
            </CoffeInfos>
            <CoffeeValues>
                <span className="value">R$ <b>{ formattedValue }</b></span>
                <InputNumber 
                countAmount={countAmount}
                handleMinusAcount={handleMinusAcount} 
                handlePlusAcount={handlePlusAcount}
                />
                <button onClick={handleAddItem} className="shop_btn">
                    <ShoppingCart size={22} weight="fill"/>
                </button>
            </CoffeeValues>
        </main>
    </CardCoffeeContainer>
  )
}
