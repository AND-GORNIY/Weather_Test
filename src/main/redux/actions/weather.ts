import { WEATHER } from '../types'
import { DayWeather } from '../tsTypes'

export const getWeatherAction = (data: string) => {
  return { type: WEATHER.DAY, data: data }
}

export const getWeatherSuccess = (data: DayWeather) => {
  return { type: WEATHER.DAY_SUCC, data }
}
