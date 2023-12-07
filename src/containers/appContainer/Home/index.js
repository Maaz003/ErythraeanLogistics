import React, {useState} from 'react';
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
import TextInput from '@components/common/TextInput';
import Loader from '@components/common/Loader';
import ListEmptyContainer from '@components/common/ListEmptyContainer';

//! RTK QUERY API
import {
  useGetOrderStatisticsQuery,
  useGetOrderQuery,
  useGetAnnouncementQuery,
} from '../../../store/services/index';
import {useSelector, useDispatch} from 'react-redux';

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

  const [isSearch, setIsSearch] = useState(false);

  const {data: statisticsData, isLoading} = useGetOrderStatisticsQuery();
  const {data: orderData, isLoading: orderIsLoading} = useGetOrderQuery();
  const {data: announcementData, isLoading: announcementIsLoading} =
    useGetAnnouncementQuery();

  console.log('announcementData ===>', announcementData);

  // Initialize counts
  let pendingCount = 0;
  let dispatchedCount = 0;
  let terminalCount = 0;
  let loadedCount = 0;

  // Iterate through the array and sum the counts
  statisticsData?.data.forEach(item => {
    pendingCount += item.pending;
    dispatchedCount += item.dispatched;
    terminalCount += item.terminal;
    loadedCount += item.loaded;
  });

  const statistics = [
    {
      title: 'Pending Orders',
      item: pendingCount,
      img: R.image.BagShopWhite(),
    },
    {
      title: 'Dispatched Orders',
      item: dispatchedCount,
      img: R.image.BagShopBlack(),
    },
    {
      title: 'Terminal Orders',
      item: terminalCount,
      img: R.image.BagShopWhite(),
    },
    {
      title: 'Loaded Orders',
      item: loadedCount,
      img: R.image.BagShopBlack(),
    },
  ];

  return (
    <>
      <ScreenBoiler>
        <ScrollContainer>
          <Text
            color={'black'}
            alignSelf={'flex-start'}
            fontSize={R.unit.width(0.065)}
            font={'RajdhaniBold'}
            gutterTop={10}
            gutterLeft={25}>
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
            contentContainerStyle={styles.flatCont}
          />

          <Text
            color={'black'}
            alignSelf={'flex-start'}
            fontSize={R.unit.width(0.065)}
            font={'RajdhaniBold'}
            gutterTop={10}
            gutterBottom={10}
            gutterLeft={25}>
            ORDERS STATISTICS BY P.O.L
          </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={isLoading ? [] : statisticsData?.data}
            renderItem={({index, item}) => {
              return (
                <WearHouseDetailCard
                  item={item}
                  isEven={index % 2 == 0 ? true : false}
                />
              );
            }}
            contentContainerStyle={styles.flatCont}
          />
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
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.imgInfoStyleCont}>
              <Image source={R.image.CircleInfo()} style={R.styles.img} />
            </TouchableOpacity>
          </View>
          <View style={styles.announcmentCont}>
            <FlatList
              data={announcementIsLoading ? [] : announcementData?.data}
              renderItem={({item, index}) => {
                if (item?.role == 'customer')
                  return (
                    <View style={styles.announcmentFlatCont}>
                      <Text
                        color={'black'}
                        fontSize={R.unit.width(0.045)}
                        font={'RajdhaniMedium'}>
                        {index + 1}. {item?.message}
                      </Text>
                    </View>
                  );
              }}
              ListEmptyComponent={
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: R.unit.height(0.05),
                  }}>
                  <View style={styles.imgAnnouncmentStyleCont}>
                    <Image
                      source={R.image.Announcement()}
                      style={R.styles.img}
                    />
                  </View>
                  <Text
                    color={'#E3E3E3'}
                    fontSize={R.unit.width(0.09)}
                    font={'RajdhaniBold'}>
                    No Announcement Yet
                  </Text>
                </View>
              }
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
              <TouchableOpacity
                onPress={() => setIsSearch(!isSearch)}
                activeOpacity={0.7}
                style={styles.circleCont}>
                {!isSearch ? (
                  <View style={styles.imgSearchStyleCont}>
                    <Image source={R.image.Search()} style={R.styles.img} />
                  </View>
                ) : (
                  <Text
                    color={'black'}
                    alignSelf={'center'}
                    fontSize={R.unit.width(0.07)}
                    font={'RajdhaniBold'}>
                    x
                  </Text>
                )}
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
          {isSearch && (
            <View style={styles.flexCont}>
              <TextInput
                placeholderText={'Search Order...'}
                width={0.85}
                marginTop={0}
              />
              <TouchableOpacity style={styles.imgSearchStyleCont}>
                <Image source={R.image.Search()} style={R.styles.img} />
              </TouchableOpacity>
            </View>
          )}
          <FlatList
            data={orderIsLoading ? [] : orderData?.data}
            renderItem={({index, item}) => {
              return <OrderCard item={item} />;
            }}
            contentContainerStyle={{paddingBottom: R.unit.height(0.07)}}
            ListEmptyComponent={<ListEmptyContainer />}
          />
        </ScrollContainer>
      </ScreenBoiler>
      {isLoading && <Loader />}
      {orderIsLoading && <Loader />}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatCont: {
    paddingLeft: R.unit.width(0.03),
    paddingBottom: R.unit.height(0.03),
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
  announcmentFlatCont: {
    width: R.unit.width(0.85),
    paddingVertical: R.unit.height(0.015),
  },
});
