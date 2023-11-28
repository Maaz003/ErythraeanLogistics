import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';

const FreightCard = ({item, onPress,onPressActionSheet, ...props}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[styles.mainCont]}>
        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.056)}
            font={'RajdhaniSemiBold'}>
            Shipping rates
          </Text>
          <TouchableOpacity
            style={styles.circleCont}
            onPress={onPressActionSheet}>
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
          </TouchableOpacity>
        </View>

        <Text
          color={'black'}
          fontSize={R.unit.width(0.045)}
          alignSelf={'flex-start'}
          font={'RajdhaniSemiBold'}
          gutterLeft={20}>
          Shipping price 1
        </Text>
        <Text
          color={'black'}
          fontSize={R.unit.width(0.042)}
          alignSelf={'flex-start'}
          font={'RajdhaniMedium'}
          gutterLeft={20}>
          (When you select a price at selected port - all available shipping
          lines will be displayed in pop-up)
        </Text>

        {/* Container Size/Amount Of Vehicles */}
        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.038)}
            font={'RajdhaniMedium'}>
            Container Size/Amount Of Vehicles
          </Text>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.038)}
            font={'RajdhaniMedium'}>
            40 Feet / 1 Auto
          </Text>
        </View>
        {/* Container Size/Amount Of Vehicles */}

        <Text
          color={'black'}
          fontSize={R.unit.width(0.045)}
          alignSelf={'flex-start'}
          font={'RajdhaniSemiBold'}
          gutterLeft={20}>
          Prices By Loading Port
        </Text>

        {/* TX */}
        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            TX
          </Text>
          <View style={styles.flexMainCont}>
            <View style={styles.idCont}>
              <Text
                color={'white'}
                fontSize={R.unit.width(0.035)}
                font={'RajdhaniSemiBold'}>
                MSC
              </Text>
            </View>
            <View style={styles.idCont}>
              <Text
                color={'white'}
                fontSize={R.unit.width(0.035)}
                font={'RajdhaniSemiBold'}>
                MAERSK
              </Text>
            </View>
          </View>
        </View>
        {/* TX */}
        {/* Charge */}
        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            Charge
          </Text>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            $2850
          </Text>
        </View>
        {/* Charge */}
        {/* NY */}
        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            NY
          </Text>
          <View style={styles.flexMainCont}>
            <View style={styles.idCont}>
              <Text
                color={'white'}
                fontSize={R.unit.width(0.035)}
                font={'RajdhaniSemiBold'}>
                MSC
              </Text>
            </View>
            <View style={styles.idCont}>
              <Text
                color={'white'}
                fontSize={R.unit.width(0.035)}
                font={'RajdhaniSemiBold'}>
                MAERSK
              </Text>
            </View>
          </View>
        </View>
        {/* NY */}
        {/* GA */}
        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            GA
          </Text>
          <View style={styles.flexMainCont}>
            <View style={styles.idCont}>
              <Text
                color={'white'}
                fontSize={R.unit.width(0.035)}
                font={'RajdhaniSemiBold'}>
                MSC
              </Text>
            </View>
            <View style={styles.idCont}>
              <Text
                color={'white'}
                fontSize={R.unit.width(0.035)}
                font={'RajdhaniSemiBold'}>
                MAERSK
              </Text>
            </View>
          </View>
        </View>
        {/* GA */}
      </TouchableOpacity>
    </>
  );
};
export default React.memo(FreightCard);

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
    marginVertical: R.unit.height(0.01),
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
    width: R.unit.width(0.15),
    paddingHorizontal: R.unit.width(0.04),
    height: R.unit.height(0.05),
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
  flexMainCont: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: R.unit.width(0.32),
    justifyContent: 'space-between',
  },
});
