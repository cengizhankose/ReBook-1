import React, {useState, Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {Spinner} from 'native-base';
import ImagePicker from 'react-native-image-picker';
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
    images: null,
  };

  addBookHandler = async (params) => {
    await this.props.addBook(params);
    // this.props.navigation.navigate('Search');
  };

  chooseBook = () => {
    const options = {
      title: 'Resimlerinizi seçin',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response.uri);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.setState({
          images: response.uri,
        });
      }
    });
  };

  render() {
    const {title, content, price, author} = this.state;

    return (
      <View style={styles.addBookView}>
        <Text style={styles.addBookTitle}>Kitap Ekle</Text>
        {this.state.images && (
          <Image
            style={{width: 30, height: 30}}
            source={{uri: this.state.images}}
          />
        )}
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

        {this.props.bookUploading ? (
          <Spinner color="blue" />
        ) : (
          <>
            <Button
              text="Resim Ekle"
              onPress={() => {
                this.chooseBook();
              }}
            />
            <Button
              text="Kitap Ekle"
              onPress={() => {
                const params = {
                  title,
                  content,
                  price,
                  author,
                  image: this.state.images,
                  uid: this.props.uid,
                };
                this.addBookHandler(params);
              }}
            />
          </>
        )}
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

const mapStateToProps = ({auth, addBook}) => {
  const {uid} = auth;
  const {bookUploading} = addBook;
  return {uid, bookUploading};
};

export default connect(mapStateToProps, {addBook})(index);
