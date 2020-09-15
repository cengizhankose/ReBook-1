import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const index = (props) => (
  <View
    style={[{backgroundColor: 'yellow', width: 200, height: 60}, props.style]}>
    <Text>{props.text}</Text>
  </View>
);

export default index;
