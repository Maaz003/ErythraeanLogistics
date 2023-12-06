import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import R from '@components/utils/R';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import ActionButton from '@components/common/ActionButton';
import Text from '@components/common/Text';
import BalanceUSCard from '@components/view/cards/BalanceUSCard';
import Loader from '@components/common/Loader';

//! RTK QUERY API
import {useGetBalanceUSQuery} from '../../../store/services/index';

const BalanceUS = ({navigation, ...props}) => {
  const {data, isLoading} = useGetBalanceUSQuery();
  console.log(data);

  return (
    <>
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
          data={isLoading ? [] : data?.data}
          renderItem={({item}) => {
            return <BalanceUSCard item={item} />;
          }}
          contentContainerStyle={{paddingBottom: R.unit.height(0.15)}}
        />
      </ScreenBoiler>
      {isLoading && <Loader />}
    </>
  );
};

export default BalanceUS;

const styles = StyleSheet.create({});
