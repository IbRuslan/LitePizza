import {Dispatch} from "redux";
import {PizzaApi, Pizzas} from "../api/api";
import {ActionAppType, setStatusLoadingAC} from "./app-reducer";
import {menuSortType} from "../Components/Sort";

export type CategoriesType = {
    name: "Все" | "Мясные" | "Вегетарианская" | "Гриль" | "Острые" | "Закрытые",
    category: 0 | 1 | 2 | 3 | 4 | 5
}

const initialState = {
    pizzas: [] as Pizzas[],
    mainCategory: {name: "Все", category: 0} as CategoriesType,
    mainSort: { name: 'популярности', sort: 'rating' } as menuSortType,
}
export type PizzasState = typeof initialState

export type ActionPizzaType =
    | ReturnType<typeof getPizzasAC>
    | ReturnType<typeof changeCategory>
    | ReturnType<typeof changeSort>
    | ActionAppType

export const pizzasReducer = (state: PizzasState = initialState, action: ActionPizzaType): PizzasState => {
    switch (action.type) {
        case "GET-PIZZAS":
            return {...state, pizzas: action.pizzas}
        case "CHANGE-CATEGORY":
            return {...state, mainCategory: action.category}
        case "CHANGE-SORT":
            return {...state, mainSort: action.sort}
        default:
            return state
    }
}


export const getPizzasAC = (pizzas: Pizzas[]) => (
    {type: 'GET-PIZZAS', pizzas} as const
)
export const changeCategory = (category: CategoriesType) => (
    {type: 'CHANGE-CATEGORY', category } as const
)
export const changeSort = (sort: menuSortType) => (
    {type: 'CHANGE-SORT', sort} as const
)

export const GetPizzasCategoryTC = (category: CategoriesType, sort: menuSortType) => (dispatch: Dispatch<ActionPizzaType>) => {
    dispatch(setStatusLoadingAC(true))
    PizzaApi.getPizzasCategory(category.category, sort.sort)
        .then(res => {
            console.log(res.data)
            dispatch(getPizzasAC(res.data))
            dispatch(changeCategory(category))
            dispatch(changeSort(sort))
        })
        .catch(e => {
            console.log(e)
        })
        .finally(() => {
            dispatch(setStatusLoadingAC(false))
        })
}

export const GetSelectedPizzasTC = (category: number, sort: string, title: string) => (dispatch: Dispatch<ActionPizzaType>) => {
    dispatch(setStatusLoadingAC(true))
    PizzaApi.getSearchPizzas(category, sort, title)
        .then(res => {
            dispatch(getPizzasAC(res.data))
        })
        .catch(e => {
            console.log(e)
        })
        .finally(() => {
            dispatch(setStatusLoadingAC(false))
        })
}