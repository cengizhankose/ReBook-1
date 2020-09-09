import React from 'react';
import {View, ImageBackground} from 'react-native';
import {styles} from './styles';
import MessageInput from '../../../components/Input/MessageInput';
import MessageButton from '../../../components/Button/SendMessage';

const index = () => {
  return (
    <ImageBackground
      style={styles.mainContainer}
      imageStyle={{flex: 1}}
      source={require('../../../img/MessagesBackground.png')}>
      <View style={{flex: 9}}>
        <View
          style={{
            borderWidth: 2,
            margin: 10,
            flex: 1,
            borderRadius: 15,
            borderColor: 'white',
          }}></View>
      </View>
      <View style={{flex: 1,flexDirection:"row",alignItems:"center",justifyContent: 'space-around',}}>
        <MessageInput placeholder={"Mesajınızı Yazın"}/>
        <MessageButton />
      </View>
    </ImageBackground>
  );
};

export default index;
