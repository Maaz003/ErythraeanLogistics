import React from 'react';
import {TouchableOpacity, StyleSheet, Platform} from 'react-native';
import R from '@components/utils/R';
import {Text} from 'react-native';

const AddButton = ({onPress, marginTop = 0, bgColor, title, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.mainCont,
        {backgroundColor: bgColor, marginTop: R.unit.height(marginTop)},
      ]}>
      <Text style={styles.txt1}>{title}</Text>
    </TouchableOpacity>
  );
};
export default AddButton;

const styles = StyleSheet.create({
  mainCont: {
    width: R.unit.width(0.85),
    paddingVertical: R.unit.height(0.02),

    borderRadius: R.unit.width(0.02),
    alignItems: 'center',
  },
  txt1: {
    color: 'white',
    fontSize: R.unit.width(0.053),
    fontFamily: 'Rajdhani-SemiBold',
  },
});
