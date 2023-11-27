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

  const [values, setValues] = useState({
    selectCustomer: null,
    selectTitleStatus: null,
    selectVehicleOperable: null,
    year: null,
    make: null,
    model: null,
    color: null,
    auction: null,
    auctionCity: null,
    lot: null,
    destinationPort: null,
    pol: null,
    type: null,
    vehicleOperable: null,
    warehouse: null,
  });

  // Update the state based on the dropdown selection
  const handleDropdownChange = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };
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
    const currentDate = selectedDate || date1;
    setShow1(Platform.OS === 'ios');
    setDate1(currentDate);
    setGetDate1(moment(currentDate).format('DD-MM-YYYY'));
  };

  const showDatePicker1 = () => {
    setShow1(true);
  };

  const [date2, setDate2] = useState(new Date());
  const [getDate2, setGetDate2] = useState('');
  const [show2, setShow2] = useState(false);

  const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate || date2;
    setShow2(Platform.OS === 'ios');
    setDate2(currentDate);
    setGetDate2(moment(currentDate).format('DD-MM-YYYY'));
  };

  const showDatePicker2 = () => {
    setShow2(true);
  };

  const [date3, setDate3] = useState(new Date());
  const [getDate3, setGetDate3] = useState('');
  const [show3, setShow3] = useState(false);

  const onChange3 = (event, selectedDate) => {
    const currentDate = selectedDate || date3;
    setShow3(Platform.OS === 'ios');
    setDate3(currentDate);
    setGetDate3(moment(currentDate).format('DD-MM-YYYY'));
  };

  const showDatePicker3 = () => {
    setShow3(true);
  };

  const [date4, setDate4] = useState(new Date());
  const [getDate4, setGetDate4] = useState('');
  const [show4, setShow4] = useState(false);

  const onChange4 = (event, selectedDate) => {
    const currentDate = selectedDate || date4;
    setShow4(Platform.OS === 'ios');
    setDate4(currentDate);
    setGetDate4(moment(currentDate).format('DD-MM-YYYY'));
  };

  const showDatePicker4 = () => {
    setShow4(true);
  };
  //time

  const [typeCheck, setTypeCheck] = useState(2);
  const [typeCheck1, setTypeCheck1] = useState(2);

  console.log('values Dropdown ===>', values);
  return (
    <ScreenBoiler isBack={true}>
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
          {/* Status Data */}
          <Text
            color={'black'}
            alignSelf={'flex-start'}
            fontSize={R.unit.width(0.05)}
            font={'RajdhaniBold'}
            gutterTop={5}
            gutterLeft={15}>
            Status Data
          </Text>
          <DropDown
            data={SelectCustomer}
            value={values.selectCustomer}
            placeholderText={'Select Customer'}
            onChange={item => {
              handleDropdownChange('selectCustomer', item.value);
            }}
          />
          <DropDown
            data={SelectCustomer}
            value={values.selectTitleStatus}
            placeholderText={'Select Title Status'}
            onChange={item => {
              handleDropdownChange('selectTitleStatus', item.value);
            }}
          />
          <DropDown
            data={SelectCustomer}
            value={values.selectVehicleOperable}
            placeholderText={'Select Vehicle Operable'}
            onChange={item => {
              handleDropdownChange('selectVehicleOperable', item.value);
            }}
          />
          {/* Status Data */}

          {/* Vehicle Data */}
          <Text
            color={'black'}
            alignSelf={'flex-start'}
            fontSize={R.unit.width(0.05)}
            font={'RajdhaniBold'}
            gutterTop={5}
            gutterLeft={15}>
            Vehicle Data
          </Text>
          <TextInput
            placeholderText={'VIN Number'}
            width={0.95}
            keyboardType={'numeric'}
          />
          <DropDown
            data={Year}
            value={values.year}
            placeholderText={'Year'}
            onChange={item => {
              handleDropdownChange('year', item.value);
            }}
          />
          <DropDown
            data={Make}
            value={values.make}
            placeholderText={'Make'}
            onChange={item => {
              handleDropdownChange('make', item.value);
            }}
          />
          <DropDown
            data={Model}
            value={values.model}
            placeholderText={'Model'}
            onChange={item => {
              handleDropdownChange('model', item.value);
            }}
          />
          <DropDown
            data={Color}
            value={values.color}
            placeholderText={'Color'}
            onChange={item => {
              handleDropdownChange('color', item.value);
            }}
          />
          <DropDown
            data={LOT}
            value={values.lot}
            placeholderText={'LOT'}
            onChange={item => {
              handleDropdownChange('lot', item.value);
            }}
          />
          <TextInput placeholderText={'Keys Present'} width={0.95} />
          {/* Vehicle Data */}

          {/* Dispatcher Data */}
          <Text
            color={'black'}
            alignSelf={'flex-start'}
            fontSize={R.unit.width(0.05)}
            font={'RajdhaniBold'}
            gutterTop={5}
            gutterLeft={15}>
            Dispatcher Data (For Dispatcher Use Only)
          </Text>
          <DropDown
            data={Auction}
            value={values.auction}
            placeholderText={'Select Auction'}
            onChange={item => {
              handleDropdownChange('auction', item.value);
            }}
          />
          <DropDown
            data={AuctionCity}
            value={values.auctionCity}
            placeholderText={'Auction City'}
            onChange={item => {
              handleDropdownChange('auctionCity', item.value);
            }}
          />

          <TimeDatePicker
            date={date}
            getDate={getDate}
            onChange={onChange}
            show={show}
            showDatePicker={showDatePicker}
            text={'Title Recieved Date'}
          />

          <TimeDatePicker
            date={date2}
            getDate={getDate1}
            onChange={onChange1}
            show={show1}
            showDatePicker={showDatePicker1}
            text={'Purchased Date'}
          />
          <TimeDatePicker
            date={date2}
            getDate={getDate2}
            onChange={onChange2}
            show={show2}
            showDatePicker={showDatePicker2}
            text={'Payment To Auction'}
          />

          <TimeDatePicker
            date={date3}
            getDate={getDate3}
            onChange={onChange3}
            show={show3}
            showDatePicker={showDatePicker3}
            text={'Delivered To Warehouse'}
          />
          <TimeDatePicker
            date={date4}
            getDate={getDate4}
            onChange={onChange4}
            show={show4}
            showDatePicker={showDatePicker4}
            text={'Arrival Date'}
          />
          <DropDown
            data={LOT}
            value={values.warehouse}
            placeholderText={'Warehouse'}
            onChange={item => {
              handleDropdownChange('warehouse', item.value);
            }}
          />
          {/* Dispatcher Data */}

          <Text
            color={'black'}
            alignSelf={'flex-start'}
            fontSize={R.unit.width(0.05)}
            font={'RajdhaniBold'}
            gutterTop={5}
            gutterLeft={15}>
            Accounting Data (For Accounting Use Only)
          </Text>
          <DropDown
            data={POL}
            value={values.pol}
            placeholderText={' Select P.O.L'}
            onChange={item => {
              handleDropdownChange('pol', item.value);
            }}
          />
          <TextInput
            placeholderText={'Default Charges'}
            width={0.95}
            keyboardType={'numeric'}
          />
          <DropDown
            data={Destination_Port}
            value={values.destinationPort}
            placeholderText={'Destination Port'}
            onChange={item => {
              handleDropdownChange('destinationPort', item.value);
            }}
          />
          <TextInput
            placeholderText={'Dispatch Cost'}
            width={0.95}
            keyboardType={'numeric'}
          />
          <DropDown
            data={Type}
            value={values.type}
            placeholderText={'Type'}
            onChange={item => {
              handleDropdownChange('type', item.value);
            }}
          />
          {/* Accounting Date */}

          <ActionButton
            title={'Additional Cost'}
            bgColor={'white'}
            textColor="black"
            borderWidth={1}
            marginTop={0.02}
            width={0.52}
            alignSelf={'flex-start'}
            marginLeft={0.01}
            isImage={true}
            image={R.image.PlusBlack()}
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
