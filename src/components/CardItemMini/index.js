import React from 'react';
import {View, Text, Image, ImageBackground, Dimensions} from 'react-native';
import {styles, colors} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import Heart from '../../svg/HeartSvg';

const {height, width} = Dimensions.get('window');

const CardItemMini = (props) => {
  const {
    bookAuthor,
    bookName,
    bookLocation,
    bookPrice,
    img,
    widthP,
    heightP,
  } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => navigation.navigate('BookDetail', {book: props.book})}
        style={[
          styles.touchableArea,
          {
            width: widthP && width * widthP,
            height: heightP ? height * heightP : height * 0.2,
          },
        ]}>
        <ImageBackground
          source={{uri: img}}
          imageStyle={{
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
          style={{width: '100%', height: '100%'}}>
          <LinearGradient colors={colors} style={styles.LinearGradient}>
            <Text style={[styles.headerText, {fontSize: 16}]}>
              {bookName}{' '}
              <Text style={[styles.headerText, {fontSize: 6}]}>
                {bookAuthor}
              </Text>
            </Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.footer}>
        <View>
          <Text style={styles.priceText}>
            {bookPrice}
            <Text style={{color: 'black'}}>
              ₺ <Text style={styles.locationText}>{bookLocation}</Text>
            </Text>
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Heart stroke="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardItemMini;
