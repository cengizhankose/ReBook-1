import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {styles, colors} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import Heart from '../../svg/HeartFilledSvg';

const CardItem = (props) => (
  <TouchableOpacity style={styles.main}>
    <View style={{flex: 3}}>
      <ImageBackground
        source={require('../../img/steve.jpg')}
        imageStyle={{
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
        style={{flex: 1}}>
        <LinearGradient colors={colors} style={styles.LinearGradient}>
          <Text style={[styles.headerText, {fontSize: 18}]}>
            Steve Jobs{' '}
            <Text style={[styles.headerText, {fontSize: 10}]}>
              Walter ISAACSON
            </Text>
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
    <View style={styles.footer}>
      <Text style={styles.priceText}>
        30{' '}
        <Text style={{color: 'black'}}>
          ₺ <Text style={styles.locationText}>Ankara</Text>
        </Text>
      </Text>
      <TouchableOpacity style={{marginRight: '10%'}}>
        <Heart />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

export default CardItem;
