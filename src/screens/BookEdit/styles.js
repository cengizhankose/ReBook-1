import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../constant/colors/colors';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  addBookView: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  addBookTitle: {
    fontSize: 26,
    marginBottom: height * 0.04,
    textAlign: 'center',
  },
  imagesContainer: {
    flexDirection: 'row',
    flex: 1.2,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 5,
    borderRadius: 5,
    margin: 5,
  },
  input: {
    marginBottom: 20,
    borderColor: '#818081',
    borderWidth: 1,
    padding: 10,
  },
  addBtn: {
    backgroundColor: Colors.softPink,
    alignSelf: 'center',
  },
  removeBtn: {
    backgroundColor: 'red',
  },
  btnText: {
    color: 'white',
  },
  main: {
    alignItems: 'center',
    flex: 5,
    marginTop: 10,
  },
  scrollStyle: {
    padding: 5,
    borderWidth: 0.5,
    borderColor: Colors.softPink,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
