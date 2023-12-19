import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';

const DispatcherOrderDetailCard = ({item, onPress, ...props}) => {
  const DispatcherOrderDetailContainerCard = ({title, data, image}) => {
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
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniSemiBold'}
            width={R.unit.width(0.375)}>
            {title}
          </Text>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.04)}
            font={'RajdhaniMedium'}
            width={R.unit.width(0.375)}>
            {data}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.flexCont}>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          fontSize={R.unit.width(0.065)}
          font={'RajdhaniBold'}>
          Order Detail
        </Text>
        <View style={styles.idCont}>
          <Text
            color={'white'}
            fontSize={R.unit.width(0.035)}
            font={'RajdhaniSemiBold'}>
            000066
          </Text>
        </View>
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.05)}
        font={'RajdhaniBold'}
        gutterTop={5}
        gutterLeft={10}>
        Status Data
      </Text>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Customer'}
          data={'Johnson'}
          image={R.image.User()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Title'}
          data={'YES'}
          image={R.image.InputText()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Vehicle Operable'}
          data={'operable'}
          image={R.image.Car()}
        />
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.05)}
        font={'RajdhaniBold'}
        gutterTop={20}
        gutterLeft={10}>
        Vehicle Data
      </Text>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'VIN Number'}
          data={'8RKNBASASFSDDFD545355486'}
          image={R.image.Tally()}
        />

        <DispatcherOrderDetailContainerCard
          title={'Year'}
          data={'2006'}
          image={R.image.CalendarDays()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Make'}
          data={'Toyota'}
          image={R.image.Building()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Model'}
          data={'Rav4'}
          image={R.image.Car()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Color'}
          data={'White'}
          image={R.image.Palette()}
        />
        <DispatcherOrderDetailContainerCard
          title={'LOT'}
          data={'37165165416'}
          image={R.image.List()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Keys Present'}
          data={'Yes'}
          image={R.image.Key()}
        />
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.05)}
        font={'RajdhaniBold'}
        gutterTop={20}
        gutterLeft={10}>
        Dispatcher Data
      </Text>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Auction'}
          data={'IAAI'}
          image={R.image.CalendarStar()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Auction City'}
          data={'NYC'}
          image={R.image.Building()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Title Received Date'}
          data={'07-11-2023'}
          image={R.image.CalendarWhite()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Purchased Date'}
          data={'07-11-2023'}
          image={R.image.CalendarStar()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Payment To Auction'}
          data={'223-10-23'}
          image={R.image.Dollar()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Warehouse'}
          data={'None'}
          image={R.image.Warehouse()}
        />
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.05)}
        font={'RajdhaniBold'}
        gutterTop={20}
        gutterLeft={10}>
        Accounting Data
      </Text>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'P.O.L'}
          data={'IAAI'}
          image={R.image.CalendarWhite()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Default Charges'}
          data={'123231'}
          image={R.image.Dollar()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Destination Port'}
          data={'NYC'}
          image={R.image.LocationDot()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Dispatch Cost'}
          data={'123231'}
          image={R.image.Dollar()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Storage Cost'}
          data={'132321'}
          image={R.image.Dollar()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Title Mailing Cost'}
          data={'123321'}
          image={R.image.Dollar()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Other Services Cost'}
          data={'123321'}
          image={R.image.Dollar()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Freight Cost'}
          data={'123321'}
          image={R.image.Dollar()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Type'}
          data={'Auto'}
          image={R.image.Car()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Addional Services Name'}
          data={'None'}
          image={R.image.Notes()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Addional Service Price'}
          data={'None'}
          image={R.image.Dollar()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Addional Service Note'}
          data={'None'}
          image={R.image.Notes()}
        />
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.065)}
        font={'RajdhaniBold'}
        gutterLeft={10}
        gutterTop={15}
        gutterBottom={5}>
        Proposal Detail
      </Text>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.05)}
        font={'RajdhaniBold'}
        gutterTop={5}
        gutterLeft={10}>
        Origin
      </Text>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Terminal Dealer Or Action'}
          data={'IAAI-KS-KANSAS CITY'}
          image={R.image.CalendarStar()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Contact'}
          data={'None'}
          image={R.image.PhoneWhite()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Address'}
          data={'2663 S. 88Th St.'}
          image={R.image.LocationDot()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Destination Port'}
          data={'KANSAS CITY'}
          image={R.image.City()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'State'}
          data={'KS'}
          image={R.image.City()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Postal Code'}
          data={'66111'}
          image={R.image.Tally()}
        />
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.05)}
        font={'RajdhaniBold'}
        gutterTop={20}
        gutterLeft={10}>
        Destination
      </Text>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Destination'}
          data={'Linear Shipping TX'}
          image={R.image.LocationDot()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Phone'}
          data={'7136437447'}
          image={R.image.PhoneWhite()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Cell'}
          data={'None'}
          image={R.image.PhoneWhite()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Email'}
          data={'dispatch@linearshipping.com'}
          image={R.image.Warehouse()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Address'}
          data={'3925 Galveston'}
          image={R.image.LocationDot()}
        />
        <DispatcherOrderDetailContainerCard
          title={'City'}
          data={'Houston'}
          image={R.image.City()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'State'}
          data={'TX'}
          image={R.image.Building()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Postal Code'}
          data={'77017'}
          image={R.image.Tally()}
        />
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.05)}
        font={'RajdhaniBold'}
        gutterTop={20}
        gutterLeft={10}>
        Vehicle Information
      </Text>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Ship Method'}
          data={'Open'}
          image={R.image.Building()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Vehicle Operable'}
          data={'Operable'}
          image={R.image.Car()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'VIN'}
          data={'JTMBD33V466015600'}
          image={R.image.Tally()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Year'}
          data={'2006'}
          image={R.image.CalendarWhite()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Make'}
          data={'Toyota'}
          image={R.image.Building()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Model'}
          data={'rav4'}
          image={R.image.Car()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Color'}
          data={'Grey'}
          image={R.image.Palette()}
        />
        <DispatcherOrderDetailContainerCard
          title={'LOT'}
          data={'132151'}
          image={R.image.List()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Vehicle TYpe'}
          data={'SUV'}
          image={R.image.Car()}
        />
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.05)}
        font={'RajdhaniBold'}
        gutterTop={20}
        gutterLeft={10}>
        Pickup & Delivery Dates
      </Text>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Date Available to Ship'}
          data={'DD/MM/YYYY'}
          image={R.image.Building()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Desired Delivery Date'}
          data={'DD/MM/YYYY'}
          image={R.image.Car()}
        />
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.05)}
        font={'RajdhaniBold'}
        gutterTop={20}
        gutterLeft={10}>
        Pricing & Payment
      </Text>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Default Dispatch Cost'}
          data={'450'}
          image={R.image.Dollar()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Default Dispatch Charge'}
          data={'350'}
          image={R.image.Dollar()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'COD/COP Amount'}
          data={'350'}
          image={R.image.Building()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Balance Amount'}
          data={'150'}
          image={R.image.Car()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'COD/COP Payment Method *'}
          data={'Cash/Certified Funds'}
          image={R.image.Palette()}
        />
        <DispatcherOrderDetailContainerCard
          title={'COD/COP Location *'}
          data={'Delivery'}
          image={R.image.List()}
        />
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.05)}
        font={'RajdhaniBold'}
        gutterTop={20}
        gutterLeft={10}>
        Carrier Information
      </Text>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Company Name'}
          data={'NH1 LLC'}
          image={R.image.Building()}
        />
        <DispatcherOrderDetailContainerCard
          title={'MC#'}
          data={'1216524'}
          image={R.image.Tally()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Contact'}
          data={'None'}
          image={R.image.User()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Address #1'}
          data={'None'}
          image={R.image.LocationDot()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Address #2'}
          data={'None'}
          image={R.image.LocationDot()}
        />
        <DispatcherOrderDetailContainerCard
          title={'City'}
          data={'mesa'}
          image={R.image.City()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'State'}
          data={'AZ'}
          image={R.image.City()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Phone #1'}
          data={'None'}
          image={R.image.PhoneWhite()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Phone #2'}
          data={'None'}
          image={R.image.PhoneWhite()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Cell Phone'}
          data={'None'}
          image={R.image.PhoneWhite()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Fax'}
          data={'None'}
          image={R.image.Building()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Date to Pickup'}
          data={'Exactly'}
          image={R.image.CalendarWhite()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Pickup Date'}
          data={'None'}
          image={R.image.CalendarWhite()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Date to Deliver'}
          data={'18/10/2023'}
          image={R.image.CalendarWhite()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Delivery Date'}
          data={'18/10/2023'}
          image={R.image.CalendarWhite()}
        />
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.05)}
        font={'RajdhaniBold'}
        gutterTop={20}
        gutterLeft={10}>
        Additional Information
      </Text>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Order Id'}
          data={'59'}
          image={R.image.Tally()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Additional Terms'}
          data={'None'}
          image={R.image.Notes()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Special Instructions'}
          data={'None'}
          image={R.image.List()}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: R.unit.width(0.95),
          marginVertical: R.unit.height(0.01),
          alignSelf: 'center',
        }}>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          fontSize={R.unit.width(0.065)}
          font={'RajdhaniBold'}>
          Order History
        </Text>
        <TouchableOpacity activeOpacity={0.7} style={[styles.orderCont]}>
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
      </View>

      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Date'}
          data={'2023-10-23'}
          image={R.image.CalendarWhite()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Action'}
          data={'Order Created'}
          image={R.image.Plus()}
        />
      </View>
      <View style={styles.container}>
        <DispatcherOrderDetailContainerCard
          title={'Role'}
          data={'Customer'}
          image={R.image.User()}
        />
        <DispatcherOrderDetailContainerCard
          title={'Name'}
          data={'Mohammed ALMagleh'}
          image={R.image.User()}
        />
      </View>
    </>
  );
};
export default React.memo(DispatcherOrderDetailCard);

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    marginTop: R.unit.height(0.02),
    width: R.unit.width(0.95),
    alignSelf: 'center',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent:'space-between'
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
    width: R.unit.width(0.47),
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
  orderCont: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: R.unit.width(0.02),
    width: R.unit.width(0.2),
    borderWidth: 1,
  },
  imgMiniStyleCont: {
    width: R.unit.width(0.04),
    height: R.unit.width(0.04),
    marginRight: R.unit.width(0.02),
  },
});
