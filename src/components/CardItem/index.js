import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import {styles, colors} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Spinner} from 'native-base';
import RedHeart from '../../svg/HeartFilledSvg';
import Heart from '../../svg/HeartSvg';
import {connect} from 'react-redux';
import {add_to_favorite, removeFromFavori} from '../../redux/wishList/actions';
import {useNavigation} from '@react-navigation/native';

const CardItem = (props) => {
  const navigation = useNavigation();
  const [isFavori, setIsFavori] = useState(false);
  //TODO: Add favori fonksiyonu yazılacak
  const addFav = async () => {
    const favoriBook = props.book;
    const uid = props.uid;
    if (isFavori) {
      await props.removeFromFavori({favoriBook, uid});
      setIsFavori(false);
    } else {
      await props.add_to_favorite({favoriBook, uid});
      setIsFavori(true);
    }
  };

  useEffect(() => {
    checkIsFav();
  }, []);

  const checkIsFav = () => {
    props.user &&
      props.user.favorites.map((item) => {
        item.id === props.book.id && setIsFavori(true);
      });
  };

  const {title, image, author, content, seller_id, price, isFav} = props.book;
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

        <TouchableOpacity onPress={addFav}>
          {isFavori ? <RedHeart /> : <Heart />}
        </TouchableOpacity>
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
})(CardItem);
