import {PizzaBase, PizzaSize} from "../feature/main/main-components/pizza/pizza-item/pizza-item.tsx";

type ActionType = ReturnType<typeof cartAC>


const initialState: CartState = {
  pizza: [] as AddPizzaType[]
}

export type AddPizzaType = {
  id: string
  title: string
  size: PizzaSize
  base: PizzaBase
  prise: number
}

export type CartState = {
  pizza: AddPizzaType[]
}

export const cartReducer = (state = initialState, action: ActionType): CartState => {
  console.log(state)
  switch (action.type) {
    case 'CART/PIZZA_ADD':
      return {...state, pizza: [...state.pizza, {...action.payload}]}
    default:
      return state
  }
}

export const cartAC = (pizza: AddPizzaType) => {
  return {
    type: 'CART/PIZZA_ADD',
    payload: pizza
  }
}