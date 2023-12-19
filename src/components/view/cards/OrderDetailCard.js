import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import moment from 'moment';

const OrderDetailCard = ({item, onPress, ...props}) => {
  const OrderDetailContainerCard = ({title, data, image}) => {
    return (
      <View style={styles.mainCont}>
        <View style={styles.imgStyleMainCont}>
          <View style={styles.imgStyleCont}>
            <Image source={image} style={R.styles.img} />
          </View>
        </View>
        <View style={{marginTop: R.unit.height(0.005)}}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.047)}
            font={'RajdhaniSemiBold'}
            width={R.unit.width(0.4)}>
            {title}
          </Text>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.04)}
            font={'RajdhaniMedium'}
            width={R.unit.width(0.4)}>
            {data}
          </Text>
        </View>
      </View>
    );
  };

  function getOrderStatus(id) {
    let status;
    switch (id) {
      case 0:
        status = 'Incoming/Pending';
        break;
      case 1:
        status = 'Approved';
        break;
      case 2:
        status = 'Dispatched';
        break;
      case 3:
        status = 'Processing';
        break;
      case 4:
        status = 'Canceled';
        break;
      case 5:
        status = 'Waiting For Customer Approval';
        break;
      case 6:
        status = 'Custom Created';
        break;
      default:
        status = 'Unknown Status';
        break;
    }
    return status;
  }

  const orderStatus = getOrderStatus(item?.order_status);

  return (
    <>
      <View style={styles.flexCont}>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          fontSize={R.unit.width(0.06)}
          font={'RajdhaniBold'}>
          Vehicle Detail
        </Text>
        <View style={styles.idCont}>
          <Text
            color={'white'}
            fontSize={R.unit.width(0.03)}
            font={'RajdhaniSemiBold'}>
            {item?.id}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <OrderDetailContainerCard
          title={'Description'}
          data={item?.notes}
          image={R.image.InputText()}
        />
        <OrderDetailContainerCard
          title={'Color'}
          data={item?.color}
          image={R.image.Palette()}
        />
      </View>
      <View style={styles.container}>
        <OrderDetailContainerCard
          title={'VIN Number'}
          data={item?.vin_number}
          image={R.image.Tally()}
        />
        <OrderDetailContainerCard
          title={'Keys'}
          data={item?.keys_present}
          image={R.image.Key()}
        />
      </View>
      <View style={styles.container}>
        <OrderDetailContainerCard
          title={'Auction'}
          data={item?.auction}
          image={R.image.CalendarStar()}
        />
        <OrderDetailContainerCard
          title={'LOT'}
          data={item?.lot}
          image={R.image.List()}
        />
      </View>
      <View style={styles.container}>
        <OrderDetailContainerCard
          title={'Delivered To Warehouse'}
          data={item?.delivered_to_warehouse}
          image={R.image.Warehouse()}
        />
        <OrderDetailContainerCard
          title={'Notes'}
          data={item?.notes === null ? 'None' : item?.notes}
          image={R.image.Notes()}
        />
      </View>
      {/* <View style={styles.container}>
        <OrderDetailContainerCard
          title={'Buyer'}
          data={'Developer Customer'}
          image={R.image.User()}
        />
        <OrderDetailContainerCard
          title={'Buyer Number'}
          data={'None'}
          image={R.image.Gear()}
        />
      </View> */}
      <View style={styles.container}>
        <OrderDetailContainerCard
          title={'Date'}
          data={moment(item?.created_at).format('DD-MM-YYYY')}
          image={R.image.CalendarWhite()}
        />
        <OrderDetailContainerCard
          title={'Promised to be picked up'}
          data={item?.processing_date}
          image={R.image.CalendarStar()}
        />
      </View>
      <View style={styles.container}>
        {/* <OrderDetailContainerCard
          title={'Promised to be delivered'}
          data={'None'}
          image={R.image.CalendarStar()}
        /> */}
        <OrderDetailContainerCard
          title={'Title'}
          data={item?.title_status}
          image={R.image.InputText()}
        />
      </View>
      <View style={styles.container}>
        <OrderDetailContainerCard
          title={'Date Received'}
          data={item?.approved_date}
          image={R.image.CalendarWhite()}
        />
        <OrderDetailContainerCard
          title={'Order Status'}
          data={orderStatus}
          image={R.image.CalendarStar}
        />
      </View>
      <View style={styles.container}>
        <OrderDetailContainerCard
          title={'Terminal Status'}
          data={item?.terminal_status}
          image={R.image.Tally()}
        />
        <OrderDetailContainerCard
          title={'P.O.L'}
          data={item?.destination_port}
          image={R.image.City()}
        />
      </View>
      <View style={styles.container}>
        <OrderDetailContainerCard
          title={'Invoice'}
          data={'PDF'}
          image={R.image.Dollar()}
        />
        <OrderDetailContainerCard
          title={'Approved By'}
          data={'Name Here'}
          image={R.image.User()}
        />
      </View>
      <View style={styles.container}>
        <OrderDetailContainerCard
          title={'Created By'}
          data={'Name Here'}
          image={R.image.User()}
        />
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.065)}
        font={'RajdhaniBold'}
        gutterLeft={10}
        gutterTop={10}
        gutterBottom={5}>
        Container Detail
      </Text>
      <View style={styles.container}>
        <OrderDetailContainerCard
          title={'Point Of Loading'}
          data={'2023 test test'}
          image={R.image.CalendarStar()}
        />
        <OrderDetailContainerCard
          title={'Container Number'}
          data={'Test'}
          image={R.image.Notes()}
        />
      </View>
      <View style={styles.container}>
        <OrderDetailContainerCard
          title={'Booking Number'}
          data={'8RKNBASD545355486'}
          image={R.image.CirclePlus()}
        />
        <OrderDetailContainerCard
          title={'Destination Port'}
          data={'Y'}
          image={R.image.Warehouse()}
        />
      </View>
      <View style={styles.container}>
        <OrderDetailContainerCard
          title={'Loading Date'}
          data={'Copart'}
          image={R.image.CalendarWhite()}
        />
        <OrderDetailContainerCard
          title={'Expected Arrival Date'}
          data={'Developer'}
          image={R.image.CalendarWhite()}
        />
      </View>
      <View style={styles.container}>
        <OrderDetailContainerCard
          title={'Arrival Date'}
          data={'236589'}
          image={R.image.CalendarStar()}
        />
        <OrderDetailContainerCard
          title={'Unloading Date'}
          data={'None'}
          image={R.image.CalendarStar()}
        />
      </View>
      <View style={styles.container}>
        <OrderDetailContainerCard
          title={'Calendar'}
          data={'Nov-1602023'}
          image={R.image.CalendarWhite()}
        />
        <OrderDetailContainerCard
          title={'Storage'}
          data={'On client: $0 | On Shipping: $0'}
          image={R.image.Warehouse()}
        />
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.065)}
        font={'RajdhaniBold'}
        gutterLeft={10}
        gutterTop={10}
        gutterBottom={5}>
        Current Status
      </Text>
      <View style={[styles.line, {backgroundColor: '#929294'}]} />
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.048)}
        font={'RajdhaniMedium'}
        gutterLeft={10}
        gutterTop={10}
        gutterBottom={5}>
        Car purchased from auction
      </Text>
      <View style={[styles.line, {backgroundColor: '#008800'}]} />
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.048)}
        font={'RajdhaniMedium'}
        gutterLeft={10}
        gutterTop={10}
        gutterBottom={5}>
        Car Was Paid At The Auction
      </Text>
    </>
  );
};
export default React.memo(OrderDetailCard);

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    marginTop: R.unit.height(0.02),
    width: R.unit.width(0.95),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  //comp
  imgStyleCont: {
    width: R.unit.width(0.04),
    height: R.unit.width(0.04),
  },
  imgStyleMainCont: {
    width: R.unit.width(0.075),
    height: R.unit.width(0.075),
    marginRight: R.unit.width(0.02),
    backgroundColor: 'black',
    borderRadius: R.unit.width(1) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainCont: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    width: R.unit.width(0.48),
    // alignSelf: 'center',
  },

  flexCont: {
    width: R.unit.width(0.95),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: R.unit.height(0.03),
    justifyContent: 'space-between',
  },
  idCont: {
    backgroundColor: 'black',
    borderRadius: R.unit.width(1) / 2,
    paddingHorizontal: R.unit.width(0.03),
    paddingVertical: R.unit.width(0.015),
  },
  line: {
    width: R.unit.width(0.95),
    height: R.unit.height(0.015),
    borderRadius: 20,
    alignSelf: 'center',
  },
});
