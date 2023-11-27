import React from 'react';
import {StyleSheet, View} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import TextInput from '@components/common/TextInput';
import ActionButton from '@components/common/ActionButton';
import FormScrollContainer from '@components/layout/FormScrollContainer';

const AccountSetting = ({navigation, ...props}) => {
  return (
    <ScreenBoiler isBack={true}>
      <FormScrollContainer>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          fontSize={R.unit.width(0.065)}
          font={'RajdhaniBold'}
          gutterTop={10}
          gutterLeft={15}>
          Account Settings
        </Text>
        <View style={styles.mainCont}>
          <TextInput placeholderText={'Name'} />
          <TextInput placeholderText={'Email'} />
          <TextInput
            placeholderText={'Password'}
            isPasswordInput={true}
            Icon={R.image.Password()}
          />
          <TextInput
            placeholderText={'Confirm Password'}
            isPasswordInput={true}
            Icon={R.image.Password()}
          />
          <ActionButton title={'Save'} bgColor={'#262626'} marginTop={0.04} />
        </View>
      </FormScrollContainer>
    </ScreenBoiler>
  );
};

export default AccountSetting;

const styles = StyleSheet.create({
  mainCont: {
    alignItems: 'center',
  },
});
