import { Alert } from 'react-native'

const apiKey = '139f826d956a4a6eb19194305222807'
const location = 'Kiev'
const baseURL = 'https://api.weatherapi.com/v1'

const headers = {
  'Content-Type': 'application/json',
}

export const getData = async (path: string, params: string[] = []) => {
  const stringParams = params.join('&')
  const url = `${baseURL}/${path}.json?key=${apiKey}&q=${location}`
  const urlWithParams = stringParams ? `${url}&${stringParams}` : url
  const response = await fetch(urlWithParams, {
    method: 'GET',
    headers,
  })

  if (response.status >= 400) {
    Alert.alert(
      'Error',
      'Something went wrong'
      // [{ text: 'OK', onPress: ()=> {})}],
    )
    return response
  }
  return await response.json()
}