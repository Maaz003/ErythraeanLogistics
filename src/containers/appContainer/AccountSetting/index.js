import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import TextInput from '@components/common/TextInput';
import ActionButton from '@components/common/ActionButton';

const AccountSetting = props => {
  const [isPassword, setIsPassword] = useState(true);
  return (
    <ScreenBoiler>
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
          isPassword={isPassword}
          Icon={R.image.Password()}
          iconOnPress={() => {
            setIsPassword(!isPassword);
          }}
        />
        <TextInput
          placeholderText={'Confirm Password'}
          isPassword={isPassword}
          Icon={R.image.Password()}
          iconOnPress={() => {
            setIsPassword(!isPassword);
          }}
        />
        <ActionButton title={'Save'} bgColor={'#262626'} marginTop={0.04} />
      </View>
    </ScreenBoiler>
  );
};

export default AccountSetting;

const styles = StyleSheet.create({
  mainCont: {
    alignItems: 'center',
  },
});
