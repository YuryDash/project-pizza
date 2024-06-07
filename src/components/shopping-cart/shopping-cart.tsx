import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {CartState} from "../../reducers/cart-reducer.ts";
import { Navigate } from "react-router-dom";


export const ShoppingCart = () => {
  const cartValues = useSelector<RootState, CartState>(state => state.cartReducer)
  const {pizza} = cartValues
  const mappedPizza = pizza?.map( el => {
    return <div style={{border: '1px solid red'}}>
      <div>title: {el.title}</div>
      <div>base: {el.base}</div>
      <div>size: {el.size}</div>
      <div>prise: {el.prise}</div>
    </div>
  } )
  return (
    <div>
      {pizza.length ? mappedPizza : <Navigate to={'/empty-cart'}/>}
    </div>
  )
}