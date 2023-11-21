import React from 'react';
import {StyleSheet} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
// import Statistics from '@components/view/cards/Statistics';
// import WearHouseDetailCard from '@components/view/cards/WearHouseDetailCard';
// import HorizontalCard from '@components/view/cards/HorizontalCard';

const Settings = props => {
  return (
    <ScreenBoiler>
      <Text
        color={'black'}
        alignSelf={'flex-start'}
        fontSize={R.unit.width(0.065)}
        font={'RajdhaniBold'}
        gutterTop={10}
        gutterBottom={10}
        gutterLeft={10}>
        Settings
      </Text>
    </ScreenBoiler>
  );
};

export default Settings;

const styles = StyleSheet.create({});
