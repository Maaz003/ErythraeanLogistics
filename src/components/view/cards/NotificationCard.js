import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import ActionButton from '@components/common/ActionButton';
import TitleImageContainerCard from './TitleImageContainerCard';

const NotificationCard = ({
  item,
  onPress,
  onPressAgree,
  onPressDisagree,
  onPressActionSheet,
  ...props
}) => {
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
              {item?.order_id}
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
          title={'Year'}
          data={item?.year}
          image={R.image.CalendarWhite()}
        />
        <TitleImageContainerCard
          title={'Make'}
          data={item?.make}
          image={R.image.CalendarStar()}
        />
        <TitleImageContainerCard
          title={'Model'}
          data={item?.model}
          image={R.image.CalendarWhite()}
        />
        <TitleImageContainerCard
          title={'Auction Location'}
          data={item?.auction}
          image={R.image.LocationDot()}
        />
        <TitleImageContainerCard
          title={'P.O.L'}
          data={item?.destination_port}
          image={R.image.Building()}
        />
        <TitleImageContainerCard
          title={'VIN'}
          data={item?.vin_number}
          image={R.image.Tally()}
        />
        <TitleImageContainerCard
          title={'New Dispatch Charge'}
          data={item?.dispatch_cost == null ? 'None' : item?.dispatch_cost}
          image={R.image.List()}
        />

        <View style={[styles.flexCont, {marginTop: R.unit.height(0.02)}]}>
          <ActionButton
            title={'Agree'}
            bgColor={'black'}
            width={0.42}
            borderWidth={2}
            onPress={onPressAgree}
          />
          <ActionButton
            title={'Disagree'}
            bgColor={'white'}
            width={0.42}
            borderWidth={2}
            textColor={'black'}
            onPress={onPressDisagree}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};
export default React.memo(NotificationCard);

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
