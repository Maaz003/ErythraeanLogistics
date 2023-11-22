import React from 'react';
import {StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import R from '@components/utils/R';

function FormScrollContainer(props) {
  const {
    contentContainerStyles,
    containerStyles,
    children,
    keyboardShouldPersistTaps = 'always',
    paddingBottom = 0,
    extraScrollHeight = 0,
  } = props;

  return (
    <KeyboardAwareScrollView
      style={[R.styles.container, styles.mainLayout, containerStyles]}
      showsVerticalScrollIndicator={false}
      extraScrollHeight={extraScrollHeight}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      contentContainerStyle={[
        styles.contentContainer,
        contentContainerStyles,
        {paddingBottom: R.unit.height(paddingBottom)},
      ]}>
      {children}
    </KeyboardAwareScrollView>
  );
}
export default FormScrollContainer;
// adjustPan
const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});
