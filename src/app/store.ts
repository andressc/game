import { combineReducers, legacy_createStore, applyMiddleware, AnyAction } from 'redux'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { DecksActions, decksReducer } from '../features/decks/decks-reducer.ts'
import { ActionsType, appReducer } from './app-reducer.ts'

const rootReducer = combineReducers({
  app: appReducer,
  decks: decksReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootState, unknown, AnyAction>

export type ApplicationActionsType = DecksActions | ActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, ApplicationActionsType>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
