import React from 'react';
import {StyleSheet, View} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import ActionButton from '@components/common/ActionButton';
// import Statistics from '@components/view/cards/Statistics';
// import WearHouseDetailCard from '@components/view/cards/WearHouseDetailCard';
// import HorizontalCard from '@components/view/cards/HorizontalCard';

const Settings = props => {
  return (
    <ScreenBoiler>
      <View style={styles.mainCont}>
        <ActionButton
          title={'Accounting'}
          bgColor={'#262626'}
          marginTop={0.04}
          isImage={true}
          image={R.image.Calculator()}
        />
        <ActionButton
          title={'Sub Bidder'}
          bgColor={'#262626'}
          marginTop={0.04}
          isImage={true}
          image={R.image.User()}
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
