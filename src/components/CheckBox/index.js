import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const index = (props) => {
  return (
    <View style={styles.checkView}>
      <View style={styles.checkSubView} />
    </View>
  );
};

export default index;
