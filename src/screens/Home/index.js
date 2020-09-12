import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Logo from '../../svg/LogoSvg';

import {styles} from './styles';
import TopArea from './TopArea';
import MainArea from './MainArea';
const index = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../img/dummy.png')} />
        </TouchableOpacity>
        <Logo />
      </View>
      <View style={styles.body}>
        <TopArea />
      </View>
      <View style={styles.footer}>
        <MainArea />
      </View>
    </SafeAreaView>
  );
};

export default index;