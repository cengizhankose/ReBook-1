import {Colors} from '../../constant/colors/colors';
import {fonts} from '../../constant/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  pageContainer: {
    marginHorizontal: 10,
    marginLeft: 5,
    marginVertical: 10,
  },
  pink: {
    color: Colors.softPink,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 10,
  },
  img: {
    width: 30,
    height: 24,
    tintColor: Colors.orange,
    marginLeft: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
