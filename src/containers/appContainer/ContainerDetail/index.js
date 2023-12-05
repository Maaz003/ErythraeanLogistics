import React from 'react';
import {StyleSheet} from 'react-native';

import ScreenBoiler from '@components/layout/ScreenBoiler';
import ContainerDetailCard from '@components/view/cards/ContainerDetailCard';
import ScrollContainer from '@components/layout/ScrollContainer';

const ContainerDetail = ({navigation, route, ...props}) => {
  const data = route.params.item;

  return (
    <ScreenBoiler isBack={true}>
      <ScrollContainer paddingBottom={0.15}>
        <ContainerDetailCard item={data} />
      </ScrollContainer>
    </ScreenBoiler>
  );
};

export default ContainerDetail;

const styles = StyleSheet.create({});
