import {Dispatch} from "redux";
import {PizzaApi, Pizzas} from "../api/api";

const initialState = [] as Pizzas[]
export type PizzasState  = Pizzas[]

export type ActionPizzaType =
    | ReturnType<typeof getPizzasAC>

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

export const GetPizzasTC = () => (dispatch: Dispatch<ActionPizzaType>) => {
    PizzaApi.getPizzas()
        .then(res => {
            dispatch(getPizzasAC(res.data))
        })
}