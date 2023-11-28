import React, {useCallback, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import R from '@components/utils/R';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import Text from '@components/common/Text';
import YardDestinationCard from '@components/view/cards/YardDestinationCard';
import ActionSheet from '@components/common/ActionSheet';
import TextInput from '@components/common/TextInput';

const YardDestination = ({navigation, ...props}) => {
  const [isActionSheet, setIsActionSheet] = useState(false);

  const onPressActionSheet = useCallback(() => {
    setIsActionSheet(true);
  }, []);

  const actionButton = [
    {
      title: 'View',
      onPress: () => {
        console.log('View');
      },
    },
    {
      title: 'Edit',
      onPress: () => {
        console.log('Edit');
      },
    },
    {
      title: 'Delete',
      onPress: () => {
        console.log('Delete');
      },
    },
  ];

  const [isSearch, setIsSearch] = useState(false);

  return (
    <ScreenBoiler>
      <View style={styles.flexCont}>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          fontSize={R.unit.width(0.065)}
          font={'RajdhaniBold'}>
          Yard Destination
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
            placeholderText={'Search Yard Destination...'}
            width={0.85}
            marginTop={0}
          />
          <TouchableOpacity style={styles.imgSearchStyleCont}>
            <Image source={R.image.Search()} style={R.styles.img} />
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({item, index}) => {
          return (
            <YardDestinationCard
              index={index}
              item={item}
              onPressActionSheet={onPressActionSheet}
            />
          );
        }}
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

export default YardDestination;

const styles = StyleSheet.create({
  flexCont: {
    width: R.unit.width(0.95),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: R.unit.height(0.02),
  },
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
});
