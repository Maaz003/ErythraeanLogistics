import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';

const TitleImageContainerCard = ({title, data, image}) => {
  return (
    <View style={styles.flexCont}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.imgStyleMainCont}>
          <View style={styles.imgStyleCont}>
            <Image source={image} style={R.styles.img} />
          </View>
        </View>
        <Text
          color={'black'}
          fontSize={R.unit.width(0.045)}
          font={'RajdhaniMedium'}>
          {title}
        </Text>
      </View>
      <Text
        color={'black'}
        fontSize={R.unit.width(0.045)}
        font={'RajdhaniMedium'}>
        {data}
      </Text>
    </View>
  );
};

export default React.memo(TitleImageContainerCard);

const styles = StyleSheet.create({
  flexCont: {
    width: R.unit.width(0.85),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: R.unit.height(0.01),
  },

  imgStyleCont: {
    width: R.unit.width(0.04),
    height: R.unit.width(0.04),
  },
  imgStyleMainCont: {
    width: R.unit.width(0.075),
    height: R.unit.width(0.075),
    marginRight: R.unit.width(0.02),
    backgroundColor: 'black',
    borderRadius: R.unit.width(1) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
