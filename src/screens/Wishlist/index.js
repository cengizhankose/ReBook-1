import React from 'react';
import {View, Text, Image} from 'react-native';
import Input from '../../components/Input/SearchInput/index';
import {styles} from './styles';
import Logo from '../../svg/LogoSvg';

const index = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoView}>
        <Logo style={styles.logo} />
      </View>
      <View style={{flex: 8}}>
        <Text style={{color: '#FFAC81', fontSize:18, fontWeight:"bold",marginLeft:"5%"}}>
          Wi<Text style={{color: 'black'}}>shlist</Text>
        </Text>
      </View>
    </View>
  );
};

export default index;
