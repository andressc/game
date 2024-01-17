export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return { ...state, status: action.status }
    case 'APP/SET-ERROR':
      return { ...state, error: action.error }
    default:
      return state
  }
}

export type ActionsType = SetStatusType | SetErrorType

type SetStatusType = ReturnType<typeof setAppStatus>
export const setAppStatus = (status: RequestStatusType) => ({
  type: 'APP/SET-STATUS' as const,
  status,
})

type SetErrorType = ReturnType<typeof setAppError>
export const setAppError = (error: string | null) => ({
  type: 'APP/SET-ERROR' as const,
  error,
})
