import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const index = (props) => {
  return (
    <View style={styles.buttonView}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </View>
  );
};

export default index;
