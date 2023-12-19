import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';

const ListEmptyContainer = ({navigation, ...props}) => {
  return (
    <View style={styles.listEmptyCont}>
      <Text style={styles.text}>No Data Found!</Text>
    </View>
  );
};

export default ListEmptyContainer;

const styles = StyleSheet.create({
  listEmptyCont: {
    alignItems: 'center',
    paddingVertical: R.unit.height(0.05),
  },
  text: {
    color: 'black',
    fontSize: R.unit.width(0.07),
    fontFamily: 'Rajdhani-Bold',
  },
});
