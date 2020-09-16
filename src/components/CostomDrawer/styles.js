import {StyleSheet} from 'react-native';
import {Colors} from '../../constant/colors/colors';

export const styles = StyleSheet.create({
  logOut: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  label: {
    fontSize: 22,
    color: Colors.softPink,
    marginLeft: 20,
  },
  mail: {
    color: '#9A9A9A',
    fontSize: 13,
  },
  name: {
    fontSize: 22,
  },
  itemContainer: {
    margin: 5,
    padding: 5,
  },
  imgContainer: {
    marginTop: 10,
  },
  kitap: {
    backgroundColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    width: 166,
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  kitapEkle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 20,
  },
});
