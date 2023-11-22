import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import Statistics from '@components/view/cards/Statistics';
import WearHouseDetailCard from '@components/view/cards/WearHouseDetailCard';
import OrderCard from '@components/view/cards/OrderCard';
import ScrollContainer from '@components/layout/ScrollContainer';

const Home = ({navigation, ...props}) => {
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

  const statistics = [
    {
      title: 'Approved Orders',
      item: '02',
      img: R.image.BagShopWhite(),
    },
    {
      title: 'Dispatched Orders',
      item: '04',
      img: R.image.BagShopBlack(),
    },
    {
      title: 'Sub Users',
      item: '04',
      img: R.image.User(),
    },
    {
      title: 'Terminal Orders',
      item: '02',
      img: R.image.BagShopBlack(),
    },
    {
      title: 'Loaded Orders',
      item: '00',
      img: R.image.BagShopWhite(),
    },
  ];

  return (
    <ScreenBoiler
      onPressNotification={() => {
        navigation.navigate('Notification');
      }}>
      <ScrollContainer>
        <View style={styles.flatOrderCardCont}>
          <Text
            color={'black'}
            alignSelf={'flex-start'}
            fontSize={R.unit.width(0.065)}
            font={'RajdhaniBold'}
            gutterTop={10}
            gutterLeft={10}>
            Statistics
          </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={statistics}
            renderItem={({index, item}) => {
              return (
                <Statistics
                  item={item}
                  isEven={index % 2 == 0 ? true : false}
                />
              );
            }}
          />
        </View>
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
            Announcements
          </Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.imgInfoStyleCont}>
            <Image source={R.image.CircleInfo()} style={R.styles.img} />
          </TouchableOpacity>
        </View>
        <View style={styles.announcmentCont}>
          <View style={styles.imgAnnouncmentStyleCont}>
            <Image source={R.image.Announcement()} style={R.styles.img} />
          </View>
          <Text
            color={'#E3E3E3'}
            fontSize={R.unit.width(0.09)}
            font={'RajdhaniBold'}>
            No Announcement Yet
          </Text>
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
              onPress={() => {
                navigation.navigate('CreateNewOrder');
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
                onPress={() => {
                  navigation.navigate('OrderDetail');
                }}
                item={item}
              />
            );
          }}
          contentContainerStyle={{paddingBottom: R.unit.height(0.07)}}
        />
      </ScrollContainer>
    </ScreenBoiler>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatOrderCardCont: {
    paddingLeft: R.unit.width(0.03),
    height: R.unit.height(0.33),
    // backgroundColor:'red'
  },
  flatWearHouseDetailCardCont: {
    paddingLeft: R.unit.width(0.03),
    // backgroundColor: 'red',
    height: R.unit.height(0.39),
  },

  contentContainerStyle: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: R.unit.height(0.05),
  },
  flexCont: {
    // backgroundColor: 'red',
    width: R.unit.width(0.95),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: R.unit.height(0.02),
  },
  imgInfoStyleCont: {
    width: R.unit.width(0.07),
    height: R.unit.width(0.07),
  },
  announcmentCont: {
    width: R.unit.width(0.95),
    height: R.unit.height(0.3),
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  imgAnnouncmentStyleCont: {
    width: R.unit.width(0.2),
    height: R.unit.width(0.2),
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
    padding: 10,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: R.unit.width(0.02),
  },
});
