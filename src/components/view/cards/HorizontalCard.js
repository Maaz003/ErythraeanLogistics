import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';

const {width, height} = Dimensions.get('window');

const HorizontalCard = ({item, onPress, ...props}) => {
  // Year: '2023',
  // Make: 'Test',
  // Model: 'Test',
  // LOT: '235489',
  // VIN: '8RKNBASD545355486',
  // Destination_Port: 'Salalah-Oman',
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[styles.mainCont]}>
        <View style={styles.flexCont}>
          <View style={styles.idCont}>
            <Text
              color={'white'}
              fontSize={R.unit.width(0.035)}
              font={'RajdhaniSemiBold'}>
              {item.id}
            </Text>
          </View>
          <TouchableOpacity style={styles.circleCont}>
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
          </TouchableOpacity>
        </View>

        {/* Year */}

        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            Year
          </Text>
          <View style={[styles.line, {width: R.unit.width(0.6)}]} />
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            {item.Year}
          </Text>
        </View>

        {/* Year */}

        {/* Make */}

        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            Make
          </Text>
          <View style={[styles.line, {width: R.unit.width(0.6)}]} />
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            {item.Make}
          </Text>
        </View>

        {/* Make */}

        {/* Model */}

        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            Model
          </Text>
          <View style={[styles.line, {width: R.unit.width(0.6)}]} />
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            {item.Model}
          </Text>
        </View>

        {/* Model */}

        {/* LOT */}

        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            LOT
          </Text>
          <View style={[styles.line, {width: R.unit.width(0.6)}]} />
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            {item.LOT}
          </Text>
        </View>

        {/* LOT */}

        {/* VIN */}

        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            VIN
          </Text>
          <View style={[styles.line, {width: R.unit.width(0.35)}]} />
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            {item.VIN}
          </Text>
        </View>

        {/* VIN */}

        {/* Destination_Port */}

        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            Destination Port
          </Text>
          <View style={[styles.line, {width: R.unit.width(0.25)}]} />
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            {item.Destination_Port}
          </Text>
        </View>

        {/* Destination_Port */}
      </TouchableOpacity>
    </>
  );
};
export default HorizontalCard;

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
    borderRadius: width / 2,
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
    height: width * 0.02,
    width: width * 0.02,
    borderRadius: width / 2,
    backgroundColor: 'black',
  },
});
