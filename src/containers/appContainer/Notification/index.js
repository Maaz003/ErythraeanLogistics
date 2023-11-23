import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import NotificationCard from '@components/view/cards/NotificationCard';

const Notification = ({navigation, ...props}) => {
  return (
    <ScreenBoiler
      onPressProfile={() => {
        navigation.navigate('AccountSetting');
      }}>
      <View style={styles.flexCont}>
        <Text
          color={'black'}
          fontSize={R.unit.width(0.06)}
          font={'RajdhaniBold'}>
          Order Notification
        </Text>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({index, item}) => {
          return <NotificationCard />;
        }}
        contentContainerStyle={{paddingBottom: R.unit.height(0.07)}}
      />
    </ScreenBoiler>
  );
};

export default Notification;

const styles = StyleSheet.create({
  circleCont: {
    width: R.unit.width(0.09),
    height: R.unit.width(0.09),
    borderRadius: R.unit.width(1) / 2,
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgSearchStyleCont: {
    width: R.unit.width(0.04),
    height: R.unit.width(0.04),
  },
  imgPlusStyleCont: {
    width: R.unit.width(0.04),
    height: R.unit.width(0.04),
    marginRight: R.unit.width(0.02),
  },
  flexDirCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderCont: {
    padding: 7,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: R.unit.width(0.02),
  },
  flexCont: {
    flexDirection: 'row',
    width: R.unit.width(0.95),
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: R.unit.height(0.02),
  },
});
