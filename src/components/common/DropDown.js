import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from './Text';
import R from '@components/utils/R';
import Icon from './Icon';
import {Dropdown} from 'react-native-element-dropdown';

const DropDown = ({placeholderText, data, value, onChange, ...props}) => {
  return (
    <View style={styles.dropDownCont}>
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  //dropDown
  dropDownCont: {
    // backgroundColor: 'red',
    marginVertical: R.unit.height(0.01),
    width: R.unit.width(0.95),
    alignSelf: 'center',
  },
  dropdown: {
    // backgroundColor: 'red',
    height: R.unit.height(0.075),
    borderColor: '#D9D9D9',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
  },

  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: R.unit.width(0.045),
    fontFamily: 'Rajdhani-Medium',
    color: R.color.gray2,
  },
  selectedTextStyle: {
    fontSize: R.unit.width(0.045),
    fontFamily: 'Rajdhani-Medium',
    color: R.color.black,
  },
});
