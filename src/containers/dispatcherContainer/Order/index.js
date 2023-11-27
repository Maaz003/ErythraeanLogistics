import React from 'react';
import {StyleSheet, View} from 'react-native';

import R from '@components/utils/R';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import ActionButton from '@components/common/ActionButton';
import Text from '@components/common/Text';

const Order = ({navigation, ...props}) => {
  return (
    <ScreenBoiler isBack={true}>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.065)}
        font={'RajdhaniBold'}
        gutterTop={10}
        gutterLeft={15}>
        Order
      </Text>
    </ScreenBoiler>
  );
};

export default Order;

const styles = StyleSheet.create({
  mainCont: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
});
