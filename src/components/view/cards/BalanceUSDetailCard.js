import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';

const BalanceUSDetailCard = ({item, onPress, ...props}) => {
  const BalanceDetailContainerCard = ({title, data, image}) => {
    return (
      <View style={styles.mainCont}>
        <View style={styles.imgStyleMainCont}>
          <View style={styles.imgStyleCont}>
            <Image source={image} style={R.styles.img} />
          </View>
        </View>
        <View style={{marginTop: R.unit.height(0.005)}}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.047)}
            font={'RajdhaniSemiBold'}
            width={R.unit.width(0.4)}>
            {title}
          </Text>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.04)}
            font={'RajdhaniMedium'}
            width={R.unit.width(0.4)}>
            {data}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.flexCont}>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          fontSize={R.unit.width(0.065)}
          font={'RajdhaniBold'}>
          Balance US Detail
        </Text>
        <View style={styles.idCont}>
          <Text
            color={'white'}
            fontSize={R.unit.width(0.035)}
            font={'RajdhaniSemiBold'}>
            000066
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Booking Number'}
          data={'8RKNBASD545355486'}
          image={R.image.CirclePlus()}
        />
        <BalanceDetailContainerCard
          title={'Lines'}
          data={'Y'}
          image={R.image.Tally()}
        />
      </View>
      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Port'}
          data={'Y'}
          image={R.image.Warehouse()}
        />
        <BalanceDetailContainerCard
          title={'Size'}
          data={'45 feet / 5 auto'}
          image={R.image.Gear()}
        />
      </View>
      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Dock Receipt'}
          data={'PDF'}
          image={R.image.Dollar()}
        />
        <BalanceDetailContainerCard
          title={'BI Copy'}
          data={'None'}
          image={R.image.Key()}
        />
      </View>
      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Telex Release'}
          data={'None'}
          image={R.image.City()}
        />
        <BalanceDetailContainerCard
          title={'Invoice from auction'}
          data={'PDF'}
          image={R.image.List()}
        />
      </View>
      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Expected Arrival Date'}
          data={'None'}
          image={R.image.CalendarWhite()}
        />
        <BalanceDetailContainerCard
          title={'Date of Release'}
          data={'None'}
          image={R.image.CalendarStar()}
        />
      </View>
      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Date of Loading'}
          data={'07-11-2023'}
          image={R.image.CalendarWhite()}
        />
        <BalanceDetailContainerCard
          title={'Container Arrival Date'}
          data={'07-11-2023'}
          image={R.image.CalendarStar()}
        />
      </View>
      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Unloading Date'}
          data={'None'}
          image={R.image.CalendarWhite()}
        />
        <BalanceDetailContainerCard
          title={'Invoice'}
          data={'PDF'}
          image={R.image.Dollar()}
        />
      </View>
      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Invoice Amount'}
          data={'PDF'}
          image={R.image.Dollar()}
        />
        <BalanceDetailContainerCard
          title={'Paid Ammount'}
          data={'None'}
          image={R.image.Dollar()}
        />
      </View>
      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Validations'}
          data={'None'}
          image={R.image.InputText()}
        />
        <BalanceDetailContainerCard
          title={'Delivery Order'}
          data={'None'}
          image={R.image.CalendarStar()}
        />
      </View>
    </>
  );
};
export default React.memo(BalanceUSDetailCard);

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    marginTop: R.unit.height(0.02),
    width: R.unit.width(0.95),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  //comp
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
  mainCont: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    width: R.unit.width(0.48),
    // alignSelf: 'center',
  },

  flexCont: {
    width: R.unit.width(0.95),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: R.unit.height(0.03),
    justifyContent: 'space-between',
  },
  idCont: {
    backgroundColor: 'black',
    borderRadius: R.unit.width(1) / 2,
    paddingHorizontal: R.unit.width(0.03),
    paddingVertical: R.unit.width(0.015),
  },
  line: {
    width: R.unit.width(0.95),
    height: R.unit.height(0.015),
    borderRadius: 20,
    alignSelf: 'center',
  },
});
