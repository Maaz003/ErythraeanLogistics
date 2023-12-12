import React from 'react';
import {StyleSheet} from 'react-native';

import ScreenBoiler from '@components/layout/ScreenBoiler';
import DispatcherOrderDetailCard from '@components/view/cards/DispatcherOrderDetailCard';
import ScrollContainer from '@components/layout/ScrollContainer';

const OrderDetail = ({navigation, ...props}) => {
  return (
    <ScreenBoiler isBack={true}>
      <ScrollContainer paddingBottom={0.15}>
        <DispatcherOrderDetailCard />
      </ScrollContainer>
    </ScreenBoiler>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({});
