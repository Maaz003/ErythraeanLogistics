import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Text from './Text';
import R from '@components/utils/R';

const Index = ({
  editable,
  value,
  placeholderText,
  handleOnChangeTxt,
  isPassword,
  keyboardType,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        editable={editable}
        value={value}
        placeholder={placeholderText}
        placeholderTextColor="#5A5A5A"
        style={[styles.textInput]}
        onChangeText={handleOnChangeTxt}
        secureTextEntry={isPassword}
        keyboardType={keyboardType}
        {...props}
      />
    </View>
  );
};
export default Index;

const styles = StyleSheet.create({
  container: {
    width: R.unit.width(0.85),
    paddingVertical: R.unit.height(0.015),
    borderColor: '#D9D9D9',
    borderWidth: 0.7,
    borderRadius: R.unit.width(0.02),
    marginTop: R.unit.height(0.027),
  },

  textInput: {
    fontSize: R.unit.width(0.044),
    padding: 0,
    width: R.unit.width(0.8),
    fontFamily: 'Rajdhani-Medium',
    color: 'black',
    marginLeft: R.unit.width(0.04),
  },
});
