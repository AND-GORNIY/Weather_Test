import { Alert } from 'react-native'

const apiKey = '139f826d956a4a6eb19194305222807'
const location = 'Kiev'
const baseURL = 'https://api.weatherapi.com/v1'

const headers = {
  'Content-Type': 'application/json',
}

export const getData = async (path: string) => {
  const response = await fetch(`${baseURL}/${path}.json?key=${apiKey}&q=${location}&dt=2022-08-26`, {
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