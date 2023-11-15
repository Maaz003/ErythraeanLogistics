import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, View, Dimensions, Platform, Text} from 'react-native';
import {Images} from '../../assets/Images/index';

//Screens
import CoachesScreen from '../../containers/appContainer/CoachesScreen/index';
import Home from '../../containers/appContainer/Home/index';

// dimenstion
const {width, height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabImage =
  name =>
  ({focused}) => {
    return (
      <View
        style={{
          width: width * 0.16,
          height: height * 0.06,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={Images[(!focused ? 'Un' : '') + name]}
          style={{
            width: width * 0.05,
            height: width * 0.05,
            tintColor: !focused ? 'black' : 'blue',
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: width * 0.03,
            marginTop: height * 0.005,
            color: !focused ? 'black' : 'blue',
          }}>
          {name}
        </Text>
      </View>
    );
  };

export function HomeTab() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export function CoachesScreenTab() {
  return (
    <Stack.Navigator
      initialRouteName="CoachesScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CoachesScreen" component={CoachesScreen} />
    </Stack.Navigator>
  );
}

export const BottomNavigator = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"

      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          height: Platform.OS === 'ios' ? height * 0.1 : height * 0.09,
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: TabImage('Home'),
        }}
        component={HomeTab}
      />
      <Tab.Screen
        name="CoachesScreen"
        options={{
          tabBarIcon: TabImage('Home'),
        }}
        component={CoachesScreenTab}
      />
    </Tab.Navigator>
  );
};
