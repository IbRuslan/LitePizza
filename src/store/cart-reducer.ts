import {Pizzas} from "../api/api";

export type CartPizzaType = Pizzas & { count: number }

const initialState = {
    categoryId: 0,
    items: [] as CartPizzaType[],
    totalCount: 0,
    totalPrice: 0
}

type cartInitialState = typeof initialState

export type cartActionType =
    | ReturnType<typeof addProduct>
    | ReturnType<typeof removeProduct>
    | ReturnType<typeof removeProducts>

export const cartReducer = (state: cartInitialState = initialState, action: cartActionType): cartInitialState => {
    switch (action.type) {
        case "ADD-PRODUCT": {
            const findItem = state.items.find(p => p.id === action.payload.id);

            if (findItem) {
                const updatedItems = state.items.map(p =>
                    p.id === action.payload.id ? { ...p, count: p.count + 1 } : p
                );
                return {
                    ...state,
                    items: updatedItems,
                    totalPrice: state.totalPrice + action.payload.price
                };
            } else {
                const newItem = { ...action.payload, count: 1 };
                return {
                    ...state,
                    items: [...state.items, newItem],
                    totalPrice: state.totalPrice + action.payload.price
                };
            }
        }
        case "REMOVE-PRODUCT":
            return {...state, items: state.items.filter(p => p.id !== action.payload.id), totalPrice: state.totalPrice - action.payload.price }
        case "REMOVE-PRODUCTS":
            return {...state, items: [], totalCount: 0, totalPrice: 0}
        default:
            return state
    }
}

export const addProduct = (payload: Pizzas) => (
    {type: 'ADD-PRODUCT', payload} as const
)
export const removeProduct = (payload: CartPizzaType) => (
    {type: 'REMOVE-PRODUCT', payload} as const
)
export const removeProducts = () => (
    {type: 'REMOVE-PRODUCTS'} as const
)