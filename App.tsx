import * as React from 'react'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/main/redux/store';

import AppNavigation from './src/main/navigation/App'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App;
