import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import ContainerDetailCard from '@components/view/cards/ContainerDetailCard';
import ScrollContainer from '@components/layout/ScrollContainer';

const ContainerDetail = ({navigation, ...props}) => {
  return (
    <ScreenBoiler
      onPressNotification={() => {
        navigation.navigate('Notification');
      }}>
      <ScrollContainer paddingBottom={0.15}>
        <ContainerDetailCard />
      </ScrollContainer>
    </ScreenBoiler>
  );
};

export default ContainerDetail;

const styles = StyleSheet.create({});
