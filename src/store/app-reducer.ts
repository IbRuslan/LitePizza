
const initialState = {
    loading: true
}
export type AppStateType  = typeof initialState

export type ActionAppType =
    | ReturnType<typeof setStatusLoadingAC>

export const appReducer = (state: AppStateType = initialState, action: ActionAppType): AppStateType => {
    switch (action.type) {
        case "SET-STATUS":
            return {...state, loading: action.status}
        default:
            return state
    }
}


export const setStatusLoadingAC = (status: boolean) => (
    {type: 'SET-STATUS', status} as const
)