import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../constant/colors/colors';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: Colors.softPink,
    fontSize: 22,
    alignItems: 'center',
    borderRadius: 10,
    width: width * 0.5,
    height: height * 0.03,
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: Colors.textColor,
    fontWeight: '600',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  btnContainer: {
    marginTop: 30,
  },
  cancelContainer: {
    alignItems: 'center',
  },
});
