import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import TitleImageContainerCard from './TitleImageContainerCard';
import navigationRef from '@navRef';

const YardDestinationCard = ({item, onPressActionSheet, index, ...props}) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.8} style={[styles.mainCont]}>
        <View style={styles.flexCont}>
          <View style={styles.idCont}>
            <Text
              color={'white'}
              fontSize={R.unit.width(0.035)}
              font={'RajdhaniSemiBold'}>
              {index + 1}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.circleCont}
            onPress={onPressActionSheet}>
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
          </TouchableOpacity>
        </View>

        <TitleImageContainerCard
          data={'John Adams'}
          image={R.image.User()}
          title={'Name'}
        />

        <TitleImageContainerCard
          data={'4895 Old Louisville Rd.	'}
          image={R.image.Warehouse()}
          title={'Address'}
        />

        <TitleImageContainerCard
          data={'Garden City'}
          image={R.image.City()}
          title={'City'}
        />
      </TouchableOpacity>
    </>
  );
};
export default React.memo(YardDestinationCard);

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
