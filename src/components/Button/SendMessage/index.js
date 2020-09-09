import React from 'react';
import {TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SendButtonSvg from '../../../svg/SendButtonSvg';

const index = (props) => (
  <View
    style={{
      backgroundColor: '#CDEAC0',
      width: 50,
      height: 50,
      borderRadius: 200,
      borderWidth:2,
      borderColor:"#fff",
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: '1%',
      paddingTop: '1%',
    }}>
    <TouchableOpacity>
      <SendButtonSvg />
    </TouchableOpacity>
  </View>
);

export default index;
