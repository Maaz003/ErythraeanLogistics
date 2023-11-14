import React, {useState} from 'react';
import {View} from 'react-native';
import R from '@components/utils/R';
import SearchBar from '@components/common/SearchBar';
import FlatList from '@components/common/FlatList';
import Stagger from '@components/common/Stagger';
import FixedContainer from '@components/layout/FixedContainer';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import {chatsList} from '@components/constants';

const ChatsListScreen = props => {
  const {navigation} = props;
  const [text, setText] = useState('');

  return (
    <ScreenBoiler mainHeading={t('chat')} isBack={false}>
      <Stagger onPress={onPress} />
      <FixedContainer>
        <View style={[R.styles.contentView, {paddingHorizontal: 0}]}>
          <SearchBar
            placeholder={'Search Users'}
            onChange={data => {
              setText(data);
            }}
            value={text}
            containerStyles={{paddingHorizontal: R.unit.scale(10)}}
          />

          <FlatList
            listData={chatsList}
            renderList={_renderList}
            totalCount={10}
            emptyListHeading={'Chat so empty :('}
            emptyListText={'There are no new users available now for chat'}
            containerStyles={{paddingTop: 0}}
            contentContainerStyles={{
              rowGap: R.unit.scale(1),
              paddingHorizontal: 0,
            }}
          />
        </View>
      </FixedContainer>
    </ScreenBoiler>
  );
};
export default ChatsListScreen;
