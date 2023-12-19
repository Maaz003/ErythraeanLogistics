import React, {useState} from 'react';
import {StyleSheet, View, Button, TouchableOpacity, Image} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import TextInput from '@components/common/TextInput';
import ActionButton from '@components/common/ActionButton';
import FormScrollContainer from '@components/layout/FormScrollContainer';
import DropDown from '@components/common/DropDown';
import PDFPicker from '@components/common/PDFPicker';

const CreateCarrierCompany = ({navigation, ...props}) => {
  const dropdownData = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const [values, setValues] = useState({
    auction: null,
    pol: null,
  });

  // Update the state based on the dropdown selection
  const handleDropdownChange = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  //document
  const [pickedDocumentInsurance, setPickedDocumentInsurance] = useState(null);
  const [pickedDocumentDotLicense, setPickedDocumentDotLicense] =
    useState(null);
  const [
    pickedDocumentCompanyRegistrationDoc,
    setPickedDocumentCompanyRegistrationDoc,
  ] = useState(null);

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
          Create Carrier Company
        </Text>
        <View style={styles.mainCont}>
          <DropDown
            data={dropdownData}
            value={values.auction}
            placeholderText={'Select Auction Location'}
            onChange={item => {
              handleDropdownChange('auction', item.value);
            }}
          />
          <DropDown
            data={dropdownData}
            value={values.pol}
            placeholderText={'Select P.O.L'}
            onChange={item => {
              handleDropdownChange('pol', item.value);
            }}
          />
          <TextInput placeholderText={'Name'} width={0.95} />
          <TextInput placeholderText={'Street'} width={0.95} />
          <TextInput placeholderText={'City'} width={0.95} />
          <TextInput placeholderText={'State'} width={0.95} />
          <TextInput placeholderText={'Zip'} width={0.95} />
          <TextInput
            placeholderText={'Phone'}
            keyboardType={'numeric'}
            width={0.95}
          />
          <TextInput
            placeholderText={'Email'}
            keyboardType={'email-address'}
            width={0.95}
          />

          <PDFPicker
            title={'Insurance'}
            pickedDocument={pickedDocumentInsurance}
            setPickedDocument={setPickedDocumentInsurance}
          />
          <PDFPicker
            title={'Dot License'}
            pickedDocument={pickedDocumentDotLicense}
            setPickedDocument={setPickedDocumentDotLicense}
          />
          <PDFPicker
            title={'Company Registration Doc'}
            pickedDocument={pickedDocumentCompanyRegistrationDoc}
            setPickedDocument={setPickedDocumentCompanyRegistrationDoc}
          />

          <ActionButton title={'Create'} bgColor={'#262626'} marginTop={0.04} />
        </View>
      </FormScrollContainer>
    </ScreenBoiler>
  );
};

export default CreateCarrierCompany;

const styles = StyleSheet.create({
  mainCont: {
    alignItems: 'center',
  },
  container: {
    width: R.unit.width(0.95),
    paddingVertical: R.unit.height(0.015),
    borderColor: '#D9D9D9',
    borderWidth: 0.7,
    borderRadius: R.unit.width(0.02),
    marginTop: R.unit.height(0.015),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: R.unit.width(0.03),
  },
  imgStyleCont: {
    width: R.unit.width(0.05),
    height: R.unit.width(0.05),
  },
});
