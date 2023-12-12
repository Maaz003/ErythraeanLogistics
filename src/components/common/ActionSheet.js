import {Actionsheet, Divider} from 'native-base';
import {FlatList} from 'react-native';

const ActionSheet = ({isOpen, onClose, data}) => {
  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <>
                  <Divider borderColor="black" width={'96'} />
                  <Actionsheet.Item
                    _text={{
                      color: 'black',
                    }}
                    onPress={item.onPress}>
                    {item.title}
                  </Actionsheet.Item>
                </>
              );
            }}
          />
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
export default ActionSheet;
