import React, {useState} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {changePassword} from '../../redux/auth/actions';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonText from '../../components/ButtonText';
import {styles} from './styles';
import {Colors} from '../../constant/colors/colors';
const Index = () => {
  const [newPassword, setNewPassword] = useState('');
  const [newImage, setNewImage] = useState('');
  const navigation = useNavigation();
  const {user, uid} = useSelector((state) => state.auth);

  const handleChangePassword = async () => {
    await changePassword({newPassword, newImage, uid}, () => {
      setNewPassword('');
    });
    navigation.navigate('AnaSayfa');
  };

  const chooseImg = () => {
    const options = {
      title: 'Profil resminizi seçin seçin',
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
        setNewImage(response.uri);
      }
    });
  };
  return (
    <View style={styles.pageContainer}>
      <View style={styles.top}>
        <Text style={{color: Colors.softPink, fontSize: 28}}>
          Ay<Text style={{color: 'black'}}>arlar</Text>
        </Text>
        <Image
          style={{tintColor: Colors.softPink, marginLeft: 5}}
          source={require('../../constant/images/book.png')}
        />
      </View>
      <View style={styles.body}>
        <View>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: 'center',
            }}
            source={{uri: user.profile_img}}
          />
          <View style={{marginVertical: 20, alignItems: 'center'}}>
            <ButtonText onPress={chooseImg} text="Resim değiştir" />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Lütfen yeni şifrenizi yazınız</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={(text) => setNewPassword(text)}
            value={newPassword}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            onPress={() => handleChangePassword()}
            text="Yeni Şifreyi Kaydet"
          />
        </View>
        <View style={styles.cancelContainer}>
          <Button
            onPress={() => navigation.navigate('AnaSayfa')}
            text="İptal"
          />
        </View>
      </View>
    </View>
  );
};

export default Index;
