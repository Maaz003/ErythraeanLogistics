import React, {useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';

import R from '@components/utils/R';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import Text from '@components/common/Text';
import DropDown from '@components/common/DropDown';
import DispatchOrderCard from '@components/view/cards/DispatchOrderCard';

const Order = ({navigation, ...props}) => {
  const [orderOption, setOrderOption] = useState(null);

  const orderDropDown = [
    {label: 'Incoming Orders', value: '1'},
    {label: 'Waiting Orders', value: '2'},
    {label: 'Approved Orders', value: '3'},
    {label: 'Processing Orders', value: '4'},
    {label: 'Dispatched Orders', value: '5'},
    {label: 'Completed Orders', value: '6'},
    {label: 'Canceled Orders', value: '7'},
  ];
  return (
    <ScreenBoiler>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.065)}
        font={'RajdhaniBold'}
        gutterTop={10}
        gutterLeft={15}>
        Orders
      </Text>
      <DropDown
        data={orderDropDown}
        value={orderOption}
        placeholderText={'Select Order'}
        onChange={item => {
          setOrderOption(item.value);
        }}
      />
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({index, item}) => {
          return (
            <DispatchOrderCard
              onPress={() => {
                navigation.navigate('OrderDetail');
              }}
              item={item}
            />
          );
        }}
        contentContainerStyle={{paddingBottom: R.unit.height(0.15)}}
      />
    </ScreenBoiler>
  );
};

export default Order;

const styles = StyleSheet.create({});
