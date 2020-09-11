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
import {getBook} from '../../redux/addBook/actions';
import Heart from '../../svg/HeartFilledSvg';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const image = {uri: 'https://reactjs.org/logo-og.png'};

const CardItem = (props) => {
  const navigation = useNavigation();
  useEffect(() => {
    props.getBook();
  }, []);
  //TODO: Add favori fonksiyonu yazılacak
  const addFav = (favId) => {
    Alert.alert('Eklendi,', 'Bu kitabı favorilerinize eklendiniz.');
  };

  return (
    <>
      {props.books.map((book) => {
        const {title, content, author, price, seller_id} = book._data;
        console.log(title);
        return (
          <View style={styles.main} key={title}>
            <TouchableOpacity
              onPress={() => {
                console.log('wewtgwgerger');
                navigation.navigate('BookDetail', {book: book._data});
              }}>
              <View style={{flex: 3}} key={seller_id}>
                <ImageBackground
                  source={image}
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
      })}
    </>
  );
};
const mapFromStateToProps = ({auth, addBook}) => {
  const {user} = auth;
  const {books} = addBook;
  return {user, books};
};
export default connect(mapFromStateToProps, {getBook})(CardItem);
