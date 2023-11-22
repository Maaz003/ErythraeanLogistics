import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import TextInput from '@components/common/TextInput';
import ActionButton from '@components/common/ActionButton';
import DropDown from '@components/common/DropDown';
import TimeDatePicker from '@components/common/TimeDatePicker';
import {
  SelectCustomer,
  Year,
  Auction,
  AuctionCity,
  Color,
  Destination_Port,
  LOT,
  Make,
  Model,
  POL,
  Type,
  VechileOperable,
} from '@components/constants/createOrderConstant';
import FormScrollContainer from '@components/layout/FormScrollContainer';

//third party
import moment from 'moment';

const CreateNewOrder = ({navigation, ...props}) => {
  //dropdown
  const [selectCustomerValue, setSelectCustomerValue] = useState(null);
  const [YearValue, setYearValue] = useState(null);
  const [MakeValue, setMakeValue] = useState(null);
  const [ModelValue, setModelValue] = useState(null);
  const [ColorValue, setColorValue] = useState(null);
  const [AuctionValue, setAuctionValue] = useState(null);
  const [AuctionCityValue, setAuctionCityValue] = useState(null);
  const [LOTValue, setLOTValue] = useState(null);
  const [Destination_PortValue, setDestination_PortValue] = useState(null);
  const [POLValue, setPOLValue] = useState(null);
  const [TypeValue, setTypeValue] = useState(null);
  const [VechileOperableValue, setVechileOperableValue] = useState(null);
  //dropdown

  //time
  const [date, setDate] = useState(new Date());
  const [getDate, setGetDate] = useState('');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setGetDate(moment(currentDate).format('DD-MM-YYYY'));
  };

  const showDatePicker = () => {
    setShow(true);
  };

  const [date1, setDate1] = useState(new Date());
  const [getDate1, setGetDate1] = useState('');
  const [show1, setShow1] = useState(false);

  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow1(Platform.OS === 'ios');
    setDate1(currentDate);
    setGetDate1(moment(currentDate).format('DD-MM-YYYY'));
  };

  const showDatePicker1 = () => {
    setShow1(true);
  };
  //time

  const [typeCheck, setTypeCheck] = useState(2);
  const [typeCheck1, setTypeCheck1] = useState(2);
  return (
    <ScreenBoiler
      onPressNotification={() => {
        navigation.navigate('Notification');
      }}>
      <FormScrollContainer paddingBottom={0.15}>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          fontSize={R.unit.width(0.065)}
          font={'RajdhaniBold'}
          gutterTop={10}
          gutterLeft={15}>
          Create New Order
        </Text>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          fontSize={R.unit.width(0.05)}
          font={'RajdhaniBold'}
          gutterTop={5}
          gutterLeft={15}>
          Autos
        </Text>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          fontSize={R.unit.width(0.05)}
          font={'RajdhaniMedium'}
          gutterTop={5}
          gutterLeft={15}>
          Select PDF Type
        </Text>
        <View style={styles.mainCont}>
          <View style={styles.flexCont}>
            <TouchableOpacity
              onPress={() => {
                setTypeCheck(0);
              }}
              activeOpacity={0.7}
              style={styles.halfCont}>
              <Text
                color={'black'}
                fontSize={R.unit.width(0.05)}
                font={'RajdhaniMedium'}>
                Copart
              </Text>
              {typeCheck === 0 ? (
                <View style={styles.imgStyleCont}>
                  <Image source={R.image.Tick()} style={R.styles.img} />
                </View>
              ) : (
                <View style={styles.circleCont} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setTypeCheck(1);
              }}
              activeOpacity={0.7}
              style={styles.halfCont}>
              <Text
                color={'black'}
                fontSize={R.unit.width(0.05)}
                font={'RajdhaniMedium'}>
                IAAI
              </Text>
              {typeCheck === 1 ? (
                <View style={styles.imgStyleCont}>
                  <Image source={R.image.Tick()} style={R.styles.img} />
                </View>
              ) : (
                <View style={styles.circleCont} />
              )}
            </TouchableOpacity>
          </View>
          <DropDown
            data={SelectCustomer}
            value={selectCustomerValue}
            placeholderText={'Select Customer'}
            onChange={item => {
              setSelectCustomerValue(item.value);
            }}
          />
          <TimeDatePicker
            date={date}
            getDate={getDate}
            onChange={onChange}
            show={show}
            showDatePicker={showDatePicker}
            text={'Purchased Date'}
          />
          <DropDown
            data={Year}
            value={YearValue}
            placeholderText={'Year'}
            onChange={item => {
              setYearValue(item.value);
            }}
          />
          <DropDown
            data={Make}
            value={MakeValue}
            placeholderText={'Make'}
            onChange={item => {
              setMakeValue(item.value);
            }}
          />
          <DropDown
            data={Model}
            value={ModelValue}
            placeholderText={'Model'}
            onChange={item => {
              setModelValue(item.value);
            }}
          />
          <DropDown
            data={Color}
            value={ColorValue}
            placeholderText={'Color'}
            onChange={item => {
              setColorValue(item.value);
            }}
          />
          <DropDown
            data={Auction}
            value={AuctionValue}
            placeholderText={'Auction'}
            onChange={item => {
              setAuctionValue(item.value);
            }}
          />
          <DropDown
            data={AuctionCity}
            value={AuctionCityValue}
            placeholderText={'Auction City'}
            onChange={item => {
              setAuctionCityValue(item.value);
            }}
          />
          <DropDown
            data={LOT}
            value={LOTValue}
            placeholderText={'LOT'}
            onChange={item => {
              setLOTValue(item.value);
            }}
          />
          <TimeDatePicker
            date={date1}
            getDate={getDate1}
            onChange={onChange1}
            show={show1}
            showDatePicker={showDatePicker1}
            text={'Payment to Auction'}
          />
          <DropDown
            data={Destination_Port}
            value={Destination_PortValue}
            placeholderText={'Destination Port'}
            onChange={item => {
              setDestination_PortValue(item.value);
            }}
          />
          <DropDown
            data={POL}
            value={POLValue}
            placeholderText={'P.O.L'}
            onChange={item => {
              setPOLValue(item.value);
            }}
          />
          <TextInput
            placeholderText={'VIN Number'}
            width={0.95}
            keyboardType={'numeric'}
          />
          <DropDown
            data={Type}
            value={TypeValue}
            placeholderText={'Type'}
            onChange={item => {
              setTypeValue(item.value);
            }}
          />
          <TextInput placeholderText={'Email'} width={0.95} />
          <DropDown
            data={VechileOperable}
            value={VechileOperableValue}
            placeholderText={'Vechile Operable'}
            onChange={item => {
              setVechileOperableValue(item.value);
            }}
          />
          <View style={styles.flexCont}>
            <TouchableOpacity
              onPress={() => {
                setTypeCheck1(0);
              }}
              activeOpacity={0.7}
              style={styles.halfCont}>
              <Text
                color={'black'}
                fontSize={R.unit.width(0.05)}
                font={'RajdhaniMedium'}>
                To Dismantle
              </Text>
              {typeCheck1 === 0 ? (
                <View style={styles.imgStyleCont}>
                  <Image source={R.image.Tick()} style={R.styles.img} />
                </View>
              ) : (
                <View style={styles.circleCont} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setTypeCheck1(1);
              }}
              activeOpacity={0.7}
              style={styles.halfCont}>
              <Text
                color={'black'}
                fontSize={R.unit.width(0.05)}
                font={'RajdhaniMedium'}>
                Self Delivered
              </Text>
              {typeCheck1 === 1 ? (
                <View style={styles.imgStyleCont}>
                  <Image source={R.image.Tick()} style={R.styles.img} />
                </View>
              ) : (
                <View style={styles.circleCont} />
              )}
            </TouchableOpacity>
          </View>
          <TextInput
            placeholderText={'Notes'}
            width={0.95}
            height={R.unit.height(0.25)}
          />
          <ActionButton
            title={'Create'}
            bgColor={'#262626'}
            marginTop={0.04}
            width={0.95}
          />
        </View>
      </FormScrollContainer>
    </ScreenBoiler>
  );
};

export default CreateNewOrder;

const styles = StyleSheet.create({
  mainCont: {
    alignItems: 'center',
  },
  flexCont: {
    flexDirection: 'row',
    width: R.unit.width(0.95),
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: R.unit.height(0.02),
  },
  halfCont: {
    width: R.unit.width(0.46),
    height: R.unit.height(0.075),
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: R.unit.width(0.035),
  },
  circleCont: {
    width: R.unit.width(0.05),
    height: R.unit.width(0.05),
    borderRadius: R.unit.width(1) / 2,
    borderWidth: 2,
    borderColor: 'black',
  },
  imgStyleCont: {
    width: R.unit.width(0.05),
    height: R.unit.width(0.05),
  },
});
