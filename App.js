/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {LogBox, SafeAreaView} from 'react-native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import AppNavigation from './src/navigation/AppNavigation';

import 'react-native-gesture-handler';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/store/index';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {toastConfig} from './src/components/utils/Validators';

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

  const AppWrapper = () => {
    const notificationAction = remoteMessage => {};

    // useEffect(() => {
    //   Notifications.registerRemoteNotifications();

    //   const messageSub = messaging().onMessage(async remoteMessage => {
    //     LocalNotification({
    //       title: remoteMessage?.notification?.title,
    //       text: remoteMessage?.notification?.body,
    //     });

    //     if (
    //       remoteMessage?.notification?.title?.includes(
    //         'has requested a delivery',
    //       )
    //     ) {
    //       // ?? RUN ANY ACTION HERE WHEN APPLICATION IS IN FORGEORUND STATE
    //     }
    //   });

    //   messaging().setBackgroundMessageHandler(async remoteMessage => {
    //     Notifications.events().registerNotificationReceivedBackground(
    //       completion => {
    //         if (remoteMessage) {
    //           // ?? RUN ANY ACTION WHEN APPLICATION IS IN BACKGROUND
    //         }
    //         completion({alert: true, sound: true, badge: true});
    //       },
    //     );
    //   });

    //   //APP OPENED FROM BACKGROUND
    //   messaging().onNotificationOpenedApp(async remoteMessage => {
    //     console.warn('NOTIFICATIONS OPENED');
    //     if (remoteMessage) {
    //       // ?? RUN ANY ACTION WHEN APPLICATION IS IN KILL STATE
    //     }
    //   });

    //   //APP IN QUITE STATE
    //   Notifications.getInitialNotification()
    //     .then(remoteMessage => {
    //       if (remoteMessage) notificationAction(remoteMessage);
    //     })
    //     .catch(err => {
    //       console.warn('ERRROR NOTIFICATION GET NOTI');
    //     });

    //   return messageSub;
    // }, []);

    return (
      <>
        <AppNavigation />
        <Toast config={toastConfig} />
      </>
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={extendedTheme}>
          <SafeAreaView style={{flex: 1}}>
            <AppWrapper />
          </SafeAreaView>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
