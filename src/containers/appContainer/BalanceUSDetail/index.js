import React from 'react';
import {StyleSheet} from 'react-native';

import ScreenBoiler from '@components/layout/ScreenBoiler';
import BalanceUSDetailCard from '@components/view/cards/BalanceUSDetailCard';
import ScrollContainer from '@components/layout/ScrollContainer';

const BalanceUSDetail = ({navigation, ...props}) => {
  return (
    <ScreenBoiler isBack={true}>
      <ScrollContainer paddingBottom={0.15}>
        <BalanceUSDetailCard />
      </ScrollContainer>
    </ScreenBoiler>
  );
};

export default BalanceUSDetail;

const styles = StyleSheet.create({});
