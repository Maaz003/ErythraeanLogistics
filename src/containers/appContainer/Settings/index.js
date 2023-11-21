import React from 'react';
import {StyleSheet, View} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import ActionButton from '@components/common/ActionButton';
// import Statistics from '@components/view/cards/Statistics';
// import WearHouseDetailCard from '@components/view/cards/WearHouseDetailCard';
// import HorizontalCard from '@components/view/cards/HorizontalCard';

const Settings = ({navigation, ...props}) => {
  return (
    <ScreenBoiler
      onPressNotification={() => {
        navigation.navigate('Notification');
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
