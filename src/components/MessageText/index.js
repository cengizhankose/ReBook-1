import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Colors from '../../constant/colors/colors';

const index = (props) => (
  <View
    style={[
      {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: props.isUser ? '#fff6ed' : '#dcfcde',
        margin: 10,
        marginTop: 2,
        padding: 15,
        borderRadius: 15,
      },
      props.style,
    ]}>
    <Text>{props.text}</Text>
  </View>
);

export default index;
