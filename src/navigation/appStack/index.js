import {createNativeStackNavigator} from '@react-navigation/native-stack';

// //Screens
import CoachesScreen from '../../containers/appContainer/CoachesScreen/index';
import BottomTab1 from '../../containers/appContainer/Home/index';

// // dimenstion
const {width, height} = Dimensions.get('window');

const Stack = createNativeStackNavigator();

import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import R from '@components/utils/R';
import {Images} from '../../assets/Images/index';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({state, descriptors, navigation}) => {
  // const focusedOptions = descriptors[state.routes[state.index].key].options;

  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              onPress={onPress}
              style={[isFocused ? styles.centerTabItem : styles.tabItem]}>
              <View style={[styles.imgStyleCont]}>
                <Image
                  source={Images[(!isFocused ? 'Un' : '') + label]}
                  style={R.styles.img}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const HomeScreen = () => (
  <Stack.Navigator
    initialRouteName="BottomTab1"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="BottomTab1" component={BottomTab1} />
  </Stack.Navigator>
);
const DashboardScreen = () => (
  <Stack.Navigator
    initialRouteName="BottomTab1"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="BottomTab1" component={BottomTab1} />
  </Stack.Navigator>
);
const AnalyticsScreen = () => (
  <Stack.Navigator
    initialRouteName="BottomTab1"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="BottomTab1" component={BottomTab1} />
  </Stack.Navigator>
);
const SettingScreen = () => (
  <Stack.Navigator
    initialRouteName="BottomTab1"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="BottomTab1" component={BottomTab1} />
  </Stack.Navigator>
);

const ProfileScreen = () => (
  <Stack.Navigator
    initialRouteName="BottomTab1"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="BottomTab1" component={BottomTab1} />
  </Stack.Navigator>
);

export const BottomNavigator = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="BottomTab3"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'blue',
        },
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="BottomTab1" component={HomeScreen} />
      <Tab.Screen name="BottomTab2" component={ProfileScreen} />
      <Tab.Screen name="BottomTab3" component={SettingScreen} />
      <Tab.Screen name="BottomTab4" component={DashboardScreen} />
      <Tab.Screen name="BottomTab5" component={AnalyticsScreen} />
      {/* Add more screens as needed */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    alignItems: 'center',
    paddingBottom: 10,
    position: 'absolute',
    bottom: 25, // Adjust the position from bottom as needed
    width: '100%',
    // height: R.unit.height(0.1),
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '90%', // Set the width to 90%
    borderRadius: 10,
    elevation: 2,
    height: R.unit.height(0.065),
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
  },
  centerTabItem: {
    alignItems: 'center',
    height: width * 0.17,
    width: width * 0.17,
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: width / 2,
  },

  imgStyleCont: {
    width: R.unit.width(0.055),
    height: R.unit.width(0.055),
    // backgroundColor: 'red',
  },
});
