import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import {Images} from '@assets/Images';
//size, lines, dock receipt, bicopy, telex release, invoice from the auction,Expected Arrival Date,Date of Release,Date of Loading,Container Arrival Date,Invoice Amount,Paid Amount,Validations,Note for Yourself,Delivery Order
const ContainerDetailCard = ({item, onPress, ...props}) => {
  const ContainerDetailContainerCard = ({title, data, image}) => {
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
          Container Detail
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
        <ContainerDetailContainerCard
          title={'Booking Number'}
          data={'8RKNBASD545355486'}
          image={R.image.CirclePlus()}
        />
        <ContainerDetailContainerCard
          title={'Lines'}
          data={'Y'}
          image={R.image.Tally()}
        />
      </View>
      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Port'}
          data={'Y'}
          image={R.image.Warehouse()}
        />
        <ContainerDetailContainerCard
          title={'Size'}
          data={'45 feet / 5 auto'}
          image={R.image.Gear()}
        />
      </View>
      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Dock Receipt'}
          data={'PDF'}
          image={R.image.Dollar()}
        />
        <ContainerDetailContainerCard
          title={'BI Copy'}
          data={'None'}
          image={R.image.Key()}
        />
      </View>
      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Telex Release'}
          data={'None'}
          image={R.image.City()}
        />
        <ContainerDetailContainerCard
          title={'Invoice from auction'}
          data={'PDF'}
          image={R.image.List()}
        />
      </View>
      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Expected Arrival Date'}
          data={'None'}
          image={R.image.CalendarWhite()}
        />
        <ContainerDetailContainerCard
          title={'Date of Release'}
          data={'None'}
          image={R.image.CalendarStar()}
        />
      </View>
      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Date of Loading'}
          data={'07-11-2023'}
          image={R.image.CalendarWhite()}
        />
        <ContainerDetailContainerCard
          title={'Container Arrival Date'}
          data={'07-11-2023'}
          image={R.image.CalendarStar()}
        />
      </View>
      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Unloading Date'}
          data={'None'}
          image={R.image.CalendarWhite()}
        />
        <ContainerDetailContainerCard
          title={'Invoice'}
          data={'PDF'}
          image={R.image.Dollar()}
        />
      </View>
      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Invoice Amount'}
          data={'PDF'}
          image={R.image.Dollar()}
        />
        <ContainerDetailContainerCard
          title={'Paid Ammount'}
          data={'None'}
          image={R.image.Dollar()}
        />
      </View>
      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Validations'}
          data={'None'}
          image={R.image.InputText()}
        />
        <ContainerDetailContainerCard
          title={'Delivery Order'}
          data={'None'}
          image={R.image.CalendarStar()}
        />
      </View>
    </>
  );
};
export default ContainerDetailCard;

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
