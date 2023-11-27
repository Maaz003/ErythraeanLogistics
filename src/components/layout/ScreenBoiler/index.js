import R from '@components/utils/R';
import React, {useCallback} from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {useColorMode} from 'native-base';
import Header from '@components/common/Header';
import navigationRef from '@navRef';

export default function ScreenBoiler(props) {
  const {children, isBack = false} = props;

  const theme = useColorMode();
  const colorMode = theme?.colorMode;

  const onPressNotification = useCallback(() => {
    navigationRef.navigate('Notification');
  }, []);

  const onPressProfile = useCallback(() => {
    navigationRef.navigate('AccountSetting');
  }, []);

  const onPressBack = useCallback(() => {
    navigationRef.goBack();
  }, []);

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
      <Header
        onPressNotification={onPressNotification}
        onPressProfile={onPressProfile}
        isBack={isBack}
        onPressBack={onPressBack}
      />
      {children}
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
