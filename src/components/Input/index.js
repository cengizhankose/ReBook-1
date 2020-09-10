import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './style';

const index = (props) => {
  return (
    <TextInput
      style={[
        styles.textInput,
        props.style,
        {height: props.multiline ? 'auto' : null},
      ]}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      value={props.value}
      onChangeText={(value) => props.onChangeText(value)}
      multiline={props.multiline}
      numberOfLines={props.numberOfLines}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

export default index;
