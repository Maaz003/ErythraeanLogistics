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
import SubBidderCard from '@components/view/cards/SubBidderCard';
import TextInput from '@components/common/TextInput';

const SubBidderList = ({navigation, ...props}) => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <ScreenBoiler isBack={true}>
      <View style={styles.flexCont}>
        <Text
          color={'black'}
          fontSize={R.unit.width(0.06)}
          font={'RajdhaniBold'}>
          Sub Bidder List
        </Text>
        <View style={styles.flexDirCont}>
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateUser');
            }}
            activeOpacity={0.7}
            style={styles.orderCont}>
            <View style={styles.imgPlusStyleCont}>
              <Image source={R.image.Plus()} style={R.styles.img} />
            </View>
            <Text
              color={'white'}
              fontSize={R.unit.width(0.04)}
              font={'RajdhaniSemiBold'}>
              Add Sub Bidder
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {isSearch && (
        <View style={styles.flexCont}>
          <TextInput
            placeholderText={'Search Sub Bidder...'}
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
        renderItem={({index, item}) => {
          return <SubBidderCard />;
        }}
        contentContainerStyle={{paddingBottom: R.unit.height(0.15)}}
      />
    </ScreenBoiler>
  );
};

export default SubBidderList;

const styles = StyleSheet.create({
  circleCont: {
    width: R.unit.width(0.09),
    height: R.unit.width(0.09),
    borderRadius: R.unit.width(1) / 2,
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgSearchStyleCont: {
    width: R.unit.width(0.04),
    height: R.unit.width(0.04),
  },
  imgPlusStyleCont: {
    width: R.unit.width(0.04),
    height: R.unit.width(0.04),
    marginRight: R.unit.width(0.02),
  },
  flexDirCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderCont: {
    padding: 7,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: R.unit.width(0.02),
  },
  flexCont: {
    flexDirection: 'row',
    width: R.unit.width(0.95),
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: R.unit.height(0.02),
  },
});
