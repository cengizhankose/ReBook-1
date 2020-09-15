import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchIcon from '../../svg/SearchBlackSvg';

const index = (props) => (
  <View style={[styles.searchSection, props.style]}>
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor="#6D6D6D"
      secureTextEntry={props.secureTextEntry}
      value={props.value}
      onChangeText={props.onChangeText}
      style={styles.input}
      multiline
    />
  </View>
);

export default index;
