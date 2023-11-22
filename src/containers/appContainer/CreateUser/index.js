import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import TextInput from '@components/common/TextInput';
import ActionButton from '@components/common/ActionButton';

const CreateUser = ({navigation, ...props}) => {
  return (
    <ScreenBoiler
      onPressNotification={() => {
        navigation.navigate('Notification');
      }}>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.065)}
        font={'RajdhaniBold'}
        gutterTop={10}
        gutterLeft={15}>
        Create User
      </Text>
      <View style={styles.mainCont}>
        <TextInput placeholderText={'Name'} />
        <TextInput placeholderText={'Email'} />
        <TextInput placeholderText={'Phone'} keyboardType={'numeric'} />
        <TextInput placeholderText={'Cell Number'} />
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
    </ScreenBoiler>
  );
};

export default CreateUser;

const styles = StyleSheet.create({
  mainCont: {
    alignItems: 'center',
  },
});
