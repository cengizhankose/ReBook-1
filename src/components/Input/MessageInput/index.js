import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchIcon from '../../../svg/SearchBlackSvg';

const index = (props) => (
  <View style={[styles.searchSection, props.style]}>
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor="#6D6D6D"
      secureTextEntry={props.secureTextEntry}
      style={styles.input}
    />
  </View>
);

export default index;
