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

function SignUpScreen({navigation, ...props}) {
  // const dispatch = useDispatch();
  const [state, setState] = useState(false);

  return (
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
          {!state ? (
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

              <TextInput placeholderText={'User Name'} Icon={R.image.Name()} />
              <TextInput placeholderText={'First Name'} Icon={R.image.Name()} />
              <TextInput
                placeholderText={'Middle Name'}
                Icon={R.image.Name()}
              />
              <TextInput placeholderText={'Last Name'} Icon={R.image.Name()} />
              <TextInput
                placeholderText={'Email'}
                Icon={R.image.Email()}
                keyboardType={'email-address'}
              />
              <TextInput
                placeholderText={'Phone'}
                Icon={R.image.Phone()}
                keyboardType={'numeric'}
              />
              <TextInput
                placeholderText={'Password'}
                Icon={R.image.Password()}
                isPasswordInput={true}
              />
              <TextInput placeholderText={'Company'} Icon={R.image.Company()} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.imageUploadCont}>
                <View style={styles.uploadCont}>
                  <View style={styles.photoImgCont}>
                    <Image
                      source={R.image.PhotoTemplet()}
                      style={R.styles.img}
                      resizeMode={'contain'}
                    />
                  </View>
                  <Text
                    color={'#5A5A5A'}
                    fontSize={R.unit.width(0.044)}
                    font={'RajdhaniMedium'}
                    gutterTop={5}>
                    Upload
                  </Text>
                </View>
                <View style={styles.arrowImgCont}>
                  <Image
                    source={R.image.UpArrow()}
                    style={R.styles.img}
                    resizeMode={'contain'}
                  />
                </View>
              </TouchableOpacity>
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
                  setState(true);
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
          ) : (
            <View
              style={[
                styles.mainContainer,
                {
                  paddingVertical: R.unit.height(0.15),
                  paddingHorizontal: R.unit.width(0.05),
                },
              ]}>
              <View style={styles.tickImgCont}>
                <Image
                  source={R.image.Tick()}
                  style={R.styles.img}
                  resizeMode={'contain'}
                />
              </View>
              <Text
                color={'black'}
                fontSize={R.unit.width(0.11)}
                font={'RajdhaniBold'}>
                Your Sign Up
              </Text>
              <Text
                color={'black'}
                fontSize={R.unit.width(0.075)}
                font={'RajdhaniRegular'}
                align={'center'}>
                Request Has Been Submitted To The Admin
              </Text>
            </View>
          )}
        </ImageBackground>
      </AuthFormScrollContainer>
    </AuthBoiler>
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
  uploadCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageUploadCont: {
    width: R.unit.width(0.85),
    paddingVertical: R.unit.height(0.015),
    borderColor: '#D9D9D9',
    borderWidth: 0.7,
    borderRadius: R.unit.width(0.02),
    marginTop: R.unit.height(0.027),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: R.unit.width(0.04),
  },
  photoImgCont: {
    width: R.unit.width(0.07),
    height: R.unit.width(0.07),
    marginRight: R.unit.width(0.03),
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
