import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  main: {
    marginTop: '4%',
    marginLeft: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'auto',
    width: width * 0.4,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '10%',
    color: '#FFAC81',
  },
  locationText: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'normal',
  },
  touchableArea: {
    flex: 1,
    height: height * 0.2,
    width: width * 0.2,
  },
});

export const colors = [
  '#FFAC81',
  '#FFAC81',
  '#FFFFFF00',
  '#FFFFFF00',
  '#FFFFFF00',
];
