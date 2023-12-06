import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import R from '@components/utils/R';
import AuthBoiler from '@components/layout/AuthBoiler/index.';
import AuthFormScrollContainer from '@components/layout/AuthFormScrollContainer';
import Text from '@components/common/Text';
import TextInput from '@components/common/TextInput';
import ActionButton from '@components/common/ActionButton';
import DropDown from '@components/common/DropDown';
import {SelectCustomer} from '@components/constants/createOrderConstant';
import Loader from '@components/common/Loader';
import PopUp from '@components/common/PopUp';

//! RTK QUERY API
import {
  useGetDestinationPortQuery,
  useSignupUserMutation,
} from '../../../store/services/index';

function SignUpScreen({navigation, ...props}) {
  // const dispatch = useDispatch();
  const [isLoader, setIsLoader] = useState(false);
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    cell: '',
    password: '',
    destination_port: null,
    role: '02bd29e8-42a5-4948-a157-c02a6f6bc4f6',
  });

  const onChangeText = (text, key) => {
    setState(prevState => ({
      ...prevState,
      [key]: text,
    }));
  };

  const {data, isLoading} = useGetDestinationPortQuery();

  // api
  const [signupUser] = useSignupUserMutation();

  const handleSignUp = () => {
    setIsLoader(true);
    const formData = new FormData();
    formData.append('name', state.name);
    formData.append('email', state.email);
    formData.append('phone', state.phone);
    formData.append('cell', state.cell);
    formData.append('destination_port_id', state.destination_port);
    formData.append('password', state.password);
    formData.append('role', state.role);

    signupUser(formData)
      .unwrap()
      .then(result => {
        console.log('Sign up successful:', result);
        setIsLoader(false);
        PopUp({
          heading: result?.message,
          type: 'success',
        });
        navigation.reset({
          index: 0,
          routes: [{name: 'LoginScreen'}],
        });
      })
      .catch(error => {
        console.error('Sign up failed:', error);
        PopUp({
          heading: error?.data?.message,
          type: 'danger',
        });
        setIsLoader(false);
      });
  };

  return (
    <>
      <AuthBoiler>
        <AuthFormScrollContainer showAuthHeader={true}>
          <ImageBackground
            source={R.image.AuthBackground()}
            style={styles.ImageBackgroundStyle}>
            <View style={styles.appImageContainer}>
              <Image
                source={R.image.AppName()}
                style={R.styles.img}
                resizeMode={'contain'}
              />
            </View>

            <View style={styles.mainContainer}>
              <Text
                color={'black'}
                fontSize={R.unit.width(0.09)}
                font={'RajdhaniBold'}>
                Sign Up
              </Text>
              <Text
                color={'black'}
                fontSize={R.unit.width(0.047)}
                font={'RajdhaniSemiBold'}
                gutterTop={8}
                align={'center'}>
                Enter your detail below here & Create your new account.
              </Text>

              <TextInput
                placeholderText={'Name'}
                Icon={R.image.Name()}
                value={state.name}
                handleOnChangeTxt={text => onChangeText(text, 'name')}
              />

              <TextInput
                placeholderText={'Email'}
                Icon={R.image.Email()}
                keyboardType={'email-address'}
                value={state.email}
                handleOnChangeTxt={text => onChangeText(text, 'email')}
              />
              <TextInput
                placeholderText={'Phone'}
                Icon={R.image.Phone()}
                keyboardType={'numeric'}
                value={state.phone}
                handleOnChangeTxt={text => onChangeText(text, 'phone')}
              />
              <TextInput
                placeholderText={'Cell'}
                Icon={R.image.Phone()}
                keyboardType={'numeric'}
                value={state.cell}
                handleOnChangeTxt={text => onChangeText(text, 'cell')}
              />
              <TextInput
                placeholderText={'Password'}
                Icon={R.image.Password()}
                isPasswordInput={true}
                value={state.password}
                handleOnChangeTxt={text => onChangeText(text, 'password')}
              />
              <DropDown
                data={isLoading ? [] : data?.data}
                value={state.destination_port}
                placeholderText={'Select Destination Port'}
                onChange={item => {
                  onChangeText(item.id, 'destination_port');
                }}
                valueField={'id'}
                labelField={'name'}
                width={0.85}
              />

              <Text
                color={'#5A5A5A'}
                fontSize={R.unit.width(0.047)}
                font={'RajdhaniMedium'}
                gutterTop={10}
                alignSelf={'flex-start'}
                gutterLeft={15}>
                Passport Commercial Registration
              </Text>
              <ActionButton
                title={'Submit'}
                bgColor={'#262626'}
                marginTop={0.04}
                onPress={() => {
                  handleSignUp();
                }}
              />

              <View style={styles.flexCont}>
                <Text
                  color={'black'}
                  fontSize={R.unit.width(0.065)}
                  font={'RajdhaniBold'}>
                  Sign Up With
                </Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.socialCont}>
                  <Image
                    source={R.image.Facebook()}
                    style={R.styles.img}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.socialCont}>
                  <Image
                    source={R.image.Gmail()}
                    style={R.styles.img}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </AuthFormScrollContainer>
      </AuthBoiler>
      {isLoading && <Loader />}
      {isLoader && <Loader />}
    </>
  );
}
export default SignUpScreen;

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: R.color.primaryColor2,
    paddingHorizontal: R.unit.scale(10),
  },
  buttonView: {
    width: '100%',
    alignSelf: 'flex-end',
    marginBottom: R.unit.scale(48),
  },

  ImageBackgroundStyle: {width: '100%', height: '100%'},

  appImageContainer: {
    width: R.unit.width(0.8),
    height: R.unit.height(0.09),
    alignSelf: 'center',
    marginTop: R.unit.height(0.06),
  },

  mainContainer: {
    width: R.unit.width(0.9),
    paddingVertical: R.unit.height(0.02),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: R.unit.height(0.06),
    borderRadius: R.unit.width(0.04),
    alignItems: 'center',
  },
  contLine: {
    width: R.unit.width(0.84),
    height: R.unit.height(0.001),
    backgroundColor: 'black',
    marginVertical: R.unit.height(0.02),
  },
  socialCont: {
    width: R.unit.width(0.08),
    height: R.unit.width(0.08),
    marginLeft: R.unit.width(0.02),
  },
  flexCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: R.unit.height(0.025),
  },

  arrowImgCont: {
    width: R.unit.width(0.05),
    height: R.unit.width(0.05),
  },
  tickImgCont: {
    width: R.unit.width(0.15),
    height: R.unit.width(0.15),
    marginBottom: R.unit.height(0.03),
  },
});
