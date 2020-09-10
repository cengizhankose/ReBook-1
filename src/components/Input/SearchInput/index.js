import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchIcon from '../../../svg/SearchBlackSvg';

const SearchInput = (props) => (
  <View style={[styles.searchSection, props.style]}>
    <TouchableOpacity>
      <SearchIcon style={styles.sameIcon} />
    </TouchableOpacity>
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor="#6D6D6D"
      secureTextEntry={props.secureTextEntry}
      style={styles.input}
    />
  </View>
);

export default SearchInput;
