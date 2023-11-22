import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import OrderDetailCard from '@components/view/cards/OrderDetailCard';

const VehicleDetail = ({navigation, ...props}) => {
  return (
    <ScreenBoiler
      onPressNotification={() => {
        navigation.navigate('Notification');
      }}>
      <OrderDetailCard />
    </ScreenBoiler>
  );
};

export default VehicleDetail;

const styles = StyleSheet.create({});
