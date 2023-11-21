import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import R from '@components/utils/R';

const AddButton = ({
  onPress,
  marginTop = 0,
  bgColor,
  title,
  isImage,
  image,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.mainCont,
        {backgroundColor: bgColor, marginTop: R.unit.height(marginTop)},
      ]}>
      {isImage && (
        <View style={styles.imgStyleCont}>
          <Image source={image} style={R.styles.img} />
        </View>
      )}

      <Text style={styles.txt1}>{title}</Text>
    </TouchableOpacity>
  );
};
export default AddButton;

const styles = StyleSheet.create({
  mainCont: {
    width: R.unit.width(0.85),
    paddingVertical: R.unit.height(0.02),
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: R.unit.width(0.02),
    alignItems: 'center',
  },
  txt1: {
    color: 'white',
    fontSize: R.unit.width(0.054),
    fontFamily: 'Rajdhani-SemiBold',
  },
  imgStyleCont: {
    width: R.unit.width(0.05),
    height: R.unit.width(0.05),
    marginRight: R.unit.width(0.015),
  },
});
