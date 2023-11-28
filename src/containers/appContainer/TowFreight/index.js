import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
  FlatList,
} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import DropDown from '@components/common/DropDown';
import TimeDatePicker from '@components/common/TimeDatePicker';
import Freight from '@components/view/cards/FreightCard';
import TowCard from '@components/view/cards/TowCard';
import ScrollContainer from '@components/layout/ScrollContainer';

//third party
import moment from 'moment';

const TowFreight = ({navigation, ...props}) => {
  const [tab, setTab] = useState(true);
  //dropdown
  const data = [
    {label: 'Copart', value: 'Copart'},
    {label: 'IAAI', value: 'IAAI'},
  ];
  const [value, setValue] = useState(null);
  //dropdown

  //time
  const [date, setDate] = useState(new Date());
  const [getDate, setGetDate] = useState('');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setGetDate(moment(currentDate).format('DD-MM-YYYY'));
  };

  const showDatePicker = () => {
    setShow(true);
  };
  //time

  console.log('date ===>', date);

  const FreightRate = () => {
    return (
      <>
        <DropDown
          data={data}
          value={value}
          placeholderText={'Select Destination Port'}
          onChange={item => {
            setValue(item.value);
          }}
        />
        <TimeDatePicker
          date={date}
          getDate={getDate}
          onChange={onChange}
          show={show}
          showDatePicker={showDatePicker}
          text={'Loading Date'}
        />
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({}) => {
            return <Freight />;
          }}
          contentContainerStyle={{paddingBottom: R.unit.height(0.07)}}
        />
      </>
    );
  };

  const TowRate = () => {
    return (
      <>
        <DropDown
          data={data}
          value={value}
          placeholderText={'Select Destination Port'}
          onChange={item => {
            setValue(item.value);
          }}
        />
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({}) => {
            return <TowCard />;
          }}
          contentContainerStyle={{paddingBottom: R.unit.height(0.07)}}
        />
      </>
    );
  };

  return (
    <ScreenBoiler>
      <ScrollContainer>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          fontSize={R.unit.width(0.065)}
          font={'RajdhaniBold'}
          gutterTop={10}
          gutterBottom={10}
          gutterLeft={10}>
          Tow & Freight Rates
        </Text>
        <View style={styles.mainCont}>
          <TouchableOpacity
            onPress={() => {
              setTab(true);
            }}
            activeOpacity={0.7}
            style={tab ? styles.textContOn : styles.textContOff}>
            <Text
              color={tab ? 'white' : 'black'}
              fontSize={R.unit.width(0.045)}
              font={'RajdhaniMedium'}>
              Freight Rates
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTab(false);
            }}
            activeOpacity={0.7}
            style={tab ? styles.textContOff : styles.textContOn}>
            <Text
              color={tab ? 'black' : 'white'}
              fontSize={R.unit.width(0.045)}
              font={'RajdhaniMedium'}>
              Tow Rates
            </Text>
          </TouchableOpacity>
        </View>

        {tab ? FreightRate() : TowRate()}
      </ScrollContainer>
    </ScreenBoiler>
  );
};

export default TowFreight;

const styles = StyleSheet.create({
  mainCont: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContOn: {
    width: R.unit.width(0.42),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: 'black',
    height: R.unit.height(0.065),
    marginLeft: R.unit.width(0.025),
  },
  textContOff: {
    width: R.unit.width(0.42),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: 'white',
    height: R.unit.height(0.065),
    marginLeft: R.unit.width(0.025),
    borderWidth: 1.5,
    borderColor: R.color.black,
  },
});
