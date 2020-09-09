import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../constant/colors/colors';

const {widht, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  loginView: {
    flex: 1,
  },
  image: {
    width: 350,
    height: 700,
    position: 'relative',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.softPink,
  },
  formArea: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: Colors.softPink,
    zIndex: 1,
  },
  textView: {
    width: '90%',
    height: '10%',
    marginBottom: '8%',
  },
  form: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formText: {
    fontSize: 36,
    color: '#fff',
    justifyContent: 'flex-start',
  },
  subInfos: {
    width: '90%',
    height: height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '4%',
    marginBottom: '8%',
  },
  checkBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ınfoTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 0.6,
    backgroundColor: Colors.orange,
    marginTop: -10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  bottomView2: {
    flex: 0.3,
  },
});
