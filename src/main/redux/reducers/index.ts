import { WEATHER } from '../types'
import { DayWeather } from '../tsTypes'

const reducer = (
  state: DayWeather = {},
  action: {
    type: string, data: DayWeather
  }
) => {
  switch (action.type) {
    case WEATHER.DAY_SUCC:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

export default reducer
