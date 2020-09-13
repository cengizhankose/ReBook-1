import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {getFavoriteBooks} from '../../redux/wishList/actions';
import CardItemMini from '../../components/CardItemMini/index';
import {connect} from 'react-redux';
import {styles} from './styles';
import Logo from '../../svg/LogoSvg';

const placeHolder = 'https://reactjs.org/logo-og.png';

const Index = (props) => {
  useEffect(() => {
    const func = async () => {
      const uid = props.uid;
      await props.getFavoriteBooks(uid);
    };
    func();
  }, []);

  const renderItem = ({item}) => (
    <CardItemMini
      book={item}
      key={item.title + Math.random()}
      bookAuthor={item.author}
      bookName={item.title}
      bookLocation={item.author}
      bookPrice={item.price}
      seller_id={item.uid}
      img={item.image ? item.image[0] : placeHolder}
      widthP={0.4}
      heightP={0.3}
    />
  );
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoView}>
        <Logo style={styles.logo} />
      </View>
      <View style={{flex: 0.1}}>
        <Text
          style={{
            color: '#FFAC81',
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: '5%',
          }}>
          Wi<Text style={{color: 'black'}}>shlist</Text>
        </Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={props.favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.title + Math.random(0, 6)}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const mapStateToProps = ({Favorites, auth}) => {
  const {favorites} = Favorites;
  const {uid} = auth;
  return {favorites, uid};
};

export default connect(mapStateToProps, {getFavoriteBooks})(Index);
