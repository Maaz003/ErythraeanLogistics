import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import R from '@components/utils/R';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import Text from '@components/common/Text';
import CarrierCard from '@components/view/cards/CarrierCard';
import ListEmptyContainer from '@components/common/ListEmptyContainer';

const Carrier = ({navigation, ...props}) => {
  return (
    <ScreenBoiler>
      <View style={styles.flexCont}>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          fontSize={R.unit.width(0.062)}
          font={'RajdhaniBold'}
          gutterTop={10}
          gutterBottom={10}
          gutterLeft={10}>
          Carrier
        </Text>
        <View style={styles.flexDirCont}>
          {/* <TouchableOpacity activeOpacity={0.7} style={styles.circleCont}>
            <View style={styles.imgSearchStyleCont}>
              <Image source={R.image.Search()} style={R.styles.img} />
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateCarrierCompany');
            }}
            activeOpacity={0.7}
            style={styles.orderCont}>
            <View style={styles.imgPlusStyleCont}>
              <Image source={R.image.Plus()} style={R.styles.img} />
            </View>
            <Text
              color={'white'}
              fontSize={R.unit.width(0.04)}
              font={'RajdhaniSemiBold'}>
              Create Carrier Company
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({}) => {
          return <CarrierCard />;
        }}
        contentContainerStyle={{paddingBottom: R.unit.height(0.03)}}
        ListEmptyComponent={<ListEmptyContainer />}
      />
    </ScreenBoiler>
  );
};

export default Carrier;

const styles = StyleSheet.create({
  flexCont: {
    // backgroundColor: 'red',
    width: R.unit.width(0.95),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: R.unit.height(0.02),
  },
  imgSearchStyleCont: {
    width: R.unit.width(0.05),
    height: R.unit.width(0.05),
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
  circleCont: {
    width: R.unit.width(0.11),
    height: R.unit.width(0.11),
    borderRadius: R.unit.width(1) / 2,
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderCont: {
    padding: 10,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: R.unit.width(0.02),
  },
});
