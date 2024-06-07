import {useDispatch} from "react-redux";
import {combineReducers, createStore} from "redux";
import {appReducer} from "../reducers/app-reducer.ts";
import {cartReducer} from "../reducers/cart-reducer.ts";

const rootReducer = combineReducers({
  appReducer: appReducer,
  cartReducer: cartReducer
});

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
