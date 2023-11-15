import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useGetChatsListQuery} from '@store/services';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import FixedContainer from '@components/layout/FixedContainer';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import SearchBar from '@components/common/SearchBar';
import FlatList from '@components/common/FlatList';
import {members} from '@components/constants';

const CoachesScreen = props => {
  return (
    <ScreenBoiler isSubHeader mainHeading={'List'} isBack={false}>
      <FixedContainer>
        <Text>Home</Text>
      </FixedContainer>
    </ScreenBoiler>
  );
};

export default CoachesScreen;
