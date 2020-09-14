import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import CardItemMini from '../../components/CardItemMini';
import {getMyBooks} from '../../redux/addBook/actions';
import {styles} from './styles';

const Index = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMyBooks(props.uid));
  }, []);

  const renderItem = ({item}) => <CardItemMini book={item} />;
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
      <FlatList
        data={props.myBooks}
        key={(item) => item.title + Math.random()}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

const mapStateToProps = ({addBook, auth}) => {
  const {myBooks} = addBook;
  const {uid} = auth;
  return {myBooks, uid};
};

export default connect(mapStateToProps, null)(Index);
