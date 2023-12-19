import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import PDFViewer from '@components/common/PDF';

const BalanceUSDetailCard = ({item, onPress, ...props}) => {
  const BalanceDetailContainerCard = ({title, data, image, onPress}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.mainCont}
        onPress={onPress}>
        <View style={styles.imgStyleMainCont}>
          <View style={styles.imgStyleCont}>
            <Image source={image} style={R.styles.img} />
          </View>
        </View>
        <View style={{marginTop: R.unit.height(0.005)}}>
          <Text
            color={'black'}
            fontSize={R.unit.width(0.047)}
            font={'RajdhaniSemiBold'}
            width={R.unit.width(0.4)}>
            {title}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {data == 'PDF' && (
              <View style={styles.pdfImgStyleCont}>
                <Image source={R.image.PDF()} style={R.styles.img} />
              </View>
            )}
            <Text
              color={'black'}
              fontSize={R.unit.width(0.04)}
              font={data == 'PDF' ? 'RajdhaniBold' : 'RajdhaniMedium'}
              width={R.unit.width(0.4)}>
              {data}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const [pdf, setPdf] = useState('');
  const [isPDF, setIsPDF] = useState(false);

  return (
    <>
      <View style={styles.flexCont}>
        <Text
          color={'black'}
          alignSelf={'flex-start'}
          fontSize={R.unit.width(0.065)}
          font={'RajdhaniBold'}>
          Balance US Detail
        </Text>
      </View>

      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Booking Number'}
          data={
            item?.loaded?.booking_number == null
              ? 'None'
              : item?.loaded?.booking_number
          }
          image={R.image.CirclePlus()}
        />
        <BalanceDetailContainerCard
          title={
            item?.loaded?.shipping_lines == null
              ? 'None'
              : item?.loaded?.shipping_lines
          }
          data={'Y'}
          image={R.image.Tally()}
        />
      </View>
      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Port'}
          data={item?.destination_port}
          image={R.image.Warehouse()}
        />
        <BalanceDetailContainerCard
          title={'Size'}
          data={
            item?.loaded?.container_size == null
              ? 'None'
              : item?.loaded?.container_size
          }
          image={R.image.Gear()}
        />
      </View>
      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Dock Receipt'}
          data={'PDF'}
          image={R.image.Dollar()}
          onPress={() => {
            setIsPDF(true);
            setPdf(item?.loaded?.dock_receipt);
          }}
        />
        <BalanceDetailContainerCard
          title={'BI Copy'}
          data={item?.loaded?.bl_copy == null ? 'None' : item?.loaded?.bl_copy}
          image={R.image.Key()}
        />
      </View>
      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Telex Release'}
          data={
            item?.loaded?.telex_release == null
              ? 'None'
              : item?.loaded?.telex_release
          }
          image={R.image.City()}
        />
        <BalanceDetailContainerCard
          title={'Invoice from auction'}
          data={'PDF'}
          image={R.image.List()}
          onPress={() => {
            setIsPDF(true);
            setPdf(item?.loaded?.auction_invoices);
          }}
        />
      </View>
      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Expected Arrival Date'}
          data={item?.arrival_date == null ? 'None' : item?.arrival_date}
          image={R.image.CalendarWhite()}
        />
        <BalanceDetailContainerCard
          title={'Date of Release'}
          data={
            item?.loaded?.date_of_release == null
              ? 'None'
              : item?.loaded?.date_of_release
          }
          image={R.image.CalendarStar()}
        />
      </View>
      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Date of Loading'}
          data={
            item?.loaded?.date_of_loading == null
              ? 'None'
              : item?.loaded?.date_of_loading
          }
          image={R.image.CalendarWhite()}
        />
        <BalanceDetailContainerCard
          title={'Container Arrival Date'}
          data={
            item?.loaded?.actual_container_arrival_date == null
              ? 'None'
              : item?.loaded?.actual_container_arrival_date
          }
          image={R.image.CalendarStar()}
        />
      </View>
      <View style={styles.container}>
        {/* <BalanceDetailContainerCard
          title={'Unloading Date'}
          data={'None'}
          image={R.image.CalendarWhite()}
        /> */}
        <BalanceDetailContainerCard
          title={'Invoice'}
          data={'PDF'}
          image={R.image.Dollar()}
          onPress={() => {
            setIsPDF(true);
            setPdf(item?.loaded?.customer_invoice);
          }}
        />
        <BalanceDetailContainerCard
          title={'Delivery Order'}
          data={
            item?.loaded?.delivery_order == null
              ? 'None'
              : item?.loaded?.delivery_order
          }
          image={R.image.CalendarStar()}
        />
      </View>
      <View style={styles.container}>
        <BalanceDetailContainerCard
          title={'Invoice Amount'}
          data={
            item?.loaded?.invoice_amount == null
              ? 'None'
              : item?.loaded?.invoice_amount
          }
          image={R.image.Dollar()}
        />
        <BalanceDetailContainerCard
          title={'Paid Ammount'}
          data={
            item?.loaded?.paid_amount == null
              ? 'None'
              : item?.loaded?.paid_amount
          }
          image={R.image.Dollar()}
        />
      </View>
      <View style={styles.container}>
        {/* <BalanceDetailContainerCard
          title={'Validations'}
          data={'None'}
          image={R.image.InputText()}
        /> */}
      </View>
      {isPDF && (
        <PDFViewer
          onPressBack={() => {
            setIsPDF(false);
            setPdf('');
          }}
          uri={pdf}
        />
      )}
    </>
  );
};
export default React.memo(BalanceUSDetailCard);

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    marginTop: R.unit.height(0.02),
    width: R.unit.width(0.95),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  //comp
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
  mainCont: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    width: R.unit.width(0.48),
    // alignSelf: 'center',
  },

  flexCont: {
    width: R.unit.width(0.95),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: R.unit.height(0.03),
    justifyContent: 'space-between',
  },

  pdfImgStyleCont: {
    width: R.unit.width(0.045),
    height: R.unit.width(0.045),
    marginRight: R.unit.width(0.018),
  },
});
