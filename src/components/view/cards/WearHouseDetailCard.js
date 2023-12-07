import React from 'react';
import {View, StyleSheet} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';

function WearHouseDetailCard({isEven, item, ...props}) {
  const OrderStatisticsCard = ({item, number}) => {
    return (
      <View style={styles.flexCont}>
        <Text
          color={isEven ? 'white' : 'black'}
          fontSize={R.unit.width(0.05)}
          font={'RajdhaniMedium'}
          gutterTop={10}>
          {item}
        </Text>
        <Text
          color={isEven ? 'white' : 'black'}
          fontSize={R.unit.width(0.05)}
          font={'RajdhaniMedium'}
          gutterTop={10}>
          {number}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={[styles.mainCont, {backgroundColor: isEven ? 'black' : 'white'}]}>
      <Text
        color={isEven ? 'white' : 'black'}
        fontSize={R.unit.width(0.06)}
        font={'RajdhaniMedium'}
        gutterBottom={10}
        alignSelf={'flex-start'}
        gutterLeft={15}>
        {item['P.O.L']}
      </Text>
      <View
        style={[styles.line, {backgroundColor: isEven ? 'white' : 'black'}]}
      />
      <OrderStatisticsCard item={'Pending'} number={item?.pending} />
      <OrderStatisticsCard item={'Dispatch'} number={item?.dispatched} />
      <OrderStatisticsCard item={'At The Terminal'} number={item?.terminal} />
      <OrderStatisticsCard item={'Loaded'} number={item?.loaded} />
    </View>
  );
}
export default React.memo(WearHouseDetailCard);

const styles = StyleSheet.create({
  mainCont: {
    width: R.unit.width(0.55),
    // height: R.unit.height(0.3),
    backgroundColor: '#262626',
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: R.unit.height(0.03),
    marginHorizontal: R.unit.width(0.02),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  line: {
    width: '90%',
    height: R.unit.height(0.003),
    backgroundColor: 'white',
  },
  flexCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: R.unit.width(0.5),
  },
});
