import React from 'react';
import {StyleSheet} from 'react-native';

import ScreenBoiler from '@components/layout/ScreenBoiler';
import OrderDetailCard from '@components/view/cards/OrderDetailCard';
import ScrollContainer from '@components/layout/ScrollContainer';

const OrderDetail = ({navigation, route, ...props}) => {
  const data = route.params.item;

  return (
    <ScreenBoiler isBack={true}>
      <ScrollContainer paddingBottom={0.15}>
        <OrderDetailCard item={data} />
      </ScrollContainer>
    </ScreenBoiler>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({});
