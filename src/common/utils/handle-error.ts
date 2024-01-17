import { Dispatch } from 'redux'
import { AxiosError, isAxiosError } from 'axios'
import { setAppError } from '../../app/app-reducer.ts'

type ErrorMessage = {
  field: string
  message: string
}

type ServerError = {
  errorMessages: ErrorMessage[]
}

export const handleError = (err: unknown, dispatch: Dispatch) => {
  let errorMessage: string

  if (isAxiosError<ServerError>(err)) {
    errorMessage = err.response ? err.response.data.errorMessages[0].message : err.message
  } else {
    errorMessage = (err as Error).message
  }

  dispatch(setAppError(errorMessage))

  //console.log(errorMessage)
}
