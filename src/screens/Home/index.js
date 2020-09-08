import React from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import Logo from '../../svg/LogoSvg';
import CardItem from '../../components/CardItem/index';
import CardItemMini from '../../components/CardItemMini/index';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
        <Text
          style={{
            color: '#FFAC81',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Po<Text style={{color: 'black'}}>püler </Text>
          <Text
            style={{
              color: '#FF928B',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Ki<Text style={{color: 'black'}}>taplar</Text>
          </Text>
        </Text>
        <CardItemMini />
      </View>
      <View style={styles.footer}>
        <Text
          style={{
            color: '#FFAC81',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Ye<Text style={{color: 'black'}}>ni </Text>
          <Text
            style={{
              color: '#FFAC81',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Ek<Text style={{color: 'black'}}>lenen </Text>
          </Text>
          <Text
            style={{
              color: '#FF928B',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Ki<Text style={{color: 'black'}}>taplar</Text>
          </Text>
        </Text>

        <CardItem/>
      </View>
    </SafeAreaView>
  );
};

export default index;
