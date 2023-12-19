import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import R from '@components/utils/R';

//dimensions
const {width, height} = Dimensions.get('window');

const CustomImageUpload = ({label, setPicture, picture}) => {
  const [photo, setPhoto] = useState(null);
  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setPhoto(image.path);
      setPicture(image);
      // Convert image to a file using RNFetchBlob
    });
  };

  return (
    <View>
      {picture == null ? (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.imgStyleCont}
          onPress={() => {
            uploadImage();
          }}></TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            uploadImage();
          }}
          style={styles.imgPictureStyleCont}>
          <Image source={{uri: photo}} style={styles.img} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomImageUpload;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: width * 0.045,
    fontFamily: 'Roboto-MediumItalic',
    color: 'black',
  },
  imgStyleCont: {
    width: R.unit.width(0.3),
    height: R.unit.width(0.3),
    borderRadius: R.unit.width(1),
    backgroundColor: R.color.black,
    alignSelf: 'center',
    overflow: 'hidden',
    marginVertical: R.unit.height(0.02),
  },
  imgPictureStyleCont: {
    width: width * 0.4,
    height: width * 0.4,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
