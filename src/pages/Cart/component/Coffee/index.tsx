import { useContext } from "react";
import InputNumber from "../../../../components/InputNumber/InputNumber";
import { Item } from "../../../../reducers/cart/reducer";
import { CoffeeCartContainer, RemoveButton } from "./styles";
import { CartContext } from "../../../../contexts/CartContext";
import { Coffee } from "../../../Home/components/CoffeShop/CardCoffee/CardCoffee";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";



export function CoffeeCart(cart: Item ) {
    const theme = useTheme();
    const { incrementItemQuantity, decrementItemQuantity, removeItem } = useContext(CartContext);
    const { ulrImage, name, value } = cart.coffee;

    
    const valueAmount = value * cart.quantity;


    function handleItemIncrement(coffee: Coffee) {
      incrementItemQuantity(coffee)
    }
    
    function handleItemDecrement(coffee: Coffee) {
      decrementItemQuantity(coffee)
    }

    function handleRemoveItem(coffee: Coffee){
      removeItem(coffee);
    }

  return (
    <CoffeeCartContainer>
        <div className="infos">
        <img src={ulrImage} />
            <div className="infos-text">
                <span>{name}</span>
                <div className="infos-inputs">
                    <InputNumber 
                    countAmount={cart.quantity}
                    handlePlusAcount={() => handleItemIncrement(cart.coffee)}
                    handleMinusAcount={() => handleItemDecrement(cart.coffee)} 
                    />
                    <RemoveButton onClick={() => handleRemoveItem(cart.coffee)}>
                        <Trash size={16} color={theme.purple}/>
                        REMOVER
                    </RemoveButton>
                </div>
            </div>
        </div>
        <b className="value">
          {new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency',
          }).format(valueAmount)}  
        </b>
    </CoffeeCartContainer>
  )
}
