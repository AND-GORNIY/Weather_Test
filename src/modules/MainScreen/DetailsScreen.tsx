import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { getData } from '../../main/api'


const renderItem = ({ item }) => {

  const url = `https:${item.day.condition.icon}`
  return (
    <View style={styles.renderItemContainer}>
      <Text style={styles.titleText}>{item.day.condition.text}</Text>
      <Image source={{ uri: url }} style={styles.image} />
    </View>
  )
}


export default function DetailsScreen() {
  const [days, setDays] = useState(null)


  const { params: { date } } = useRoute()

  useEffect(() => {
    const getForecast = async () => {
      const data = await getData('forecast', ['days=5'])
      const forecast = data.forecast.forecastday
      setDays([...forecast, ...forecast, ...forecast, ...forecast])
    }
    getForecast()
  }, [])

  if (!days) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={days}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  renderItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    height: 60,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: '#048bd4',
    borderRadius: 15,
  },
  image: {
    width: 40,
    height: 40,
  },
  titleText: {
    fontSize: 20,
  },
  contentContainerStyle: {
    paddingTop: 10,
  }
})
