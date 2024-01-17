import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { AppThunk } from '../../app/store.ts'
import { setAppError, setAppStatus } from '../../app/app-reducer.ts'
import { Dispatch } from 'redux'
import { handleError } from '../../common/utils/handle-error.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'))

  try {
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setAppStatus('succeeded'))
  } catch (err: any) {
    dispatch(setAppStatus('failed'))
    dispatch(setAppError(err.message))
  }

  /*decksAPI.fetchDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })*/
}

export const addDeckTC =
  (name: string): AppThunk =>
  async (dispatch) => {
    return decksAPI.addDeck(name).then((res) => {
      dispatch(addDeckAC(res.data))
    })
  }

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (err) {
    handleError(err, dispatch)
  }
}

type ErrorMessage = {
  field: string
  message: string
}

type ServerError = {
  errorMessages: ErrorMessage[]
}
