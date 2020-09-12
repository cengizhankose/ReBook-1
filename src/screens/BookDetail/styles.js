import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../constant/colors/colors';

const {width: screenWidth} = Dimensions.get('window');
export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pageHeader: {
    flex: 0.5,
    marginHorizontal: 20,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  titleText: {
    fontSize: 30,
  },
  priceText: {
    fontSize: 30,
    color: Colors.orange,
    fontWeight: '600',
  },
  author: {
    fontSize: 14,
    color: '#C4C4C4',
  },
  pageContent: {
    flex: 1,
    marginHorizontal: 20,
  },
  pageFooter: {
    backgroundColor: Colors.softPink,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imgContainer: {
    flex: 1.5,
    marginBottom: 10,
    paddingBottom: 20,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  sellerText: {
    color: Colors.softPink,
  },
  item: {
    width: screenWidth,
    height: screenWidth,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
