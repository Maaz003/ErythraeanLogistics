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
import ActionButton from '@components/common/ActionButton';

const {width, height} = Dimensions.get('window');

const NotificationCard = ({
  item,
  onPress,
  onPressAgree,
  onPressDisagree,
  ...props
}) => {
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
              0000666
            </Text>
          </View>
          <TouchableOpacity style={styles.circleCont}>
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
          </TouchableOpacity>
        </View>

        <FlexCont title={'Year'} data={'2023'} image={Images.ContainerList} />
        <FlexCont title={'Make'} data={'Test'} image={Images.Order} />
        <FlexCont title={'Model'} data={'Test'} image={Images.Home} />
        <FlexCont
          title={'Auction Location'}
          data={'Copart'}
          image={Images.Settings}
        />
        <FlexCont title={'P.O.L'} data={'TX'} image={Images.Settings} />
        <FlexCont
          title={'VIN'}
          data={'8RKNBASD545355486'}
          image={Images.TowFreight}
        />
        <FlexCont
          title={'New Dispatch Charge'}
          data={'Salalah-Oman'}
          image={Images.ContainerList}
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
export default NotificationCard;

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
