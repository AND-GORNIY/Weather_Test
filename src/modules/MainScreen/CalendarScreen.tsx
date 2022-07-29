import React, { useState } from 'react'
import { Text, View, StyleSheet, Modal, Pressable, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { Calendar, DateData } from 'react-native-calendars'
import { useNavigation } from '@react-navigation/native'

import { DayWeather } from '../../main/redux/tsTypes'
import { getWeatherAction } from '../../main/redux/actions/weather'

type HomeScreenProps = {
  weather: DayWeather
  getWeatherAction: typeof getWeatherAction
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  weather,
  getWeatherAction,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedDay, setSelectedDay] = useState<null | DateData>(null)

  const navigation = useNavigation()

  const closeModal = () => {
    setIsModalVisible(false)
  }
  const onDayPress = (data: DateData) => {
    getWeatherAction(data.dateString)
    setSelectedDay(data)
    setIsModalVisible(true)
  }

  const onPressNextFiveDays = () => {
    setIsModalVisible(false)
    navigation.navigate('CalendarDetails', { date: selectedDay?.dateString })
  }

  const renderModalBody = () => {
    if (!selectedDay) { return null }

    if (!weather[selectedDay?.dateString]) {
      return <ActivityIndicator />
    }

    const weatherDayData = weather[selectedDay?.dateString]
    const temperature = `Temperature: ${weatherDayData.temp_c}`

    return (
      <>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {weatherDayData.condition.text}
          </Text>
          <Image
            source={{ uri: `https:${weatherDayData.condition.icon}` }}
            style={styles.image}
          />
        </View>
        <Text style={styles.dayText}>
          {temperature}
        </Text>
      </>
    )
  }

  return (
    <View style={styles.screenContainer}>
      <Calendar
        onDayPress={onDayPress}
      />
      <Modal
        visible={isModalVisible}
        transparent
      >
        <Pressable style={styles.modalContainer} onPress={closeModal}>
          <View style={styles.weatherWindow}>
            <Text style={styles.dayText}>
              {selectedDay?.dateString}
            </Text>
            {renderModalBody()}
            <Pressable style={buttonCallback} onPress={onPressNextFiveDays}>
              <Text style={styles.nextButtonText}>
                {'Next five days'}
              </Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View >
  );
}

const mapStateToProps = (state: DayWeather) => {
  return {
    weather: state,
  }
}

export default connect(mapStateToProps, {
  getWeatherAction,
})(HomeScreen)

const buttonCallback = ({ pressed }: { pressed: boolean }) => [
  {
    opacity: pressed ? 0.5 : 1,
  },
  styles.nextFiveDaysButton,
]

const styles = StyleSheet.create(
  {
    screenContainer: {
      justifyContent: 'center',
    },
    modalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    weatherWindow: {
      backgroundColor: '#dde9f0',
      borderRadius: 20,
      maxHeight: 300,
      maxWidth: 480,
      width: '90%',
      height: '50%',
      alignItems: 'center',
    },
    dayText: {
      marginTop: 20,
      fontSize: 30,
    },
    titleContainer: {
      marginVertical: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 80,
      height: 80,
    },
    title: {
      marginRight: 10,
      fontSize: 25,
      fontWeight: 'bold',
    },
    nextFiveDaysButton: {
      alignSelf: 'flex-end',
      marginTop: 'auto',
      marginRight: 20,
      marginBottom: 10,
    },
    nextButtonText: {
      fontSize: 20,
      color: '#3234a8',
    },
  }
)
