import React from 'react';
import {View, Text} from 'react-native';
import back from '../../constant/images/home.png';

const FirstScreen = () => {
  // @User login durumu burada kontrol edilir, sonrasında yönlendirme yapılır!
  return <ImageBackground source={back} style={{flex: 1}}></ImageBackground>;
};

export default FirstScreen;
