import { all, takeEvery } from 'redux-saga/effects'
import { WEATHER } from '../types'
import { dayWeatherSaga } from './weatherSaga'

export default function* appSaga() {
  yield all([
    yield takeEvery(WEATHER.DAY, dayWeatherSaga),
  ])
}
