import React from 'react';
import {StyleSheet, View,TouchableOpacity, Image} from 'react-native';

import R from '@components/utils/R';
import Text from '@components/common/Text';

import DocumentPicker from 'react-native-document-picker';

const PDFPicker = ({title, pickedDocument, setPickedDocument, ...props}) => {
  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setPickedDocument(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.log('Error picking document:', err);
      }
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={pickDocument}>
      <Text
        color={'#5A5A5A'}
        fontSize={R.unit.width(0.044)}
        font={'RajdhaniMedium'}>
        {pickedDocument === null ? title : pickedDocument[0].name}
      </Text>
      <View style={styles.imgStyleCont}>
        <Image source={R.image.PDF()} style={R.styles.img} />
      </View>
    </TouchableOpacity>
  );
};
{
  /* <Button title="Pick Document" onPress={pickDocument} />
          {pickedDocument && (
            <View style={{marginTop: 20}}>
              <Text color={'black'}>Picked Document:</Text>
              <Text color={'black'}>{pickedDocument[0].name}</Text>
              <Text color={'black'}>{pickedDocument[0].type}</Text>
              <Text color={'black'}>{pickedDocument[0].uri}</Text>
            </View>
          )} */
}

export default PDFPicker;

const styles = StyleSheet.create({
  container: {
    width: R.unit.width(0.95),
    paddingVertical: R.unit.height(0.015),
    borderColor: '#D9D9D9',
    borderWidth: 0.7,
    borderRadius: R.unit.width(0.02),
    marginTop: R.unit.height(0.015),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: R.unit.width(0.03),
  },
  imgStyleCont: {
    width: R.unit.width(0.05),
    height: R.unit.width(0.05),
  },
});
