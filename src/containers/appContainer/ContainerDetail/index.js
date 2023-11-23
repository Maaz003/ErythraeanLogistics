import React from 'react';
import {StyleSheet} from 'react-native';

import ScreenBoiler from '@components/layout/ScreenBoiler';
import ContainerDetailCard from '@components/view/cards/ContainerDetailCard';
import ScrollContainer from '@components/layout/ScrollContainer';

const ContainerDetail = ({navigation, ...props}) => {
  return (
    <ScreenBoiler
      onPressNotification={() => {
        navigation.navigate('Notification');
      }}
      onPressProfile={() => {
        navigation.navigate('AccountSetting');
      }}>
      <ScrollContainer paddingBottom={0.15}>
        <ContainerDetailCard />
      </ScrollContainer>
    </ScreenBoiler>
  );
};

export default ContainerDetail;

const styles = StyleSheet.create({});
