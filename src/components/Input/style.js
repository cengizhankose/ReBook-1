import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  textInput: {
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: '#fff',
    paddingLeft: 15,
    borderRadius: 6,
  },
});
