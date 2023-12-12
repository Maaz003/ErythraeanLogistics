import React, {useState, useCallback} from 'react';
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
import ContainerListCard from '@components/view/cards/ContainerListCard';
import ActionSheet from '@components/common/ActionSheet';
import TextInput from '@components/common/TextInput';

const ContainerList = ({navigation, ...props}) => {
  const [isActionSheet, setIsActionSheet] = useState(false);

  const onPressActionSheet = useCallback(() => {
    setIsActionSheet(true);
  }, []);

  const [isSearch, setIsSearch] = useState(false);

  const actionButton = [
    {
      title: 'Action Button 1',
      onPress: () => {
        console.log('Action Button 1');
      },
    },
    {
      title: 'Action Button 2',
      onPress: () => {
        console.log('Action Button 2');
      },
    },
    {
      title: 'Action Button 3',
      onPress: () => {
        console.log('Action Button 3');
      },
    },
  ];

  return (
    <ScreenBoiler>
      <View style={styles.flexCont}>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          fontSize={R.unit.width(0.065)}
          font={'RajdhaniBold'}>
          Container List
        </Text>
        <TouchableOpacity
          onPress={() => setIsSearch(!isSearch)}
          activeOpacity={0.7}
          style={styles.circleCont}>
          {!isSearch ? (
            <View style={styles.imgSearchStyleCont}>
              <Image source={R.image.Search()} style={R.styles.img} />
            </View>
          ) : (
            <Text
              color={'black'}
              alignSelf={'center'}
              fontSize={R.unit.width(0.07)}
              font={'RajdhaniBold'}>
              x
            </Text>
          )}
        </TouchableOpacity>
      </View>
      {isSearch && (
        <View style={styles.flexCont}>
          <TextInput
            placeholderText={'Search Container...'}
            width={0.85}
            marginTop={0}
          />
          <TouchableOpacity style={styles.imgSearchStyleCont}>
            <Image source={R.image.Search()} style={R.styles.img} />
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={[{title: '123'}, {title: '456'}, {title: '789'}, {title: '012'}]}
        renderItem={({index, item}) => {
          return (
            <ContainerListCard
              item={item}
              onPressActionSheet={onPressActionSheet}
            />
          );
        }}
        contentContainerStyle={{paddingBottom: R.unit.height(0.15)}}
      />
      <ActionSheet
        isOpen={isActionSheet}
        onClose={() => {
          setIsActionSheet(false);
        }}
        data={actionButton}
      />
    </ScreenBoiler>
  );
};

export default ContainerList;

const styles = StyleSheet.create({
  circleCont: {
    width: R.unit.width(0.11),
    height: R.unit.width(0.11),
    borderRadius: R.unit.width(1) / 2,
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgSearchStyleCont: {
    width: R.unit.width(0.05),
    height: R.unit.width(0.05),
  },
  flexCont: {
    width: R.unit.width(0.95),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: R.unit.height(0.015),
  },
});
