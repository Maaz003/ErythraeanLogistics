import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import {Images} from '@assets/Images';

const {width, height} = Dimensions.get('window');

const ContainerListCard = ({item, onPress, ...props}) => {
  const FlexCont = ({title, data, image}) => {
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
          Vehicle Detail
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
        <FlexCont
          title={'Description'}
          data={'2023 test test'}
          image={Images.ContainerList}
        />
        <FlexCont title={'Color'} data={'Test'} image={Images.ContainerList} />
      </View>
      <View style={styles.container}>
        <FlexCont
          title={'VIN Number'}
          data={'8RKNBASD545355486'}
          image={Images.ContainerList}
        />
        <FlexCont title={'Keys'} data={'Y'} image={Images.ContainerList} />
      </View>
      <View style={styles.container}>
        <FlexCont
          title={'Auction'}
          data={'Developer'}
          image={Images.ContainerList}
        />
        <FlexCont title={'LOT'} data={'236589'} image={Images.ContainerList} />
      </View>
      <View style={styles.container}>
        <FlexCont
          title={'Delivered To Warehouse'}
          data={'None'}
          image={Images.ContainerList}
        />
        <FlexCont title={'Notes'} data={'None'} image={Images.ContainerList} />
      </View>
      <View style={styles.container}>
        <FlexCont
          title={'Buyer'}
          data={'Developer Customer'}
          image={Images.ContainerList}
        />
        <FlexCont
          title={'Buyer Number'}
          data={'None'}
          image={Images.ContainerList}
        />
      </View>
      <View style={styles.container}>
        <FlexCont title={'Date'} data={'None'} image={Images.ContainerList} />
        <FlexCont
          title={'Promised to be picked up'}
          data={'None'}
          image={Images.ContainerList}
        />
      </View>
      <View style={styles.container}>
        <FlexCont
          title={'Promised to be delivered'}
          data={'None'}
          image={Images.ContainerList}
        />
        <FlexCont title={'Title'} data={'Yes'} image={Images.ContainerList} />
      </View>
      <View style={styles.container}>
        <FlexCont
          title={'Date Received'}
          data={'07-11-2023'}
          image={Images.ContainerList}
        />
        <FlexCont
          title={'Order Status'}
          data={'Approved'}
          image={Images.ContainerList}
        />
      </View>
      <View style={styles.container}>
        <FlexCont
          title={'Terminal Status'}
          data={'Waiting'}
          image={Images.ContainerList}
        />
        <FlexCont title={'P.O.L'} data={'TX'} image={Images.ContainerList} />
      </View>
      <View style={styles.container}>
        <FlexCont title={'Invoice'} data={'PDF'} image={Images.ContainerList} />
        <FlexCont
          title={'Approved By'}
          data={'Name Here'}
          image={Images.ContainerList}
        />
      </View>
      <View style={styles.container}>
        <FlexCont
          title={'Created By'}
          data={'Name Here'}
          image={Images.ContainerList}
        />
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.065)}
        font={'RajdhaniBold'}
        gutterLeft={10}
        gutterTop={10}
        gutterBottom={5}>
        Container Detail
      </Text>
      <View style={styles.container}>
        <FlexCont
          title={'Point Of Loading'}
          data={'2023 test test'}
          image={Images.ContainerList}
        />
        <FlexCont
          title={'Container Number'}
          data={'Test'}
          image={Images.ContainerList}
        />
      </View>
      <View style={styles.container}>
        <FlexCont
          title={'Booking Number'}
          data={'8RKNBASD545355486'}
          image={Images.ContainerList}
        />
        <FlexCont
          title={'Destination Port'}
          data={'Y'}
          image={Images.ContainerList}
        />
      </View>
      <View style={styles.container}>
        <FlexCont
          title={'Loading Date'}
          data={'Copart'}
          image={Images.ContainerList}
        />
        <FlexCont
          title={'Expected Arrival Date'}
          data={'Developer'}
          image={Images.ContainerList}
        />
      </View>
      <View style={styles.container}>
        <FlexCont
          title={'Arrival Date'}
          data={'236589'}
          image={Images.ContainerList}
        />
        <FlexCont
          title={'Unloading Date'}
          data={'None'}
          image={Images.ContainerList}
        />
      </View>
      <View style={styles.container}>
        <FlexCont
          title={'Calendar'}
          data={'Nov-1602023'}
          image={Images.ContainerList}
        />
        <FlexCont
          title={'Storage'}
          data={'On client: $0 | On Shipping: $0'}
          image={Images.ContainerList}
        />
      </View>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.065)}
        font={'RajdhaniBold'}
        gutterLeft={10}
        gutterTop={10}
        gutterBottom={5}>
        Current Status
      </Text>
      <View style={[styles.line, {backgroundColor: '#929294'}]} />
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.048)}
        font={'RajdhaniMedium'}
        gutterLeft={10}
        gutterTop={10}
        gutterBottom={5}>
        Car purchased from auction
      </Text>
      <View style={[styles.line, {backgroundColor: '#008800'}]} />
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.048)}
        font={'RajdhaniMedium'}
        gutterLeft={10}
        gutterTop={10}
        gutterBottom={5}>
        Car Was Paid At The Auction
      </Text>
    </>
  );
};
export default ContainerListCard;

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
