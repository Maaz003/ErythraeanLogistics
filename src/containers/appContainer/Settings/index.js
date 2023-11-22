import React from 'react';
import {StyleSheet, View} from 'react-native';

import R from '@components/utils/R';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import ActionButton from '@components/common/ActionButton';

const Settings = ({navigation, ...props}) => {
  return (
    <ScreenBoiler
      onPressNotification={() => {
        navigation.navigate('Notification');
      }}
      onPressProfile={() => {
        navigation.navigate('AccountSetting');
      }}>
      <View style={styles.mainCont}>
        <ActionButton
          title={'Accounting'}
          bgColor={'#262626'}
          marginTop={0.04}
          isImage={true}
          image={R.image.Calculator()}
          onPress={() => {
            navigation.navigate('AccountSetting');
          }}
        />
        <ActionButton
          title={'Sub Bidder'}
          bgColor={'#262626'}
          marginTop={0.04}
          isImage={true}
          image={R.image.User()}
          onPress={() => {
            navigation.navigate('SubBidderList');
          }}
        />
      </View>
    </ScreenBoiler>
  );
};

export default Settings;

const styles = StyleSheet.create({
  mainCont: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
});
