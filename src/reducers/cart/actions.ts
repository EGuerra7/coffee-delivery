import { NavigateFunction } from "react-router-dom"
import { OrderInfo } from "../../pages/Cart/Cart"
import { Item } from "./reducer"

export enum ActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
    DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
    CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions = 
    |   {
            type: ActionTypes.ADD_ITEM
            payload: {
                item: Item
            }
        }
    |   {
            type:
            | ActionTypes.DECREMENT_ITEM_QUANTITY
            | ActionTypes.INCREMENT_ITEM_QUANTITY
            | ActionTypes.REMOVE_ITEM
            payload: {
                itemCoffee: Item['coffee']
            }
        }
    |   {
            type: ActionTypes.CHECKOUT_CART
            payload: {
                order: OrderInfo
                callback: NavigateFunction
            }
        }

export function addItemAction(item: Item) {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
          item,
        },
      } satisfies Actions
}

export function removeItemAction(itemCoffee: Item['coffee']){
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            itemCoffee
        },
      } satisfies Actions
}

export function incrementItemQuantityAction(itemCoffee: Item['coffee']){
    return {
        type: ActionTypes.INCREMENT_ITEM_QUANTITY,
        payload: {
            itemCoffee
        },
      } satisfies Actions
}

export function decrementItemQuantityAction(itemCoffee: Item['coffee']){
    return {
        type: ActionTypes.DECREMENT_ITEM_QUANTITY,
        payload: {
            itemCoffee
        },
      } satisfies Actions
}

export function checkoutCartAction(
    order: OrderInfo, 
    callback: NavigateFunction
){
    return {
        type: ActionTypes.CHECKOUT_CART,
        payload: {
          order,
          callback,
        },
      } satisfies Actions
}

