import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import WearHouseDetailCard from '@components/view/cards/WearHouseDetailCard';
import OrderCard from '@components/view/cards/OrderCard';
import ScrollContainer from '@components/layout/ScrollContainer';

const Orders = ({navigation, ...props}) => {
  const data = [
    {
      id: '#0000066',
      Year: '2023',
      Make: 'Test',
      Model: 'Test',
      Model: 'Test',
      LOT: '235489',
      VIN: '8RKNBASD545355486',
      Destination_Port: 'Salalah-Oman',
    },
    {
      id: '#0000066',
      Year: '2023',
      Make: 'Test',
      Model: 'Test',
      Model: 'Test',
      LOT: '235489',
      VIN: '8RKNBASD545355486',
      Destination_Port: 'Salalah-Oman',
    },
    {
      id: '#0000066',
      Year: '2023',
      Make: 'Test',
      Model: 'Test',
      Model: 'Test',
      LOT: '235489',
      VIN: '8RKNBASD545355486',
      Destination_Port: 'Salalah-Oman',
    },
    {
      id: '#0000066',
      Year: '2023',
      Make: 'Test',
      Model: 'Test',
      Model: 'Test',
      LOT: '235489',
      VIN: '8RKNBASD545355486',
      Destination_Port: 'Salalah-Oman',
    },
  ];

  return (
    <ScreenBoiler>
      <ScrollContainer>
        <View style={styles.flatWearHouseDetailCardCont}>
          <Text
            color={'black'}
            alignSelf={'flex-start'}
            fontSize={R.unit.width(0.065)}
            font={'RajdhaniBold'}
            gutterTop={10}
            gutterBottom={10}
            gutterLeft={10}>
            ORDERS STATISTICS BY P.O.L
          </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={({index, item}) => {
              return (
                <WearHouseDetailCard isEven={index % 2 == 0 ? true : false} />
              );
            }}
          />
        </View>
        <View style={styles.flexCont}>
          <Text
            color={'black'}
            alignSelf={'flex-start'}
            fontSize={R.unit.width(0.065)}
            font={'RajdhaniBold'}
            gutterTop={10}
            gutterBottom={10}
            gutterLeft={10}>
            Orders
          </Text>
          <View style={styles.flexDirCont}>
            <TouchableOpacity activeOpacity={0.7} style={styles.circleCont}>
              <View style={styles.imgSearchStyleCont}>
                <Image source={R.image.Search()} style={R.styles.img} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                styles.orderCont,
                {backgroundColor: R.color.white, borderWidth: 1},
              ]}>
              <View style={styles.imgMiniStyleCont}>
                <Image source={R.image.Filter()} style={R.styles.img} />
              </View>
              <Text
                color={'black'}
                fontSize={R.unit.width(0.04)}
                font={'RajdhaniSemiBold'}>
                Filter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CreateNewOrder');
              }}
              activeOpacity={0.7}
              style={styles.orderCont}>
              <View style={styles.imgMiniStyleCont}>
                <Image source={R.image.Plus()} style={R.styles.img} />
              </View>
              <Text
                color={'white'}
                fontSize={R.unit.width(0.04)}
                font={'RajdhaniSemiBold'}>
                Create Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({index, item}) => {
            return (
              <OrderCard
                item={item}
                onPress={() => {
                  navigation.navigate('OrderDetail');
                }}
              />
            );
          }}
          contentContainerStyle={{paddingBottom: R.unit.height(0.07)}}
        />
      </ScrollContainer>
    </ScreenBoiler>
  );
};

export default Orders;

const styles = StyleSheet.create({
  flatWearHouseDetailCardCont: {
    paddingLeft: R.unit.width(0.03),
    // backgroundColor: 'red',
    height: R.unit.height(0.39),
  },
  circleCont: {
    width: R.unit.width(0.11),
    height: R.unit.width(0.11),
    borderRadius: R.unit.width(1) / 2,
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgSearchStyleCont: {
    width: R.unit.width(0.05),
    height: R.unit.width(0.05),
  },
  imgMiniStyleCont: {
    width: R.unit.width(0.04),
    height: R.unit.width(0.04),
    marginRight: R.unit.width(0.02),
  },
  flexDirCont: {
    flexDirection: 'row',
    alignItems: 'center',
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
  flexCont: {
    // backgroundColor: 'red',
    width: R.unit.width(0.95),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: R.unit.height(0.01),
  },
});
