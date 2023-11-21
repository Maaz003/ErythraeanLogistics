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

const HorizontalCard = ({item, onPress, ...props}) => {
  const FlexCont = ({title, data, image}) => {
    return (
      <View style={styles.flexCont}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.imgStyleMainCont}>
            <View style={styles.imgStyleCont}>
              <Image source={image} style={R.styles.img} />
            </View>
          </View>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.045)}
            font={'RajdhaniMedium'}>
            {title}
          </Text>
        </View>
        <Text
          color={'black'}
          fontSize={R.unit.width(0.045)}
          font={'RajdhaniMedium'}>
          {data}
        </Text>
      </View>
    );
  };

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

        <FlexCont
          title={'Year'}
          data={item.Year}
          image={Images.ContainerList}
        />
        <FlexCont title={'Make'} data={item.Make} image={Images.Order} />
        <FlexCont title={'Model'} data={item.Model} image={Images.Home} />
        <FlexCont title={'LOT'} data={item.LOT} image={Images.Settings} />
        <FlexCont title={'VIN'} data={item.VIN} image={Images.TowFreight} />
        <FlexCont
          title={'Destination Port'}
          data={item.Destination_Port}
          image={Images.ContainerList}
        />
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
