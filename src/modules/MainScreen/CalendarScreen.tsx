import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Calendar } from 'react-native-calendars'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Calendar style={{
        width: '100%',
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create(
  {
    screenContainer: {
      // flex: 1,
      // alignItems: 'center',
      justifyContent: 'center'
    }
  }
)