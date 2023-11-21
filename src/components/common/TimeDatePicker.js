import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import R from '@components/utils/R';
import Text from '@components/common/Text';

function TimeDatePicker({showDatePicker, getDate, onChange, date, show}) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.contDate}
        onPress={showDatePicker}>
        <Text
          color={R.color.black}
          fontSize={R.unit.width(0.045)}
          font={'RajdhaniMedium'}>
          {getDate === '' ? 'Loading Date' : getDate}
        </Text>
        <View style={styles.imgStyleCont}>
          <Image source={R.image.Calendar()} style={R.styles.img} />
        </View>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}
export default TimeDatePicker;

const styles = StyleSheet.create({
  //datee
  contDate: {
    width: R.unit.width(0.95),
    height: R.unit.height(0.075),
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgStyleCont: {
    width: R.unit.width(0.06),
    height: R.unit.width(0.06),
  },
});
