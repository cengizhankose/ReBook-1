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
    justifyContent: 'center',
  },
  registeLogo: {
    backgroundColor: Colors.softPink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerForm: {
    flex: 4,
    backgroundColor: Colors.orange,
    alignItems: 'center',
    marginBottom: 15,
    padding: 5,
  },
  registerBottom: {
    flex: 0.5,
    backgroundColor: '#fff',
  },
  textView: {
    width: '90%',
    height: '10%',
    marginBottom: '8%',
  },

  formText: {
    paddingTop:10,
    fontSize: 36,
    color: '#fff',
    justifyContent: 'flex-start',
  },
  addBtn: {
    borderRadius:0,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: '2%',
  },
  btnText: {
    color: Colors.orange,
  },
  profileImg: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
  },
});
