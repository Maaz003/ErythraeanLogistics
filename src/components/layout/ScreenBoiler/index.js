import R from '@components/utils/R';
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useColorMode} from 'native-base';

export default function ScreenBoiler(props) {
  const {children, onPressNotification} = props;

  const theme = useColorMode();
  const colorMode = theme?.colorMode;

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        style={{flex: 0}}
        backgroundColor={R.color.white}
        barStyle={
          Platform.OS === 'ios'
            ? colorMode === 'light'
              ? 'dark-content'
              : 'light-content'
            : Platform.OS === 'android'
            ? 'dark-content'
            : 'light-content'
        }
      />
      <ScrollView
        contentContainerStyle={styles.scrollCont}
        showsVerticalScrollIndicator={false}>
        <View style={styles.contHeader}>
          <TouchableOpacity activeOpacity={0.7} style={styles.ImgStyleCont}>
            <Image
              source={R.image.AppIconWhite()}
              style={R.styles.img}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
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
            <TouchableOpacity activeOpacity={0.7} style={styles.ImgStyleCont}>
              <Image
                source={R.image.DummyImage()}
                style={R.styles.img}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </View>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: R.color.white,
  },
  contHeader: {
    width: R.unit.width(0.95),
    height: R.unit.height(0.08),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: R.unit.width(0.055),
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
});
