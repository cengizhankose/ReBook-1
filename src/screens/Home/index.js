import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import Logo from '../../components/ReBookLogo/index';
import TopArea from './TopArea';
import MainArea from './MainArea';
const index = () => {
  return (
    <>
      <View>
        <TopArea />
      </View>
      <View>
        <MainArea />
      </View>
    </>
  );
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
