import React, {Component} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {Spinner, Fab} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import Input from '../../components/Input/';
import Button from '../../components/Button/';
import {addBookAction} from '../../redux/addBook/actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';
import {Colors} from '../../constant/colors/colors';
import {ScrollView} from 'react-native-gesture-handler';

class index extends Component {
  state = {
    title: 'Deneme',
    content: 'deneme1',
    price: '40',
    author: 'George Orwell',
    images: [],
  };

  addBookHandler = async (params, image) => {
    await this.props.addBookAction(params, image, () => this.props.navigation.pop());
    this.setState({
      title: '',
      content: '',
      price: '',
      author: '',
      images: [],
    });
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
        Alert.alert(
          'Hata',
          'Yükleme esnasında hata oluştu. \nTekrar Deneyiniz.',
        );
      } else {
        this.setState({
          images: [response.uri, ...this.state.images],
        });
      }
    });
  };

  render() {
    const {title, content, price, author, images} = this.state;

    return (
      <View style={styles.addBookView}>
        <View style={styles.imagesContainer}>
          {images.length !== 0 && (
            <ScrollView horizontal style={styles.scrollStyle}>
              {images.map((image) => (
                <Image key={image} source={{uri: image}} style={styles.image} />
              ))}
            </ScrollView>
          )}
        </View>
        <View style={styles.main}>
          <Input
            style={styles.input}
            placeholder={'Kitap İsmi'}
            value={title}
            onChangeText={(value) => this.setState({title: value})}
          />
          <Input
            multiline={true}
            numberOfLines={6}
            placeholder={'Kitabın Durumu ve Açıklama'}
            style={styles.input}
            value={content}
            onChangeText={(value) => this.setState({content: value})}
          />
          <Input
            placeholder={'Fiyat'}
            style={styles.input}
            value={price}
            onChangeText={(value) => this.setState({price: value})}
          />
          <Input
            style={styles.input}
            placeholder={'Yazar'}
            value={author}
            onChangeText={(value) => this.setState({author: value})}
          />

          {this.props.bookUploading ? (
            <Spinner color="blue" />
          ) : (
            <Icon.Button
              onPress={() => this.chooseBook()}
              name="plus"
              color={'white'}
              style={styles.addBtn}>
              <Text style={styles.btnText}>Resim Ekle</Text>
            </Icon.Button>
          )}
        </View>

        <Fab
          onPress={() => {
            const params = {
              title,
              content,
              price,
              author,
              seller_id: this.props.uid,
            };
            this.addBookHandler(params, this.state.images);
          }}
          style={{backgroundColor: Colors.orange}}>
          <Icon name="save" />
        </Fab>
      </View>
    );
  }
}

const mapStateToProps = ({auth, addBook}) => {
  const {uid} = auth;
  const {bookUploading} = addBook;
  return {uid, bookUploading};
};

export default connect(mapStateToProps, {addBookAction})(index);
