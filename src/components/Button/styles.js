import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../constant/colors/colors';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: Colors.authButton,
    borderRadius: 6,
    marginTop: '6%',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.textColor,
  },
});
