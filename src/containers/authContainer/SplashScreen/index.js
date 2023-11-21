import React, {useEffect} from 'react';
import {StyleSheet, Image, View, ImageBackground} from 'react-native';

import R from '@components/utils/R';
import AuthBoiler from '@components/layout/AuthBoiler/index.';
import AuthFormScrollContainer from '@components/layout/AuthFormScrollContainer';

function SplashScreen({navigation, ...props}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 3000);
  }, []);

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
    width: R.unit.width(0.8),
    height: R.unit.height(0.15),
    marginTop: R.unit.height(0.06),
  },
});
