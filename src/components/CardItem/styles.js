import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    marginTop: '0.4%',
    borderWidth: 0.1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  LinearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  headerText: {
    marginLeft: '5%',
    marginTop: '5%',
    color: 'white',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  priceText: {
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: '10%',
    color: '#FFAC81',
  },
  locationText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'normal',
  },
});

export const colors = [
  '#FF928B',
  '#FF928B',
  '#FFFFFF00',
  '#FFFFFF00',
  '#FFFFFF00',
  '#FFFFFF00',
];
