import React from 'react';
import {View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import R from '@components/utils/R';

function AuthFormScrollContainer(props) {
  const {
    contentContainerStyles,
    containerStyles,
    children,
    keyboardShouldPersistTaps = 'always',
    paddingBottom = 0,
  } = props;

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      style={[R.styles.container, styles.mainLayout, containerStyles]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      contentContainerStyle={[
        styles.contentContainer,
        contentContainerStyles,
        {paddingBottom: R.unit.scale(paddingBottom)},
      ]}>
      {children}
    </KeyboardAwareScrollView>
  );
}
export default AuthFormScrollContainer;

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
    // flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    // justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  header: {
    paddingTop: R.unit.scale(20),
    paddingHorizontal: R.unit.scale(20),
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9999,
  },
  iconView: {
    backgroundColor: 'white',
    borderRadius: R.unit.scale(8),
    padding: R.unit.scale(8),
    backgroundColor: '#e37100',
  },
});
