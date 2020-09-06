import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import back from '../../constant/images/home.png';
import Logo from '../../components/ReBookLogo/index';

const index = () => {
  return <ImageBackground source={back} style={{flex: 1}}></ImageBackground>;
};

const styles = StyleSheet.create({
  homeTop: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBottom: {
    flex: 4,
  },
});

export default index;
