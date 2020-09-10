import React from 'react';
import {View, Text, Image} from 'react-native';
import Input from '../../components/Input/SearchInput/index';
import {styles} from './styles';
import Logo from '../../svg/LogoSvg';


const index = () => {
  return (
    <View style={styles.mainContainer}>
      <Logo style={styles.logo}/>
      <Input placeholder="Aradığınız kitabın adını yazın..." style={styles.input}/>
    </View>
  );
};

export default index;