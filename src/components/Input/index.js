import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './style';

const index = (props) => {
  return (
    <TextInput
      {...props}
      style={[styles.textInput, props.style]}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      value={props.value}
      onChangeText={(value) => props.onChangeText(value)}
    />
  );
};

export default index;
