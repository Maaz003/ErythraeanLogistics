import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';

const TowCard = ({item, onPress, ...props}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[styles.mainCont]}>
        {/* City */}
        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            City
          </Text>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            {item?.city}
          </Text>
        </View>
        {/* City */}

        {/* TX */}
        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            {item?.openport?.state}
          </Text>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            {item?.dispatch_cost}
          </Text>
        </View>
        {/* TX */}
      </TouchableOpacity>
    </>
  );
};
export default React.memo(TowCard);

const styles = StyleSheet.create({
  mainCont: {
    width: R.unit.width(0.95),
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: R.unit.height(0.012),
    paddingVertical: R.unit.height(0.02),
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  flexCont: {
    // backgroundColor: 'red',
    width: R.unit.width(0.85),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: R.unit.height(0.01),
    // overflow: 'visible',
  },
  line: {
    height: 1,
    // backgroundColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },
  idCont: {
    backgroundColor: 'black',
    borderRadius: R.unit.width(1) / 2,
    paddingHorizontal: R.unit.width(0.03),
    paddingVertical: R.unit.width(0.015),
  },
  circleCont: {
    width: R.unit.width(0.07),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  circle: {
    height: R.unit.width(0.02),
    width: R.unit.width(0.02),
    borderRadius: R.unit.width(1) / 2,
    backgroundColor: 'black',
  },
  imgStyleCont: {
    width: R.unit.width(0.04),
    height: R.unit.width(0.04),
  },
  imgStyleMainCont: {
    width: R.unit.width(0.075),
    height: R.unit.width(0.075),
    marginRight: R.unit.width(0.02),
    backgroundColor: 'black',
    borderRadius: R.unit.width(1) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
