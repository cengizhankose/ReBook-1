import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  mainContainer:{
    flexDirection: 'row',
    width: windowWidth * 0.9,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 20,
  },
  recieverIcon:{
    backgroundColor: '#C4C4C4',
    width: 50,
    height: 50,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    marginRight:20,
    marginBottom: 9,
  },
  notificationIcon:{
    backgroundColor: '#CDEAC0',
    width: 25,
    height: 25,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: "5%",
  },
});