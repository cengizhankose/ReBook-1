import React from 'react';
import {StatusBar, View, Platform} from 'react-native';
import {Colors} from '../../constant/colors/colors';
const STATUS_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight;

const Index = () => {
  return (
    <View
      style={{
        width: '100%',
        height: STATUS_HEIGHT,
        backgroundColor: Colors.softPink,
      }}>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default Index;
