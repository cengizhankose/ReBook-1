import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FF928B',
    height: 50,
  },
  sohbet: {
    padding: 4,
    backgroundColor: '#FF928B',
  },
  inlineView: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 50,
  },
  chooseSohbet: {
    borderRadius: 50,
    marginTop: -20,
    backgroundColor: '#fff',
  },
  sohbetView: {
    borderRadius: 50,
    backgroundColor: 'yellow',
  },
  bottom: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    flex: 1,
  },
  dot: {
    borderRadius: 50,
    width: 4,
    height: 4,
    backgroundColor: 'red',
    marginTop: 8,
  },
});
