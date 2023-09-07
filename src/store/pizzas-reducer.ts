import {Dispatch} from "redux";
import {PizzaApi, Pizzas} from "../api/api";
import {ActionAppType, setStatusLoadingAC} from "./app-reducer";

const initialState = [] as Pizzas[]
export type PizzasState  = Pizzas[]

export type ActionPizzaType =
    | ReturnType<typeof getPizzasAC> | ActionAppType

export const pizzasReducer = (state: PizzasState = initialState, action: ActionPizzaType): PizzasState => {
    switch (action.type) {
        case "GET-PIZZAS":
            return action.pizzas
        default:
            return state
    }
}


export const getPizzasAC = (pizzas: any) => (
    {type: 'GET-PIZZAS', pizzas} as const
)

export const GetPizzasTC = (sort: string) => (dispatch: Dispatch<ActionPizzaType>) => {
    dispatch(setStatusLoadingAC(true))
    PizzaApi.getPizzas(sort)
        .then(res => {
            dispatch(getPizzasAC(res.data))
        })
        .catch(e => {
            console.log(e)
        })
        .finally(()=>{
            dispatch(setStatusLoadingAC(false))
        })
}

export const GetPizzasCategoryTC = (category: number, sort: string) => (dispatch: Dispatch<ActionPizzaType>) => {
    dispatch(setStatusLoadingAC(true))
    PizzaApi.getPizzasCategory(category, sort)
        .then(res => {
            dispatch(getPizzasAC(res.data))
        })
        .catch(e => {
            console.log(e)
        })
        .finally(()=>{
            dispatch(setStatusLoadingAC(false))
        })
}