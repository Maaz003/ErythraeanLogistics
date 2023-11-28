import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@navRef';

//screens
import SplashScreen from '@containers/authContainer/SplashScreen';
import LoginScreen from '@containers/authContainer/LoginScreen';
import SignUpScreen from '@containers/authContainer/SignUpScreen';
import Notification from '@containers/appContainer/Notification/index';
import AccountSetting from '@containers/appContainer/AccountSetting/index';

// bottom tab
import {BottomNavigator} from '@navigation/appStack';
import {BottomDispatcherNavigator} from '@navigation/dispatcherStack';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="AccountSetting" component={AccountSetting} />
        {/* bottom tab */}
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        <Stack.Screen
          name="BottomDispatcherNavigator"
          component={BottomDispatcherNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
