import React from 'react';
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
// import Statistics from '@components/view/cards/Statistics';
// import WearHouseDetailCard from '@components/view/cards/WearHouseDetailCard';
import ContainerListCard from '@components/view/cards/ContainerListCard';

const ContainerList = props => {
  return (
    <ScreenBoiler>
      <View style={styles.flexCont}>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          fontSize={R.unit.width(0.065)}
          font={'RajdhaniBold'}>
          Create Container List
        </Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.circleCont}>
          <View style={styles.imgSearchStyleCont}>
            <Image source={R.image.Search()} style={R.styles.img} />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({index, item}) => {
          return <ContainerListCard />;
        }}
        contentContainerStyle={{paddingBottom: R.unit.height(0.07)}}
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
    marginTop: R.unit.height(0.02),
  },
});
