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
                  <Divider borderColor="gray.300" width={'96'} />
                  <Actionsheet.Item
                    _text={{
                      color: 'blue.500',
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
