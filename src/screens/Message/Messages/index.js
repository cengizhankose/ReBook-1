import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

import Logo from '../../../svg/MessagesLogoSvg';
import Message from '../../../components/MessageContainer/index';

const index = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Logo style={{margin: 20, marginBottom: 18}} />
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#FF928B',
        }}
      />
      <Message 
        firstLetters="CK"
        lastMessage="Neredesiniz ?"
        messageCount="3"
      />
      <Message 
        firstLetters="TZ"
        lastMessage="Son fiyat ne olur"
        messageCount="1"
      />
      <Message 
        firstLetters="Oİ"
        lastMessage="Fiyat konusunda anlaşabiliriz"
        messageCount="4"
      />
    </View>
  );
};

export default index;
