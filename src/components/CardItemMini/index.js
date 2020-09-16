import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Alert,
  Linking,
} from 'react-native';
import {styles, colors} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, Link} from '@react-navigation/native';
import {connect} from 'react-redux';
import {add_to_favorite, removeFromFavori} from '../../redux/wishList/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RedHeart from '../../svg/HeartFilledSvg';
import Heart from '../../svg/HeartSvg';
import {Colors} from '../../constant/colors/colors';
import {Line} from 'react-native-svg';

const {height, width} = Dimensions.get('window');

const CardItemMini = (props) => {
  Icon.loadFont();
  const navigation = useNavigation();
  const [isFavori, setIsFavori] = useState(false);
  const addFav = async () => {
    if (props.user) {
      const favoriBook = props.book;
      const uid = props.uid;
      if (isFavori) {
        await props.removeFromFavori({favoriBook, uid});
        setIsFavori(false);
      } else {
        await props.add_to_favorite({favoriBook, uid});
        setIsFavori(true);
      }
    } else {
      Alert.alert(
        'Lütfen Giriş Yapın.',
        'Favori listesini kullanmak için giriş yapınız.',
        [
          {
            text: 'Tamam',
          },
          {
            text: 'Giriş Yap',
            onPress: () => navigation.navigate('Login'),
          },
        ],
      );
    }
  };
  const checkIsFav = async () => {
    props.user &&
      props.user.favorites.map((item) => {
        item.id === props.book.id && setIsFavori(true);
      });
  };

  useEffect(() => {
    const getCheck = async () => {
      await checkIsFav();
    };
    getCheck();
  }, []);

  const {widthP, heightP} = props;

  const {
    title,
    image,
    author,
    content,
    seller_id,
    location = location ? location : 'Istanbul',
    price,
    link,
  } = props.book;

  return (
    <View style={[styles.main, {marginTop: props.marginTop ? '0.1%' : '2%'}]}>
      <TouchableOpacity
        onPress={() =>
          Array.isArray(image)
            ? navigation.navigate('BookDetail', {book: props.book})
            : Linking.openURL(link)
        }
        style={[
          styles.touchableArea,
          {
            width: widthP && width * widthP,
            height: heightP ? height * heightP : height * 0.2,
          },
        ]}>
        <ImageBackground
          source={
            image
              ? {uri: Array.isArray(image) ? image[0] : image}
              : require('../../constant/images/loadingImage.gif')
          }
          imageStyle={{
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
          style={{width: '100%', height: '100%'}}>
          <LinearGradient colors={colors} style={styles.LinearGradient}>
            <Text
              style={[
                styles.headerText,
                {fontSize: 16, textTransform: 'capitalize'},
              ]}>
              {title}{' '}
              <Text style={[styles.headerText, {fontSize: 6}]}>{author}</Text>
            </Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.footer}>
        <View>
          <Text style={styles.priceText}>
            {price}
            <Text style={{color: 'black'}}>
              ₺ <Text style={styles.locationText}>{location}</Text>
            </Text>
          </Text>
        </View>
        <View>
          {location !== 'NY Times' ? (
            <TouchableOpacity onPress={addFav}>
              {isFavori ? <RedHeart /> : <Heart />}
            </TouchableOpacity>
          ) : (
            <Icon name="trending-up" size={20} color={Colors.softPink} />
          )}
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
