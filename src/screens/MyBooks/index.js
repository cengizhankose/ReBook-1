import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import CardItemMini from '../../components/CardItemMini';
import ButtonText from '../../components/ButtonText';
import Button from '../../components/Button';

import {getMyBooks} from '../../redux/addBook/actions';
import {styles} from './styles';

const Index = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMyBooks(props.uid));
  }, []);

  const renderItem = ({item}) => <CardItemMini book={item} />;
  const emptyContent = () => (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: '10%',
      }}>
      <Text style={{textAlign: 'center'}}>Daha hiç kitap eklemediniz.</Text>
      <View
        style={{
          marginTop: '5%',
        }}>
        <ButtonText
          onPress={() => props.navigation.navigate('KitapEkle')}
          text="Kitap ekle "
        />
        <ButtonText
          onPress={() => props.navigation.replace('Dashboard')}
          text="Ana Sayfa "
          style={{marginTop: '10%'}}
        />
      </View>
    </View>
  );
  return (
    <View style={styles.pageContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          <Text style={styles.pink}>Ür</Text>ünlerim
        </Text>
        <Image
          style={styles.img}
          source={require('../../constant/images/book.png')}
        />
      </View>
      <View>
        <FlatList
          data={props.myBooks}
          key={(item) => item.title + Math.random()}
          renderItem={renderItem}
          numColumns={2}
          ListEmptyComponent={emptyContent}
        />
      </View>
    </View>
  );
};

const mapStateToProps = ({addBook, auth}) => {
  const {myBooks} = addBook;
  const {uid} = auth;
  return {myBooks, uid};
};

export default connect(mapStateToProps, null)(Index);
