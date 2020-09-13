import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import {styles, colors} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Heart from '../../svg/HeartFilledSvg';
import {useNavigation} from '@react-navigation/native';

const CardItem = (props) => {
  const navigation = useNavigation();
  //TODO: Add favori fonksiyonu yazılacak
  const addFav = (favId) => {
    Alert.alert('Eklendi,', 'Bu kitabı favorilerinize eklendiniz.');
  };

  const {title, image, author, content, seller_id, price} = props.book;
  return (
    <View style={styles.main} key={title}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BookDetail', {book: props.book});
        }}>
        <View style={{flex: 3}} key={seller_id}>
          <ImageBackground
            source={{uri: image[0]}}
            imageStyle={{
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
            style={{flex: 1, width: 200, height: 220}}>
            <LinearGradient colors={colors} style={styles.LinearGradient}>
              <Text style={[styles.headerText, {fontSize: 18}]}>
                {title}{' '}
                <Text style={[styles.headerText, {fontSize: 10}]}>
                  {author}
                </Text>
              </Text>
            </LinearGradient>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      <View style={styles.footer}>
        <View>
          <Text style={styles.priceText}>
            {price}
            <Text style={{color: 'black'}}>
              ₺ <Text style={styles.locationText}>Istanbul</Text>
            </Text>
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={addFav}>
            <Heart />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardItem;
