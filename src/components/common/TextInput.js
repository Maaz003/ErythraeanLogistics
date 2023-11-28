import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import R from '@components/utils/R';

const Index = ({
  editable,
  value,
  placeholderText,
  handleOnChangeTxt,
  keyboardType,
  Icon,
  iconOnPress,
  width = 0.85,
  height,
  isPasswordInput = false,
  marginTop = 0.015,
  ...props
}) => {
  const [isPassword, setIsPassword] = useState(isPasswordInput);
  return (
    <View
      style={[
        styles.container,
        {
          width: R.unit.width(width),
          height: height,
          marginTop: R.unit.height(marginTop),
        },
      ]}>
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
      <TouchableOpacity
        onPress={() => {
          if (isPasswordInput == true) {
            setIsPassword(!isPassword);
          }
        }}
        activeOpacity={1}
        style={styles.imgStyleCont}>
        <Image source={Icon} style={R.styles.img} resizeMode={'contain'} />
      </TouchableOpacity>
    </View>
  );
};
export default Index;

const styles = StyleSheet.create({
  container: {
    // width: R.unit.width(0.85),
    paddingVertical: R.unit.height(0.015),
    borderColor: '#D9D9D9',
    borderWidth: 0.7,
    borderRadius: R.unit.width(0.02),
    flexDirection: 'row',
    alignSelf: 'center',
  },

  textInput: {
    fontSize: R.unit.width(0.044),
    padding: 0,
    width: R.unit.width(0.7),
    fontFamily: 'Rajdhani-Medium',
    color: 'black',
    marginLeft: R.unit.width(0.04),
  },
  imgStyleCont: {
    width: R.unit.width(0.05),
    height: R.unit.width(0.05),
  },
});
