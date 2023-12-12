import React from 'react';
import {StyleSheet, View} from 'react-native';

import R from '@components/utils/R';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import ActionButton from '@components/common/ActionButton';
import PopUp from '@components/common/PopUp';

const AccountingDetail = ({navigation, ...props}) => {
  return (
    <ScreenBoiler isBack={true}>
      <View style={styles.mainCont}>
        <ActionButton
          title={'Balance US'}
          bgColor={'#262626'}
          marginTop={0.04}
          isImage={true}
          image={R.image.Balance()}
          onPress={() => {
            navigation.navigate('BalanceUS');
          }}
        />
        <ActionButton
          title={'Payments'}
          bgColor={'#262626'}
          marginTop={0.04}
          isImage={true}
          image={R.image.Payment()}
          onPress={() => {
            PopUp({
              heading: 'Coming Soon',
              type: 'success',
            });
          }}
        />
        <ActionButton
          title={'Invoice'}
          bgColor={'#262626'}
          marginTop={0.04}
          isImage={true}
          image={R.image.Invoice()}
          onPress={() => {
            PopUp({
              heading: 'Coming Soon',
              type: 'success',
            });
          }}
        />
      </View>
    </ScreenBoiler>
  );
};

export default AccountingDetail;

const styles = StyleSheet.create({
  mainCont: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
});
