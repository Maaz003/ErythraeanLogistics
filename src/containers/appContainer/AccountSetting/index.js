import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import TextInput from '@components/common/TextInput';
import ActionButton from '@components/common/ActionButton';
import FormScrollContainer from '@components/layout/FormScrollContainer';
import CustomImageUpload from '@components/common/CustomImageUpload';

import RNFetchBlob from 'rn-fetch-blob';

//! RTK QUERY API
import {useSelector} from 'react-redux';

const AccountSetting = ({navigation, ...props}) => {
  const user = useSelector(state => state.user.user);
  console.log('User ===>', user);

  const [state, setState] = useState({
    id: user?.id,
    name: user?.name,
    email: user?.email,
    password: '',
  });
  const [picFile, setPicFile] = useState(null);

  const onChangeText = (text, key) => {
    setState(prevState => ({
      ...prevState,
      [key]: text,
    }));
  };

  // console.log('state ==>', state);

  console.log('picture ==>', picFile);

  const handleSave = () => {
    let formData = new FormData();
    RNFetchBlob.fs
      .readFile(picFile.path, 'base64')
      .then(data => {
        let fileData = `data:${picFile.mime};base64,${data}`;
        let fileName = picFile.path.split('/').pop(); // Extracting filename

        // Create FormData

        formData.append('pic_file', {
          uri: fileData,
          type: picFile.mime,
          name: fileName,
        });
      })
      .catch(error => {
        console.log('Error converting image to file:', error);
      });

    formData.append('id', state.id);
    formData.append('name', state.name);
    formData.append('email', state.email);
    formData.append('password', state.password);
    console.log('formData ==>', formData);
  };

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
          <CustomImageUpload picture={picFile} setPicture={setPicFile} />

          <TextInput
            placeholderText={'Name'}
            value={state.name}
            handleOnChangeTxt={text => onChangeText(text, 'name')}
          />
          <TextInput
            placeholderText={'Email'}
            value={state.email}
            handleOnChangeTxt={text => onChangeText(text, 'email')}
          />
          <TextInput
            placeholderText={'Password'}
            isPasswordInput={true}
            Icon={R.image.Password()}
            value={state.password}
            handleOnChangeTxt={text => onChangeText(text, 'password')}
          />

          <ActionButton
            title={'Save'}
            bgColor={'#262626'}
            marginTop={0.04}
            onPress={() => handleSave()}
          />
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
  imgStyleCont: {
    width: R.unit.width(0.3),
    height: R.unit.width(0.3),
    borderRadius: R.unit.width(1),
    backgroundColor: R.color.black,
    alignSelf: 'center',
    overflow: 'hidden',
    marginVertical: R.unit.height(0.02),
  },
});
