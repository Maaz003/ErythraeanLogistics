import R from '@components/utils/R';
import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';

export default function Header({
  onPressNotification,
  onPressProfile,
  onPressBack,
  isBack,
  ...props
}) {
  // const user = useSelector(state => state.user?.user);

  return (
    <View style={styles.contHeader}>
      <View style={styles.firstCont}>
        {isBack && (
          <TouchableOpacity
            onPress={onPressBack}
            activeOpacity={0.8}
            style={styles.imgBackStyleCont}>
            <Image source={R.image.LeftArrow()} style={R.styles.img} />
          </TouchableOpacity>
        )}

        <View style={styles.ImgStyleCont}>
          <Image
            source={R.image.AppIconWhite()}
            style={R.styles.img}
            resizeMode={'contain'}
          />
        </View>
      </View>
      <View style={styles.sideCont}>
        <TouchableOpacity activeOpacity={0.7} style={styles.IconStyleCont}>
          <Image
            source={R.image.Message()}
            style={R.styles.img}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.IconStyleCont}
          onPress={onPressNotification}>
          <Image
            source={R.image.Bell()}
            style={R.styles.img}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.ImgStyleProfileCont}
          onPress={onPressProfile}>
          <View style={styles.imgStyleUserCont}>
            <Image
              source={R.image.UserBlack()}
              style={R.styles.img}
              resizeMode={'contain'}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contHeader: {
    width: R.unit.width(0.95),
    height: R.unit.height(0.08),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: R.unit.width(0.02),
    backgroundColor: '#262626',
    // backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 7,
    marginTop: R.unit.height(0.03),
  },
  ImgStyleCont: {
    width: R.unit.width(0.1),
    height: R.unit.width(0.1),
  },
  IconStyleCont: {
    width: R.unit.width(0.065),
    height: R.unit.width(0.065),
  },
  firstCont: {flexDirection: 'row', alignItems: 'center'},
  sideCont: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'green',
    width: R.unit.width(0.37),
    justifyContent: 'space-between',
  },
  scrollCont: {
    paddingBottom: R.unit.height(0.15),
  },
  imgBackStyleCont: {
    width: R.unit.width(0.055),
    height: R.unit.width(0.055),
    // backgroundColor: 'red',
    marginRight: R.unit.width(0.02),
  },
  ImgStyleProfileCont: {
    width: R.unit.width(0.1),
    height: R.unit.width(0.1),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: R.unit.width(1) / 2,
    overflow: 'hidden',
  },
  imgStyleUserCont: {
    width: R.unit.width(0.07),
    height: R.unit.width(0.07),
    // backgroundColor: 'blue',
  },
});
