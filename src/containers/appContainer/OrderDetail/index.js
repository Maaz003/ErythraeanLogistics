import React from 'react';
import {StyleSheet} from 'react-native';

import ScreenBoiler from '@components/layout/ScreenBoiler';
import OrderDetailCard from '@components/view/cards/OrderDetailCard';
import ScrollContainer from '@components/layout/ScrollContainer';

const VehicleDetail = ({navigation, ...props}) => {
  return (
    <ScreenBoiler
      onPressNotification={() => {
        navigation.navigate('Notification');
      }}
      onPressProfile={() => {
        navigation.navigate('AccountSetting');
      }}>
      <ScrollContainer paddingBottom={0.15}>
        <OrderDetailCard />
      </ScrollContainer>
    </ScreenBoiler>
  );
};

export default VehicleDetail;

const styles = StyleSheet.create({});
