import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';
import ScreenBoiler from '@components/layout/ScreenBoiler';
import NotificationCard from '@components/view/cards/NotificationCard';
import Loader from '@components/common/Loader';

// ! RTK QUERY
import {
  useGetNotificationQuery,
  usePriceAgreementMutation,
} from '../../../store/services/index';
import {useSelector} from 'react-redux';

const Notification = ({navigation, ...props}) => {
  const {data, isLoading} = useGetNotificationQuery();
  const [isLoader, setIsLoader] = useState(false);
  console.log(data, isLoading);

  const user = useSelector(state => state.user?.user);
  console.log('user ==>', user);

  //api
  const [priceAgreement] = usePriceAgreementMutation();

  const handlepriceAgreement = (order_id, action) => {
    setIsLoader(true);

    const formData = new FormData();
    formData.append('order_id', order_id);
    formData.append('approved_by', user?.email);
    formData.append('action', action);

    priceAgreement(formData)
      .unwrap()
      .then(result => {
        console.log('priceAgreement successful:', result);
        setIsLoader(false);

        PopUp({
          heading: 'Price Agreement Scccessfully',
          type: 'success',
        });
      })
      .catch(error => {
        console.log('priceAgreement failed ===>', error);
        PopUp({
          heading: error?.data?.message,
          type: 'danger',
        });
        setIsLoader(false);
      });
  };
  return (
    <>
      <ScreenBoiler isBack={true}>
        <View style={styles.flexCont}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.06)}
            font={'RajdhaniBold'}>
            Order Notification
          </Text>
        </View>
        <FlatList
          data={isLoading ? [] : data?.data}
          renderItem={({index, item}) => {
            return (
              <NotificationCard
                item={item}
                onPressAgree={() => {
                  handlepriceAgreement(item?.order_id, 'agree');
                }}
                onPressDisagree={() => {
                  handlepriceAgreement(item?.order_id, 'disagree');
                }}
              />
            );
          }}
          contentContainerStyle={{paddingBottom: R.unit.height(0.07)}}
        />
      </ScreenBoiler>
      {isLoading && <Loader />}
      {isLoader && <Loader />}
    </>
  );
};

export default Notification;

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
