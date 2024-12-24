import { createContext, ReactNode, useEffect, useReducer } from "react";
import { CartReducer, Item, Order } from "../reducers/cart/reducer";
import { addItemAction, checkoutCartAction, decrementItemQuantityAction, incrementItemQuantityAction, removeItemAction } from "../reducers/cart/actions";
import { useNavigate } from "react-router-dom";
import { OrderInfo } from "../pages/Cart/Cart";



interface CartContextType {
    cart: Item[]
    orders: Order[]
    addItem: (item: Item) => void
    removeItem: (itemId: Item['coffee']) => void
    decrementItemQuantity: (itemId: Item['coffee']) => void
    incrementItemQuantity: (itemId: Item['coffee']) => void
    checkout: (order: OrderInfo) => void
  }

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps){
    const [cartState, dispatch] = useReducer(
        CartReducer,
        {
            cart: [],
            orders: []
        },
        (cartState) => {
            const storedStateAsJSON = localStorage.getItem(
                '@coffee-delivery:cart-state-1.0.0'
            )    
            
            if (storedStateAsJSON){
                return JSON.parse(storedStateAsJSON)
            }

            return cartState;
        }
    )
    
    const navigate = useNavigate();

    const { cart, orders } = cartState;
    
    function addItem(item: Item){
        dispatch(addItemAction(item))
    }

    function removeItem(coffee: Item['coffee']){
        dispatch(removeItemAction(coffee))
    }

    function checkout(order: OrderInfo) {
        dispatch(checkoutCartAction(order, navigate))
    }

    function incrementItemQuantity(coffee: Item['coffee']) {
        dispatch(incrementItemQuantityAction(coffee))
    }

    function decrementItemQuantity(coffee: Item['coffee']) {
        dispatch(decrementItemQuantityAction(coffee))
    }

    useEffect(() => {
        if (cartState) {
          const stateJSON = JSON.stringify(cartState)
    
          localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
        }
      }, [cartState])

    return(
        <CartContext.Provider 
        value={{
            addItem,
            cart,
            orders,
            decrementItemQuantity,
            incrementItemQuantity,
            removeItem,
            checkout,
        }}>
                { children }
        </CartContext.Provider>

    )
}

