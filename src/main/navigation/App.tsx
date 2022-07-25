import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalendarScreen from '../../modules/MainScreen/CalendarScreen'
import DetailsScreen from '../../modules/MainScreen/DetailsScreen'
import { RootStackParamList } from './types'


const Stack = createNativeStackNavigator<RootStackParamList>()


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calendar">
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="CalendarDetails" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
