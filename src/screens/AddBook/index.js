import React, {useState, Component} from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import {addBook} from '../../redux/addBook/actions';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');
class index extends Component {
  state = {
    title: 'Deneme',
    content: 'deneme1',
    price: '40',
    author: 'George Orwell',
  };
  render() {
    const {title, content, price, author} = this.state;
    return (
      <View style={styles.addBookView}>
        <Text style={styles.addBookTitle}>Kitap Ekle</Text>
        <Input
          style={{marginBottom: 20, borderColor: '#818081', borderWidth: 1}}
          placeholder={'Kitap İsmi'}
          value={title}
          onChangeText={(value) => this.setState({title: value})}
        />
        <Input
          multiline={true}
          numberOfLines={6}
          placeholder={'Kitabın Durumu ve Açıklama'}
          style={{marginBottom: 20, borderColor: '#818081', borderWidth: 1}}
          value={content}
          onChangeText={(value) => this.setState({content: value})}
        />
        <Input
          placeholder={'Fiyat'}
          style={{marginBottom: 20, borderColor: '#818081', borderWidth: 1}}
          value={price}
          onChangeText={(value) => this.setState({price: value})}
        />
        <Input
          style={{marginBottom: 20, borderColor: '#818081', borderWidth: 1}}
          placeholder={'Yazar'}
          value={author}
          onChangeText={(value) => this.setState({author: value})}
        />
        <Button
          text="Kitap Ekle"
          onPress={() => {
            this.props.addBook({
              title,
              content,
              price,
              author,
              uid: this.props.uid,
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addBookView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  addBookTitle: {
    fontSize: 26,
    marginBottom: height * 0.04,
  },
});

const mapStateToProps = ({UserId}) => {
  const {uid} = UserId;
  return {uid};
};

export default connect(mapStateToProps, {addBook})(index);
