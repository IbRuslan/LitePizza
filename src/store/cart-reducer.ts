import {Pizzas} from "../api/api";

export type SymbolType = 'plus' | 'minus'

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
    | ReturnType<typeof changeCountProduct>

export const cartReducer = (state: cartInitialState = initialState, action: cartActionType): cartInitialState => {
    switch (action.type) {
        case "ADD-PRODUCT": {
            const findItem = state.items.find(p => p.id === action.payload.id);

            if (findItem) {
                const updatedItems = state.items.map(p =>
                    p.id === action.payload.id ? {...p, count: p.count + 1, price: p.price + action.payload.price} : p
                );
                return {
                    ...state,
                    items: updatedItems,
                    totalPrice: state.totalPrice + action.payload.price,
                    totalCount: state.totalCount + 1
                };
            } else {
                const newItem = {...action.payload, count: 1};
                return {
                    ...state,
                    items: [...state.items, newItem],
                    totalPrice: state.totalPrice + action.payload.price,
                    totalCount: state.totalCount + 1
                };
            }
        }
        case "REMOVE-PRODUCT":
            return {
                ...state,
                items: state.items.filter(p => p.id !== action.payload.id),
                totalCount: state.totalCount - 1,
                totalPrice: state.totalPrice - action.payload.price
            }
        case "CHANGE-COUNT": {
            if(action.symbol === 'plus') {
                return {
                    ...state,
                    items: state.items.map(p => p.id === action.id ? {
                        ...p,
                        price: p.price + action.price,
                        count: p.count + 1
                    } : p),
                    totalCount: state.totalCount + 1,
                    totalPrice: state.totalPrice + action.price
                }
            } else {
                return {
                    ...state,
                    items: state.items.map(p => p.id === action.id ? {
                        ...p,
                        price: p.price - action.price,
                        count: p.count - 1
                    } : p),
                    totalCount: state.totalCount - 1,
                    totalPrice: state.totalPrice - action.price
                }
            }
        }
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

export const changeCountProduct = (symbol: SymbolType, id: number, price: number) => (
    {type: 'CHANGE-COUNT', symbol, id, price} as const
)