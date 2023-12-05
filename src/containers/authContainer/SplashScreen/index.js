import React, {useEffect} from 'react';
import {StyleSheet, Image, View, ImageBackground} from 'react-native';

import R from '@components/utils/R';
import AuthBoiler from '@components/layout/AuthBoiler/index.';
import AuthFormScrollContainer from '@components/layout/AuthFormScrollContainer';
import {useSelector} from 'react-redux';

function SplashScreen({navigation, ...props}) {
  const isLogin = useSelector(state => state.user.isLogin);

  useEffect(() => {
    setTimeout(() => {
      if (isLogin) {
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomNavigator'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'LoginScreen'}],
        });
      }
    }, 2000);
  }, []);

  return (
    <AuthBoiler>
      <AuthFormScrollContainer showAuthHeader={true}>
        <ImageBackground
          source={R.image.AuthBackground()}
          style={styles.ImageBackgroundStyle}>
          <View style={styles.appImageContainer}>
            <Image
              source={R.image.AppIconWhite()}
              style={R.styles.img}
              resizeMode={'contain'}
            />
          </View>
        </ImageBackground>
      </AuthFormScrollContainer>
    </AuthBoiler>
  );
}
export default SplashScreen;

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },

  ImageBackgroundStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appImageContainer: {
    width: R.unit.width(0.4),
    height: R.unit.width(0.4),
  },
});
