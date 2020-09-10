import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../constant/colors/colors.js';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  registerView: {
    flex: 1,
  },
  registerTopSide: {
    flex: height * 0.0005,
    backgroundColor: Colors.softPink,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    zIndex: 3,
  },
  registeLogo: {
    flex: 0.8,
    backgroundColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
  },
  registerForm: {
    flex: 4,
    backgroundColor: Colors.orange,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  registerBottom: {
    flex: 0.4,
    backgroundColor: '#fff',
  },
  textView: {
    width: '90%',
    height: '10%',
    marginBottom: '8%',
  },

  formText: {
    fontSize: 36,
    color: '#fff',
    justifyContent: 'flex-start',
  },
});
