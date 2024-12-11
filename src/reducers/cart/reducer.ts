export interface Item {
    id: number;
    quantity: number;
}

interface CartState {
    cart: Item[]
  }


export function cartReducer(state: CartState){
    console.log(state);
}