import React, {useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {connect} from 'react-redux';

import Input from '../../components/Input/SearchInput/index';
import {styles} from './styles';
import Logo from '../../svg/LogoSvg';
import CardItem from '../../components/CardItem';
import CardItemMini from '../../components/CardItemMini';

const Index = (props) => {
  const [searchText, setSearchText] = useState('');
  const [filteredBooks, setfilteredBooks] = useState(null);

  const handleSearch = () => {
    const searchedList = props.books.filter((book) => {
      if (book.title.includes(searchText) || book.author.includes(searchText)) {
        return book;
      }
    });
    setfilteredBooks(searchedList);
  };

  const renderBook = ({item}) => <CardItemMini book={item} />;

  return (
    <View style={styles.mainContainer}>
      <View>
        <Logo style={styles.logo} />
        <Input
          placeholder="Aradığınız kitabın adını yazın..."
          style={styles.input}
          value={searchText}
          onPress={handleSearch}
          onSearchPress={handleSearch}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <View style={styles.flatlist}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => Math.random().toString()}
          renderItem={renderBook}
          data={filteredBooks}
          ListEmptyComponent={() => (
            <View style={styles.empty}>
              {filteredBooks === null ? null : (
                <Text style={styles.emptyText}>
                  {`Ne yazık ki herkes aradığınız ${searchText} kitabını halen okuyor ve satılıkta hiç yok.. \n:(`}
                </Text>
              )}
            </View>
          )}
        />
      </View>
    </View>
  );
};
const mapStateToProps = ({addBook}) => {
  const {books} = addBook;

  return {books};
};
export default connect(mapStateToProps, null)(Index);
