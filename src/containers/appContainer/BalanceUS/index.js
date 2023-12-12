import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import R from '@components/utils/R';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import ActionButton from '@components/common/ActionButton';
import Text from '@components/common/Text';
import BalanceUSCard from '@components/view/cards/BalanceUSCard';

const BalanceUS = ({navigation, ...props}) => {
  return (
    <ScreenBoiler isBack={true}>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.065)}
        font={'RajdhaniBold'}
        gutterLeft={15}
        gutterTop={15}>
        Balance US
      </Text>

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({item}) => {
          return <BalanceUSCard item={item} />;
        }}
      />
    </ScreenBoiler>
  );
};

export default BalanceUS;

const styles = StyleSheet.create({});
