import React, {useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';

import R from '@components/utils/R';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import Text from '@components/common/Text';

const Carrier = ({navigation, ...props}) => {
  return (
    <ScreenBoiler>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.065)}
        font={'RajdhaniBold'}
        gutterTop={10}
        gutterLeft={15}>
        Carrier
      </Text>
    </ScreenBoiler>
  );
};

export default Carrier;

const styles = StyleSheet.create({});
