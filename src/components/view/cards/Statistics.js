import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';

function Statistics({isEven, item, ...props}) {
  return (
    <View
      style={[styles.mainCont, {backgroundColor: isEven ? 'white' : 'black'}]}>
      <View
        style={[
          styles.CircleCont,
          {backgroundColor: isEven ? 'black' : 'white'},
        ]}>
        <View style={styles.imgStyleCont}>
          <Image
            source={item.img}
            style={R.styles.img}
            resizeMode={'contain'}
          />
        </View>
      </View>

      <Text
        color={isEven ? 'black' : 'white'}
        fontSize={R.unit.width(0.045)}
        font={'RajdhaniSemiBold'}
        gutterTop={7}
        gutterBottom={5}>
        {item.title}
      </Text>

      <Text
        color={isEven ? 'black' : 'white'}
        fontSize={R.unit.width(0.1)}
        font={'RajdhaniBold'}>
        {item.item}
      </Text>
    </View>
  );
}
export default React.memo(Statistics);

const styles = StyleSheet.create({
  mainCont: {
    width: R.unit.width(0.4),
    // height: R.unit.height(0.23),
    paddingVertical: R.unit.height(0.02),
    backgroundColor: '#262626',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: R.unit.width(0.02),
    marginTop: R.unit.height(0.012),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  CircleCont: {
    width: R.unit.width(0.17),
    height: R.unit.width(0.17),
    borderRadius: R.unit.width(1) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyleCont: {
    width: R.unit.width(0.08),
    height: R.unit.width(0.08),
  },
});
