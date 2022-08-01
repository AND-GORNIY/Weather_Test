import { put, call } from 'redux-saga/effects'
import { getData } from '../../api'
import { getWeatherSuccess } from '../actions/weather'

const dayWeatherPath = 'current'

export function* dayWeatherSaga({ data }: { data: 'string' }) {
  try {
    const response = yield call(getData, dayWeatherPath)
    if (response.status >= 400) {
      // add error handling
    } else {
      yield put(getWeatherSuccess({
        [data]: response.current,
      })
      )
    }
  } catch (err) {
    console.warn('ERR', err)
  }
}
