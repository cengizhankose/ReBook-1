import React from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import SendButtonSvg from '../../svg/SendButtonSvg';

const index = (props) => (
  <View
    style={{
      backgroundColor: '#CDEAC0',
      width: 50,
      height: 50,
      borderRadius: 200,
      borderWidth: 2,
      borderColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: '1%',
      paddingTop: '1%',
    }}>
    <TouchableOpacity onPress={props.onPress}>
      <SendButtonSvg />
    </TouchableOpacity>
  </View>
);

export default index;
