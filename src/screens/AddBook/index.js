import React, {Component} from 'react';
import {View, Text, Image, Alert, ScrollView} from 'react-native';
import {Spinner, Fab} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import Input from '../../components/Input/';
import Button from '../../components/Button/';
import {addBookAction} from '../../redux/addBook/actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';
import {Colors} from '../../constant/colors/colors';

class index extends Component {
  state = {
    title: '',
    content: '',
    price: '',
    author: '',
    images: [],
  };

  addBookHandler = (params, image) => {
    this.props.addBookAction(params, image, () =>
      this.props.navigation.replace('Dashboard'),
    );
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
      quality: 0.4,
      mediaType: 'photo',
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
        Alert.alert(
          'Hata',
          'Yükleme esnasında hata oluştu. \nTekrar Deneyiniz.' + response.error,
        );
      } else {
        this.setState({
          images: [...this.state.images, response.uri],
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
              isFav: false,
            };
            this.addBookHandler(params, images);
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
