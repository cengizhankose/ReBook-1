import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../constant/colors/colors';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.4,
    height: height * 0.04,
    backgroundColor: 'transparent',
    borderRadius: 6,
    borderColor: Colors.orange,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.orange,
  },
});
