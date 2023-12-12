/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {LogBox, SafeAreaView} from 'react-native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import AuthStack from './src/navigation/authStack/index';

import 'react-native-gesture-handler';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/store/index';
import {Provider} from 'react-redux';

function App() {
  const config = {
    useSystemColorMode: true, // Default system color mode
  };

  const extendedTheme = extendTheme({config});

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreLogs(['EventEmitter.removeListener']); //X Ignore log notification by message
  LogBox.ignoreLogs([
    'A non-serializable value was detected in the state, in the path',
  ]); //X Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={extendedTheme}>
          <SafeAreaView style={{flex: 1}}>
            <AuthStack />
          </SafeAreaView>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
