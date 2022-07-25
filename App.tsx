import * as React from 'react'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import AppNavigation from './src/main/navigation/App'

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AppNavigation />
    </SafeAreaProvider>
  )
}

export default App;
