import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const index = (props) => {
  return (
    <TouchableOpacity style={styles.checkView} onPress={props.onPress}>
      {props.isCheck && <View style={styles.checkSubView} />}
    </TouchableOpacity>
  );
};

export default index;
