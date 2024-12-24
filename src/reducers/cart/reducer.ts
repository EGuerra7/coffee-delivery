import { OrderInfo } from './../../pages/Cart/Cart';
import { produce } from "immer"
import { Coffee } from "../../pages/Home/components/CoffeShop/CardCoffee/CardCoffee"
import { Actions, ActionTypes } from "./actions"

export interface Item {
    coffee: Coffee
    quantity: number
  }
  
  export interface Order extends OrderInfo {
    id: number
    itens: Item[]
  }
  
  interface CartState {
    cart: Item[]
    orders: Order[]
  }

export function CartReducer(state: CartState, action: Actions){
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            return produce(state, (draft) => {
                const itemAlreadyAdded = draft.cart.find(
                    (item) => item.coffee.id === action.payload.item.coffee.id,
                  )

                if (itemAlreadyAdded) {
                    itemAlreadyAdded.quantity += action.payload.item.quantity
                  } else {
                    draft.cart.push(action.payload.item)
                  }
            })
        
        case ActionTypes.REMOVE_ITEM:
            return produce(state, (draft) => {
                const itemToRemoveId = draft.cart.findIndex(
                    (item) => item.coffee.id === action.payload.itemCoffee.id,
                  )
                  draft.cart.splice(itemToRemoveId, 1)
            })

        case ActionTypes.INCREMENT_ITEM_QUANTITY: 
            return produce(state, (draft) => {
                const itemToIncrement = draft.cart.find(
                    (item) => item.coffee.id === action.payload.itemCoffee.id
                )

                if(itemToIncrement?.coffee.id){
                    itemToIncrement.quantity += 1
                }
            })

        case ActionTypes.DECREMENT_ITEM_QUANTITY:
            return produce(state, (draft) => {
                const itemToIncrement = draft.cart.find(
                    (item) => item.coffee.id === action.payload.itemCoffee.id
                )

                if(itemToIncrement?.coffee.id && itemToIncrement.quantity > 1){
                    itemToIncrement.quantity -= 1
                }
            })

        case ActionTypes.CHECKOUT_CART:
            return produce(state, (draft) => {
                const newOrder = {
                    id: new Date().getTime(),
                    itens: state.cart,
                    ...action.payload.order,
                }
                draft.orders.push(newOrder)
                draft.cart = []
            })
    }
}