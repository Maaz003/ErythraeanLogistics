import React, {useCallback} from 'react';
import {StyleSheet, View, Modal, Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';
import Text from './Text';
import Header from './Header';

const {width, height} = Dimensions.get('window');

const PDFViewer = ({uri, onPressBack}) => {
  const onPressNotification = useCallback(() => {
    navigationRef.navigate('Notification');
  }, []);

  const onPressProfile = useCallback(() => {
    navigationRef.navigate('AccountSetting');
  }, []);

  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.centeredView}>
        <Header
          onPressNotification={onPressNotification}
          onPressProfile={onPressProfile}
          isBack={true}
          onPressBack={onPressBack}
        />
        <Pdf
          trustAllCerts={false}
          source={{
            uri: 'https://erythraean.thebackendprojects.com/website/' + uri,
          }} // Replace with your PDF URL or local path
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          style={styles.pdf}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  pdf: {
    flex: 1,
    width: '100%',
  },
});

export default PDFViewer;
