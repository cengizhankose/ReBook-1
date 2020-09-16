import {StyleSheet} from 'react-native';
import {Colors} from '../../constant/colors/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    alignSelf: 'center',
    marginTop: '4%',
  },
  input: {
    marginTop: '10%',
  },
  emptyText: {
    color: Colors.softPink,
    fontSize: 20,
    textAlign: 'center',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  flatlist: {
    marginTop: 20,
  },
});
