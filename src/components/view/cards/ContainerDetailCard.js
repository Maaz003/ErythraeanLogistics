import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import PDFViewer from '@components/common/PDF';

const ContainerDetailCard = ({item, onPress, ...props}) => {
  const ContainerDetailContainerCard = ({title, data, image, onPress}) => {
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
          Container Detail
        </Text>
        <View style={styles.idCont}>
          <Text
            color={'white'}
            fontSize={R.unit.width(0.035)}
            font={'RajdhaniSemiBold'}>
            {item?.id}
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Booking Number'}
          data={item?.booking_number}
          image={R.image.CirclePlus()}
        />
        <ContainerDetailContainerCard
          title={'Lines'}
          data={item?.shipping_lines}
          image={R.image.Tally()}
        />
      </View>
      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Port'}
          data={item?.destination_port}
          image={R.image.Warehouse()}
        />
        <ContainerDetailContainerCard
          title={'Size'}
          data={item?.container_size}
          image={R.image.Gear()}
        />
      </View>
      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Dock Receipt'}
          data={'PDF'}
          image={R.image.Dollar()}
          onPress={() => {
            setIsPDF(true);
            setPdf(item?.dock_receipt);
          }}
        />
        <ContainerDetailContainerCard
          title={'BI Copy'}
          data={item?.bl_copy === null ? 'None' : item?.bl_copy}
          image={R.image.Key()}
        />
      </View>
      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Telex Release'}
          data={item?.telex_release === null ? 'None' : item?.telex_release}
          image={R.image.City()}
        />
        <ContainerDetailContainerCard
          title={'Invoice from auction'}
          data={'PDF'}
          image={R.image.List()}
          onPress={() => {
            setIsPDF(true);
            setPdf(item?.auction_invoices);
          }}
        />
      </View>
      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Expected Arrival Date'}
          data={
            item?.expected_arival_date === null
              ? 'None'
              : item?.expected_arival_date
          }
          image={R.image.CalendarWhite()}
        />
        <ContainerDetailContainerCard
          title={'Date of Release'}
          data={item?.date_of_release === null ? 'None' : item?.date_of_release}
          image={R.image.CalendarStar()}
        />
      </View>
      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Date of Loading'}
          data={item?.date_of_loading}
          image={R.image.CalendarWhite()}
        />
        <ContainerDetailContainerCard
          title={'Invoice'}
          data={'PDF'}
          image={R.image.Dollar()}
          onPress={() => {
            setIsPDF(true);
            setPdf(item?.customer_invoice);
          }}
        />
      </View>
      <View style={styles.container}>
        {/* <ContainerDetailContainerCard
          title={'Unloading Date'}
          data={'None'}
          image={R.image.CalendarWhite()}
        /> */}
      </View>
      <View style={styles.container}>
        <ContainerDetailContainerCard
          title={'Invoice Amount'}
          data={item?.invoice_amount == null ? 'None' : item?.invoice_amount}
          image={R.image.Dollar()}
        />
        <ContainerDetailContainerCard
          title={'Paid Ammount'}
          data={item?.paid_amount == null ? 'None' : item?.paid_amount}
          image={R.image.Dollar()}
        />
      </View>
      <View style={styles.container}>
        {/* <ContainerDetailContainerCard
          title={'Validations'}
          data={'None'}
          image={R.image.InputText()}
        /> */}
        <ContainerDetailContainerCard
          title={'Delivery Order'}
          data={item?.delivery_order}
          image={R.image.CalendarStar()}
        />
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
export default React.memo(ContainerDetailCard);

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
  idCont: {
    backgroundColor: 'black',
    borderRadius: R.unit.width(1) / 2,
    paddingHorizontal: R.unit.width(0.03),
    paddingVertical: R.unit.width(0.015),
  },
  pdfImgStyleCont: {
    width: R.unit.width(0.045),
    height: R.unit.width(0.045),
    marginRight: R.unit.width(0.018),
  },
});
