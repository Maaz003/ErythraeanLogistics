import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import TitleImageContainerCard from './TitleImageContainerCard';
import navigationRef from '@navRef';

const CarrierCard = ({item, onPress, onPressActionSheet, ...props}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigationRef.navigate('ContainerDetail');
        }}
        activeOpacity={0.8}
        style={[styles.mainCont]}>
        <View style={styles.flexCont}>
          <View style={styles.idCont}>
            <Text
              color={'white'}
              fontSize={R.unit.width(0.035)}
              font={'RajdhaniSemiBold'}>
              000066
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
          title={'Auction Location'}
          data={'NY-Albany'}
          image={R.image.Building()}
        />
        <TitleImageContainerCard
          title={'P.O.L'}
          data={'NY'}
          image={R.image.Tally()}
        />
        <TitleImageContainerCard
          title={'Name'}
          data={'Carrier Company'}
          image={R.image.User()}
        />
        <TitleImageContainerCard
          title={'City'}
          data={'NY'}
          image={R.image.City()}
        />
        <TitleImageContainerCard
          title={'State'}
          data={'None'}
          image={R.image.Building()}
        />
        <TitleImageContainerCard
          title={'Zip'}
          data={'154798'}
          image={R.image.Notes()}
        />
        <TitleImageContainerCard
          title={'Phone Number'}
          data={'123456798'}
          image={R.image.PhoneWhite()}
        />
        <TitleImageContainerCard
          title={'Email'}
          data={'admin@gmail.com'}
          image={R.image.User()}
        />
        <TitleImageContainerCard
          title={'Insurance'}
          data={'PDF'}
          image={R.image.Dollar()}
        />
        <TitleImageContainerCard
          title={'Dot License'}
          data={'PDF'}
          image={R.image.Dollar()}
        />
        <TitleImageContainerCard
          title={'Company Registration Doc'}
          data={'PDF'}
          image={R.image.Dollar()}
        />
      </TouchableOpacity>
    </>
  );
};
export default React.memo(CarrierCard);

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
