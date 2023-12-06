import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import TextInput from '@components/common/TextInput';
import ActionButton from '@components/common/ActionButton';
import FormScrollContainer from '@components/layout/FormScrollContainer';
import Loader from '@components/common/Loader';
import PopUp from '@components/common/PopUp';

//! RTK QUERY API
import {useCreateSubBidderMutation} from '../../../store/services/index';

const CreateUser = ({navigation, ...props}) => {
  const [isLoader, setIsLoader] = useState(false);
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    cell: '',
    password: '',
    password_confirmation: '',
    role: '980ce138-9f13-43bd-ab37-f7082073d938',
  });

  const onChangeText = (text, key) => {
    setState(prevState => ({
      ...prevState,
      [key]: text,
    }));
  };

  // api
  const [createSubBidder] = useCreateSubBidderMutation();

  const handleSubBidder = () => {
    setIsLoader(true);
    const formData = new FormData();
    formData.append('name', state.name);
    formData.append('email', state.email);
    formData.append('phone', state.phone);
    formData.append('cell', state.cell);
    formData.append('password', state.password);
    formData.append('password_confirmation', state.password_confirmation);
    formData.append('role', state.role);

    createSubBidder(formData)
      .unwrap()
      .then(result => {
        console.log('createSubBidder successful:', result);
        setIsLoader(false);
        PopUp({
          heading: result?.message,
          type: 'success',
        });
        navigation.goBack();
      })
      .catch(error => {
        console.error('createSubBidder failed:', error);
        PopUp({
          heading: error?.data?.message,
          type: 'danger',
        });
        setIsLoader(false);
      });
  };
  return (
    <>
      <ScreenBoiler isBack={true}>
        <FormScrollContainer>
          <View>
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
                placeholderText={'Phone'}
                keyboardType={'numeric'}
                value={state.phone}
                handleOnChangeTxt={text => onChangeText(text, 'phone')}
              />
              <TextInput
                placeholderText={'Cell Number'}
                value={state.cell}
                handleOnChangeTxt={text => onChangeText(text, 'cell')}
              />

              <TextInput
                placeholderText={'Password'}
                isPasswordInput={true}
                Icon={R.image.Password()}
                value={state.password}
                handleOnChangeTxt={text => onChangeText(text, 'password')}
              />
              <TextInput
                placeholderText={'Confirm Password'}
                isPasswordInput={true}
                Icon={R.image.Password()}
                value={state.password_confirmation}
                handleOnChangeTxt={text =>
                  onChangeText(text, 'password_confirmation')
                }
              />

              <ActionButton
                title={'Save'}
                bgColor={'#262626'}
                marginTop={0.04}
                onPress={() => handleSubBidder()}
              />
            </View>
          </View>
        </FormScrollContainer>
      </ScreenBoiler>
      {isLoader && <Loader />}
    </>
  );
};

export default CreateUser;

const styles = StyleSheet.create({
  mainCont: {
    alignItems: 'center',
  },
});
