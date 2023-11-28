import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Dimensions,
  Keyboard,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import R from '@components/utils/R';
import {Images} from '../../assets/Images/index';

// //Screens
import Order from '@containers/dispatcherContainer/Order/index';
import Home from '@containers/dispatcherContainer/Home/index';
import YardDestination from '@containers/dispatcherContainer/YardDestination/index';
import CreateNewOrder from '@containers/dispatcherContainer/CreateNewOrder/index';
import OrderDetail from '@containers/dispatcherContainer/OrderDetail/index';
import Carrier from '@containers/dispatcherContainer/Carrier/index';

// // dimenstion
const {width, height} = Dimensions.get('window');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBar = ({state, descriptors, navigation}) => {
  // const focusedOptions = descriptors[state.routes[state.index].key].options;
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardOpen(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardOpen(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View
      style={[styles.tabBarContainer, {display: keyboardOpen ? 'none' : ''}]}>
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

const HomeScreens = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="CreateNewOrder" component={CreateNewOrder} />
    <Stack.Screen name="OrderDetail" component={OrderDetail} />
  </Stack.Navigator>
);

const YardDestinationScreens = () => (
  <Stack.Navigator
    initialRouteName="YardDestination"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="YardDestination" component={YardDestination} />
  </Stack.Navigator>
);

const OrderScreens = () => (
  <Stack.Navigator
    initialRouteName="Order"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Order" component={Order} />
    <Stack.Screen name="CreateNewOrder" component={CreateNewOrder} />
    <Stack.Screen name="OrderDetail" component={OrderDetail} />
  </Stack.Navigator>
);
const CarrierScreens = () => (
  <Stack.Navigator
    initialRouteName="Carrier"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Carrier" component={Carrier} />
  </Stack.Navigator>
);

export const BottomDispatcherNavigator = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'blue',
        },
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Order" component={OrderScreens} />
      <Tab.Screen name="Home" component={HomeScreens} />
      <Tab.Screen name="YardDestination" component={YardDestinationScreens} />
      <Tab.Screen name="Carrier" component={CarrierScreens} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    alignItems: 'center',
    paddingBottom: 10,
    position: 'absolute',
    bottom: 25,
    width: '100%',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    // backgroundColor: 'red',
    width: '90%',
    borderRadius: 10,
    elevation: 2,
    height: R.unit.height(0.065),
  },
  tabItem: {
    height: width * 0.17,
    width: width * 0.17,
    // paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
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
  },
});
