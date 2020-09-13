import React, {useState, useEffect} from 'react';
import {View, Text, Image, ImageBackground, Dimensions} from 'react-native';
import {styles, colors} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {add_to_favorite, removeFromFavori} from '../../redux/wishList/actions';

import RedHeart from '../../svg/HeartFilledSvg';
import Heart from '../../svg/HeartSvg';
const {height, width} = Dimensions.get('window');

const CardItemMini = (props) => {
  const navigation = useNavigation();
  const [isFavori, setIsFavori] = useState(false);
  //TODO: Add favori fonksiyonu yazılacak
  const addFav = async (favId) => {
    const favoriBook = props.book;
    const uid = props.uid;
    if (isFavori) {
      await props.removeFromFavori({favoriBook, isFavori, uid});
      setIsFavori(false);
    } else {
      await props.add_to_favorite({favoriBook, isFavori, uid});
      setIsFavori(true);
    }
  };
  const checkIsFav = () => {
    props.user.favorites.map((item) => {
      item.id === props.book.id && setIsFavori(true);
    });
  };
  useEffect(() => {
    checkIsFav();
  }, []);

  console.log(props.user);
  const {
    bookAuthor,
    bookName,
    bookLocation,
    bookPrice,
    img,
    widthP,
    heightP,
  } = props;
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
          <TouchableOpacity onPress={addFav}>
            {isFavori ? <RedHeart /> : <Heart />}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapFromStateToProps = ({Favorites, auth}) => {
  const {favorites, favoriLoading} = Favorites;
  const {uid, user} = auth;
  return {favorites, favoriLoading, uid, user};
};

export default connect(mapFromStateToProps, {
  add_to_favorite,
  removeFromFavori,
})(CardItemMini);
