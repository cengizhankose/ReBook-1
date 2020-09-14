import React, {useState} from 'react';
import {View, Text, Alert, ScrollView, Image, Modal} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import {Spinner, Fab} from 'native-base';
import {connect} from 'react-redux';

import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import {updateBookAction} from '../../redux/addBook/actions';

import {styles} from './styles';
import {Colors} from '../../constant/colors/colors';
const Index = (props) => {
  const route = useRoute();
  const [book, setBook] = useState(route.params);
  const [newImages, setnewImages] = useState([]);
  const firstImageArray = route.params.image;

  const addBookHandler = (params, images) => {
    props.updateBookAction(params, images, () =>
      props.navigation.replace('Dashboard'),
    );
  };
  const chooseBook = () => {
    const options = {
      title: 'Resimlerinizi seçin',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality: 0.4,
      allowsEditing: true,
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
        Alert.alert(
          'Hata',
          'Yükleme esnasında hata oluştu. \nTekrar Deneyiniz.' + response.error,
        );
      } else {
        setnewImages([response.uri, ...newImages]);
      }
    });
  };
  const deleteAllImages = () => {
    setBook({...book, image: []});
    setnewImages([]);
  };
  const {title, content, price, author, image} = book;
  return (
    <View style={styles.addBookView}>
      <View style={styles.imagesContainer}>
        {[...image, ...newImages].length !== 0 && (
          <ScrollView horizontal style={styles.scrollStyle}>
            {[...image, ...newImages].map((image) => (
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
          onChangeText={(value) => setBook({...book, title: value})}
        />
        <Input
          multiline={true}
          numberOfLines={6}
          placeholder={'Kitabın Durumu ve Açıklama'}
          style={styles.input}
          value={book.content}
          onChangeText={(value) => setBook({...book, content: value})}
        />
        <Input
          placeholder={'Fiyat'}
          style={styles.input}
          value={price}
          onChangeText={(value) => setBook({...book, price: value})}
        />
        <Input
          style={styles.input}
          placeholder={'Yazar'}
          value={author}
          onChangeText={(value) => setBook({...book, author: value})}
        />

        {props.bookUploading ? (
          <Spinner color="blue" />
        ) : (
          <>
            <View>
              <Icon.Button
                onPress={chooseBook}
                name="plus"
                color={'white'}
                style={styles.addBtn}>
                <Text style={styles.btnText}>Resim Ekle</Text>
              </Icon.Button>
            </View>
            <View style={{marginTop: 10}}>
              <Icon.Button
                onPress={deleteAllImages}
                name="remove"
                color={'white'}
                style={styles.removeBtn}>
                <Text style={styles.btnText}>Resimleri Sil</Text>
              </Icon.Button>
            </View>
          </>
        )}
      </View>

      <Fab
        onPress={() => {
          addBookHandler(book, newImages);
        }}
        style={{backgroundColor: Colors.orange}}>
        <Icon name="save" />
      </Fab>
    </View>
  );
};
const mapStateToProps = ({auth, addBook}) => {
  const {uid} = auth;
  const {bookUploading} = addBook;
  return {uid, bookUploading};
};

export default connect(mapStateToProps, {updateBookAction})(Index);
