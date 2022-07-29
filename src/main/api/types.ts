export type Weather = {
  temp_c: number
  condition: {
    text: string
    icon: string
  },
  wind_kph: number
  precip_mm: number
  uv: number
  last_updated: string
  feelslike_c: number
}