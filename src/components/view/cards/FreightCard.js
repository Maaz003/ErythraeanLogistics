import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';

const FreightCard = ({freightItem, ...props}) => {
  console.log('item ===================>', freightItem);
  const [container, setContainer] = useState([]);

  useEffect(() => {
    // Assuming freightItem is populated asynchronously
    if (freightItem) {
      setContainer([
        {
          id: 1,
          name: '40 feet / 1 auto',
          isActive: true,
          data: freightItem?.FortyFeetOne,
        },
        {
          id: 2,
          name: '40 feet / 2 auto',
          isActive: false,
          data: freightItem?.FortyFeetTwo,
        },
        {
          id: 3,
          name: '40 feet / 3 auto',
          isActive: false,
          data: freightItem?.FortyFeetThree,
        },
        {
          id: 4,
          name: '40 feet / 4 auto',
          isActive: false,
          data: freightItem?.FortyFeetFour,
        },
        {
          id: 5,
          name: '45 feet / 4 auto',
          isActive: false,
          data: freightItem?.FortyFiveFeetFour,
        },
        {
          id: 6,
          name: '45 feet / 5 auto',
          isActive: false,
          data: freightItem?.FortyFiveFeetFive,
        },
        {
          id: 7,
          name: '45 feet / 6 auto',
          isActive: false,
          data: freightItem?.FortyFiveFeetSix,
        },
        {
          id: 8,
          name: 'Motorcycle',
          isActive: false,
          data: freightItem?.Motorcycle,
        },
        {
          id: 9,
          name: 'Oversize moto',
          isActive: false,
          data: freightItem?.OverSizeMoto,
        },
        {
          id: 10,
          name: 'Oversize moto load',
          isActive: false,
          data: freightItem?.OverSizeMotoLoad,
        },
      ]);
    }
  }, [freightItem]);

  const _handleisActive = updatedItem => {
    const tempArr = container.map(item => {
      if (updatedItem.id === item.id) {
        return {
          ...item,
          isActive: !item.isActive,
        };
      }
      return {
        ...item,
        isActive: false,
      };
    });
    setContainer(tempArr);
  };

  console.log('container ==>', container);

  const isActiveData = container.find(x => x.isActive === true);
  console.log('isActiveData ===>', isActiveData);

  return (
    <>
      <View style={styles.mainCont}>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          gutterLeft={15}
          fontSize={R.unit.width(0.056)}
          font={'RajdhaniSemiBold'}>
          Shipping rates
        </Text>
        <Text
          color={'black'}
          fontSize={R.unit.width(0.045)}
          alignSelf={'flex-start'}
          font={'RajdhaniSemiBold'}
          gutterLeft={15}>
          Container size/amount of vehicles
        </Text>

        <FlatList
          scrollEnabled={false}
          data={container}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => _handleisActive(item)}
                activeOpacity={0.7}
                style={[
                  styles.containerCont,
                  {
                    backgroundColor: item.isActive ? 'white' : 'black',
                    borderWidth: item.isActive ? 1 : 0,
                  },
                ]}>
                <Text
                  color={item.isActive ? 'black' : 'white'}
                  fontSize={R.unit.width(0.035)}
                  font={'RajdhaniMedium'}
                  align={'center'}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{flexWrap: 'wrap', alignSelf: 'center'}}
        />

        <Text
          color={'black'}
          fontSize={R.unit.width(0.045)}
          alignSelf={'flex-start'}
          font={'RajdhaniSemiBold'}
          gutterTop={10}
          gutterLeft={20}>
          Shipping price 1
        </Text>
        <Text
          color={'black'}
          fontSize={R.unit.width(0.042)}
          alignSelf={'flex-start'}
          font={'RajdhaniMedium'}
          gutterLeft={20}>
          (When you select a price at selected port - all available shipping
          lines will be displayed in pop-up)
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <FlatList
            data={freightItem?.priceByLoadUnit}
            renderItem={({item}) => {
              return (
                <View style={styles.flexCont}>
                  <Text
                    color={'black'}
                    fontSize={R.unit.width(0.045)}
                    font={'RajdhaniMedium'}>
                    {item?.port_name}
                  </Text>
                  <View style={styles.flexMainCont}>
                    <FlatList
                      data={JSON.parse(item?.items)}
                      horizontal={true}
                      renderItem={({item: arryItem}) => {
                        let tempName = freightItem?.ShippingLines.find(
                          x => x.id == arryItem,
                        );
                        return (
                          <View style={styles.idCont}>
                            <Text
                              color={'white'}
                              fontSize={R.unit.width(0.035)}
                              font={'RajdhaniSemiBold'}>
                              {tempName?.name}
                            </Text>
                          </View>
                        );
                      }}
                    />
                  </View>
                </View>
              );
            }}
          />
          <FlatList
            data={isActiveData?.data}
            renderItem={({item}) => {
              return (
                <View style={styles.chargesCont}>
                  <Text
                    color={'black'}
                    fontSize={R.unit.width(0.045)}
                    font={'RajdhaniMedium'}>
                    {item?.charge == null ? '' : item?.charge + ' USD'}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};
export default React.memo(FreightCard);

const styles = StyleSheet.create({
  mainCont: {
    width: R.unit.width(0.95),
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: R.unit.height(0.012),
    paddingVertical: R.unit.height(0.02),

    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  containerCont: {
    width: R.unit.width(0.29),
    padding: 7,
    borderRadius: 10,
    margin: 3,
    alignItems: 'center',
  },
  flexCont: {
    width: R.unit.width(0.6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: R.unit.height(0.01),
    marginLeft: R.unit.width(0.04),
    // overflow: 'visible',
  },
  line: {
    height: 1,
    // backgroundColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },
  idCont: {
    backgroundColor: 'black',
    borderRadius: R.unit.width(1) / 2,
    paddingHorizontal: R.unit.width(0.03),
    paddingVertical: R.unit.width(0.015),
  },
  circleCont: {
    width: R.unit.width(0.15),
    paddingHorizontal: R.unit.width(0.04),
    height: R.unit.height(0.05),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  circle: {
    height: R.unit.width(0.02),
    width: R.unit.width(0.02),
    borderRadius: R.unit.width(1) / 2,
    backgroundColor: 'black',
  },
  flexMainCont: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: R.unit.width(0.32),
    justifyContent: 'space-between',
  },
  chargesCont: {
    // backgroundColor: 'red',
    width: R.unit.width(0.3),
    marginVertical: R.unit.height(0.009),
    marginLeft: R.unit.width(0.04),
    paddingHorizontal: R.unit.width(0.03),
    paddingVertical: R.unit.width(0.01),
  },
});
