import React from 'react';
import {StyleSheet, View} from 'react-native';

import R from '@components/utils/R';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import ActionButton from '@components/common/ActionButton';

//redux
import {useDispatch} from 'react-redux';
import {userLogout} from '@store/user/userSlice';
import {serviceApi} from '../../../store/services/index';

const Settings = ({navigation, ...props}) => {
  const dispatch = useDispatch();

  const _handleLogout = () => {
    dispatch(userLogout());
    dispatch(serviceApi.util.resetApiState());
    navigation.reset({
      index: 0,
      routes: [{name: 'SplashScreen'}],
    });
  };

  return (
    <ScreenBoiler>
      <View style={styles.mainCont}>
        <ActionButton
          title={'Accounting'}
          bgColor={'#262626'}
          marginTop={0.04}
          isImage={true}
          image={R.image.Calculator()}
          onPress={() => {
            navigation.navigate('AccountingDetail');
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
        <ActionButton
          title={'Logout'}
          bgColor={'#262626'}
          marginTop={0.04}
          isImage={true}
          image={R.image.Logout()}
          onPress={() => _handleLogout()}
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
