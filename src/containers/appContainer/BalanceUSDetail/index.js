import React from 'react';
import {StyleSheet} from 'react-native';

import ScreenBoiler from '@components/layout/ScreenBoiler';
import BalanceUSDetailCard from '@components/view/cards/BalanceUSDetailCard';
import ScrollContainer from '@components/layout/ScrollContainer';

const BalanceUSDetail = ({navigation, route, ...props}) => {
  const data = route.params.item;

  return (
    <ScreenBoiler isBack={true}>
      <ScrollContainer paddingBottom={0.15}>
        <BalanceUSDetailCard item={data} />
      </ScrollContainer>
    </ScreenBoiler>
  );
};

export default BalanceUSDetail;

const styles = StyleSheet.create({});
