import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const index = (props) => {
  return (
    <View style={props.style && props.style}>
      <TouchableOpacity style={styles.buttonView} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
