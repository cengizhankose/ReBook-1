import React from 'react';
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
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const CardItem = (props) => {
  const navigation = useNavigation();

  //TODO: Add favori fonksiyonu yazılacak
  const addFav = (favId) => {
    Alert.alert('Eklendi,', 'Bu kitabı favorilerinize eklendiniz.');
  };
  const {img, bookAuthor, bookLocation, bookPrice, bookName} = props;
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => navigation.navigate('BookDetail', {book: props.book})}>
        <View style={{flex: 3}}>
          <ImageBackground
            source={{uri: img}}
            imageStyle={{
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
            style={{flex: 1, width: 200, height: 220}}>
            <LinearGradient colors={colors} style={styles.LinearGradient}>
              <Text style={[styles.headerText, {fontSize: 18}]}>
                {bookName}{' '}
                <Text style={[styles.headerText, {fontSize: 10}]}>
                  {bookAuthor}
                </Text>
              </Text>
            </LinearGradient>
          </ImageBackground>
        </View>
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
          <TouchableOpacity onPress={addFav}>
            <Heart />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const mapFromStateToProps = ({auth}) => {
  const {user} = auth;
  return {user};
};
export default connect(mapFromStateToProps, null)(CardItem);
