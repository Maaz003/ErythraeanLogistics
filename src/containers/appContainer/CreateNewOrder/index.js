import React, {useState, useEffect} from 'react';
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
import {Type, VechileOperable} from '@components/constants/createOrderConstant';
import FormScrollContainer from '@components/layout/FormScrollContainer';
import Loader from '@components/common/Loader';
import PopUp from '@components/common/PopUp';
import PDFPicker from '@components/common/PDFPicker';

//third party
import moment from 'moment';

//! RTK QUERY API
import {
  useGetAuctionCityQuery,
  useGetDestinationPortQuery,
  useGetExportPortsQuery,
  useCreateOrderMutation,
  useCheckVinQuery,
  useUploadCopartMutation,
  useUploadIAAIMutation,
} from '../../../store/services/index';
import {useSelector} from 'react-redux';

const CreateNewOrder = ({navigation, ...props}) => {
  const user = useSelector(state => state.user.user);
  const [state, setState] = useState({
    year: '', //text
    make: '', //text
    model: '', //text
    color: '', //text
    auction: 1, //dropdown
    auction_city: null, //dropdown
    auction_zip: null,
    auction_state: null,
    auction_address: null,
    auction_cell: null,
    auction_phone: null,
    lot: '', //text
    destination_port: user?.destination?.destination_port_id, //dropdown
    pol: null, //dropdown
    vin_number: '', //text
    vehicle_operable: null, //dropdown
    type: null, //dropdown
    to_dismantle: false, //bool
    self_delivered: false, //bool
    note: '', //text
  });
  const [isLoader, setIsLoader] = useState(false);
  const [selectPDF, setSelectPDF] = useState(null);

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
  //time

  const onChangeText = (text, key) => {
    setState(prevState => ({
      ...prevState,
      [key]: text,
    }));
  };

  //apis
  const {data: auctionCityData, isFetching: auctionCityIsFetching} =
    useGetAuctionCityQuery(state.auction);

  const {data: destinationData, isFetching: destinationIsFetching} =
    useGetDestinationPortQuery();

  const {data: POLData, isFetching: POLIsFetching} = useGetExportPortsQuery();

  const {data: vinCheck, isFetching: vinCheckIsFetching} = useCheckVinQuery(
    state.vin_number,
  );

  const [uploadCopart] = useUploadCopartMutation();
  const [uploadIAAI] = useUploadIAAIMutation();
  const [createOrder] = useCreateOrderMutation();

  const _handleCreateNewOrder = () => {
    const destination = destinationData?.data.find(
      x => x.id == state.destination_port,
    );

    // Validation checks
    if (
      !state.year ||
      !state.make ||
      !state.model ||
      !state.color ||
      !state.auction ||
      !state.auction_city ||
      !state.lot ||
      !destination ||
      !state.pol ||
      !state.vin_number ||
      !state.type ||
      !state.to_dismantle ||
      !state.self_delivered ||
      !state.note ||
      !getDate ||
      !getDate1
    ) {
      PopUp({
        heading: 'Please fill in all required fields',
        type: 'danger',
      });
      return; // Exit function if validation fails
    }

    setIsLoader(true);
    const formData = new FormData();
    formData.append('customer', user?.id);
    formData.append('year', state.year);
    formData.append('make', state.make);
    formData.append('model', state.model);
    formData.append('color', state.color);
    formData.append('auction', state.auction);
    formData.append('auction_city', state.auction_city);
    formData.append('lot', state.lot);
    formData.append('destination_port', destination?.name);
    formData.append('opening_port', state.pol);
    formData.append('vin_number', state.vin_number);
    formData.append('vehicle_operable', state.vehicle_operable);
    formData.append('type', state.type);
    formData.append('dismantle', state.to_dismantle);
    formData.append('self_delivered', state.self_delivered);
    formData.append('notes', state.note);
    formData.append('purchase_date', getDate);
    formData.append('payment_to_auction', getDate1);

    console.log('formData ===>', formData);

    createOrder(formData)
      .unwrap()
      .then(result => {
        console.log('createOrder successful:', result);
        setIsLoader(false);
        PopUp({
          heading: result?.message,
          type: 'success',
        });
        navigation.goBack();
      })
      .catch(error => {
        console.error('createOrder failed:', error);
        PopUp({
          heading: error?.data?.message,
          type: 'danger',
        });
        setIsLoader(false);
      });
  };

  console.log('selectPDF ====>', selectPDF);

  const handlePDF = () => {
    setIsLoader(true);
    const PDFformData = new FormData();
    if (state.auction == 1) {
      PDFformData.append('invoice_for_autos', {
        uri: selectPDF[0]?.uri,
        name: selectPDF[0]?.name,
        type: selectPDF[0]?.type,
      });
      console.log('uploadCopart ==>', PDFformData);
      uploadCopart(PDFformData)
        .unwrap()
        .then(result => {
          console.log('uploadCopart successful:', result);
          onChangeText(result?.data?.vin, 'vin_number');
          onChangeText(result?.data?.lot_number, 'lot');
          setIsLoader(false);
        })
        .catch(error => {
          console.log('uploadCopart failed ===>', error);
          setIsLoader(false);
        });
    } else {
      PDFformData.append('pdf', {
        uri: selectPDF[0]?.uri,
        name: selectPDF[0]?.name,
        type: selectPDF[0]?.type,
      });
      console.log('uploadIAAI ==>', PDFformData);
      uploadIAAI(PDFformData)
        .unwrap()
        .then(result => {
          console.log('uploadIAAI successful:', result);
          onChangeText(result?.data?.vin, 'vin_number');
          onChangeText(result?.data?.color, 'color');
          onChangeText(result?.data?.model, 'model');
          onChangeText(result?.data?.year, 'year');
          onChangeText(result?.data?.make, 'make');
          onChangeText(result?.data?.lot, 'lot');
          setDate(result?.data?.purchased_date);
          setIsLoader(false);
        })
        .catch(error => {
          console.log('uploadIAAI failed ===>', error);
          setIsLoader(false);
        });
    }
  };

  useEffect(() => {
    if (selectPDF) {
      handlePDF();
    } else {
      console.log('no hit ========================>');
    }
  }, [selectPDF]);

  return (
    <>
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
                  onChangeText(1, 'auction');
                }}
                activeOpacity={0.7}
                style={styles.halfCont}>
                <Text
                  color={'black'}
                  fontSize={R.unit.width(0.05)}
                  font={'RajdhaniMedium'}>
                  Copart
                </Text>
                {state.auction === 1 ? (
                  <View style={styles.imgStyleCont}>
                    <Image source={R.image.Tick()} style={R.styles.img} />
                  </View>
                ) : (
                  <View style={styles.circleCont} />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onChangeText(2, 'auction');
                }}
                activeOpacity={0.7}
                style={styles.halfCont}>
                <Text
                  color={'black'}
                  fontSize={R.unit.width(0.05)}
                  font={'RajdhaniMedium'}>
                  IAAI
                </Text>
                {state.auction === 2 ? (
                  <View style={styles.imgStyleCont}>
                    <Image source={R.image.Tick()} style={R.styles.img} />
                  </View>
                ) : (
                  <View style={styles.circleCont} />
                )}
              </TouchableOpacity>
            </View>
            <PDFPicker
              title={'Select PDF'}
              pickedDocument={selectPDF}
              setPickedDocument={setSelectPDF}
            />

            <TimeDatePicker
              date={date}
              getDate={getDate}
              onChange={onChange}
              show={show}
              showDatePicker={showDatePicker}
              text={'Purchased Date'}
            />
            <TextInput
              placeholderText={'Year'}
              width={0.95}
              keyboardType={'numeric'}
              value={state.year}
              handleOnChangeTxt={text => onChangeText(text, 'year')}
            />
            <TextInput
              placeholderText={'Make'}
              width={0.95}
              value={state.make}
              handleOnChangeTxt={text => onChangeText(text, 'make')}
            />
            <TextInput
              placeholderText={'Model'}
              width={0.95}
              value={state.model}
              handleOnChangeTxt={text => onChangeText(text, 'model')}
            />
            <TextInput
              placeholderText={'Color'}
              width={0.95}
              value={state.color}
              handleOnChangeTxt={text => onChangeText(text, 'color')}
            />

            <DropDown
              data={auctionCityIsFetching ? [] : auctionCityData?.data}
              value={state.auction_city}
              placeholderText={'Auction City'}
              onChange={item => {
                onChangeText(item.name, 'auction_city');
                onChangeText(item.zip, 'auction_zip');
                onChangeText(item.state, 'auction_state');
                onChangeText(item.address, 'auction_address');
                onChangeText(item.cell, 'auction_cell');
                onChangeText(item.phone, 'auction_phone');
              }}
              labelField={'name'}
              valueField={'name'}
            />
            <TextInput
              placeholderText={'LOT'}
              width={0.95}
              value={state.lot}
              handleOnChangeTxt={text => onChangeText(text, 'lot')}
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
              data={destinationIsFetching ? [] : destinationData?.data}
              value={state.destination_port}
              placeholderText={'Destination Port'}
              onChange={item => {
                onChangeText(item.value, 'destination_port');
              }}
              valueField={'id'}
              labelField={'name'}
            />
            <DropDown
              data={POLIsFetching ? [] : POLData?.data}
              value={state.pol}
              placeholderText={'P.O.L'}
              onChange={item => {
                onChangeText(item.name, 'pol');
              }}
              valueField={'name'}
              labelField={'name'}
            />
            <TextInput
              placeholderText={'VIN Number'}
              width={0.95}
              value={state.vin_number}
              handleOnChangeTxt={text => onChangeText(text, 'vin_number')}
            />
            {vinCheck?.status && (
              <Text color={'red'} style={styles.errText}>
                {vinCheck?.message}
              </Text>
            )}
            <DropDown
              data={Type}
              value={state.type}
              placeholderText={'Type'}
              onChange={item => {
                onChangeText(item.value, 'type');
              }}
            />
            <DropDown
              data={VechileOperable}
              value={state.vehicle_operable}
              placeholderText={'Vechile Operable'}
              onChange={item => {
                onChangeText(item.value, 'vehicle_operable');
              }}
            />
            <View style={styles.flexCont}>
              <TouchableOpacity
                onPress={() => {
                  onChangeText(!state.to_dismantle, 'to_dismantle');
                }}
                activeOpacity={0.7}
                style={styles.halfCont}>
                <Text
                  color={'black'}
                  fontSize={R.unit.width(0.05)}
                  font={'RajdhaniMedium'}>
                  To Dismantle
                </Text>
                {state.to_dismantle ? (
                  <View style={styles.imgStyleCont}>
                    <Image source={R.image.Tick()} style={R.styles.img} />
                  </View>
                ) : (
                  <View style={styles.circleCont} />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onChangeText(!state.self_delivered, 'self_delivered');
                }}
                activeOpacity={0.7}
                style={styles.halfCont}>
                <Text
                  color={'black'}
                  fontSize={R.unit.width(0.05)}
                  font={'RajdhaniMedium'}>
                  Self Delivered
                </Text>
                {state.self_delivered ? (
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
              value={state.note}
              handleOnChangeTxt={text => onChangeText(text, 'note')}
            />
            <ActionButton
              title={'Create'}
              bgColor={vinCheck?.status ? '#6D6D6D' : '#262626'}
              marginTop={0.04}
              width={0.95}
              onPress={() => {
                if (!vinCheck?.status) {
                  _handleCreateNewOrder();
                }
              }}
            />
          </View>
        </FormScrollContainer>
      </ScreenBoiler>
      {isLoader && <Loader />}
    </>
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
  errText: {
    alignSelf: 'flex-start',
    marginLeft: R.unit.width(0.04),
    marginBottom: R.unit.height(0.01),
    marginTop: R.unit.height(0.01),
  },
});
