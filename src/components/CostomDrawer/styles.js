import {StyleSheet} from 'react-native';
import {Colors} from '../../constant/colors/colors';

export const styles = StyleSheet.create({
  logOut: {
    marginBottom: "6%",
    alignSelf: 'center',
  },
  label: {
    fontSize: 22,
    color: Colors.softPink,
    marginLeft: 20,
    fontSize:16
  },
  mail: {
    color: '#9A9A9A',
    fontSize: 12,
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
  },
  kitapEkle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 20,
    fontSize:18,
  },
});
