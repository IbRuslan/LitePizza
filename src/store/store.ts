import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ActionPizzaType, pizzasReducer} from "./pizzas-reducer";
import {ActionAppType, appReducer} from "./app-reducer";
import {cartActionType, cartReducer} from "./cart-reducer";


const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    cart: cartReducer,
    app: appReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof store.getState>
export type StateActionType = ActionPizzaType | ActionAppType | cartActionType

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, StateActionType>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector